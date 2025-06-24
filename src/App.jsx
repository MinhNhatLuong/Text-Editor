import { useState, useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import './App.css'

function App() {
  //htmlCode is the state that stores the generated HTML code
  const [htmlCode, setHtmlCode] = useState('');
  //Just a boolean variable to check if the auto update is enabled or not
  const [autoUpdate, setAutoUpdate] = useState(false);
  //State to track the screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const editorRef = useRef(null);

  //Effect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //The goal of escapeHTML funtion is convert special characters in HTML to HTML entities to display them as text instead of being interpreted as HTML tags by the browser.
  //I think this one is quite important, if you want to save it into database, you should use this function to escape the HTML code.
  const escapeHTML = (html) => {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  //This function will be triggered when user clicked the generate button
  //editorRef.current is the editor object, it is a reference to the editor instance
  //It use the editorRef.current.getContent() (getContent is a method of the editor object) to get the content of the editor
  //And then set the htmlCode state to the content of the editor
  const generateHTML = () => {
    if (editorRef.current) {
      setHtmlCode(editorRef.current.getContent());
    }
  };
  
  //When user clicked the auto update button, it will trigger this function to toggle the auto update state
  const toggleAutoUpdate = () => {
    setAutoUpdate(!autoUpdate);
  };

  return (
    <div className="app-container">
      <h1>WYSIWYG Text Editor</h1>
      <div className="editor-container">
        <div className="editor-panel">
          <h2>Editor</h2>
          <Editor
            //apiKey key will be taken from the .env file
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            //onInit is a callback function that will be triggered when the editor is initialized
            //evt is the event object, editor is the editor object
            //editorRef.current is the editor object, it is a reference to the editor instance
            //It use the editorRef.current = editor to set the editor object to the editorRef.current
            onInit={(evt, editor) => editorRef.current = editor}
            //Just a initial value
            initialValue="<p>Enter your content here...</p>"
            //onEditorChange is a callback function that will be triggered when the editor content is changed
            //If autoUpdate is true, it will trigger the generateHTML function to generate the HTML code
            //If autoUpdate is false, it will not trigger the generateHTML function
            onEditorChange={autoUpdate ? generateHTML : undefined}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
          <div className="button-group">
            <button className="generate-btn" onClick={generateHTML}>Generate HTML</button>
            <label className="auto-update-label">
              <input 
                type="checkbox" 
                checked={autoUpdate} 
                onChange={toggleAutoUpdate} 
              />
              Auto-update HTML
            </label>
          </div>
        </div>
        
        {/* This is the code panel, it will display the generated HTML code */}
        <div className="code-panel">
          <h2>Generated HTML</h2>
          <pre 
            className="html-code"
            dangerouslySetInnerHTML={{ __html: escapeHTML(htmlCode) }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
