# WYSIWYG Text Editor

A simple, modern text editor with WYSIWYG (What You See Is What You Get) functionality using TinyMCE. This editor allows you to write formatted content and see the generated HTML code in real-time.

## Features

- Split-screen interface with editor on the left and HTML code on the right
- Rich text editing with TinyMCE
- Real-time HTML code generation
- Option for automatic HTML code updates while typing
- Responsive layout

## Setup Instructions

1. Clone this repository
```bash
git clone https://github.com/MinhNhatLuong/Text-Editor.git
cd text-editor
```

2. Install the dependencies
```bash
npm install
```

3. Set up environment variables
   - Copy the example environment file
   ```bash
   cp .env.example .env
   ```
   - Edit the `.env` file and add your TinyMCE API key
   ```
   VITE_TINYMCE_API_KEY=your_api_key_here
   ```
   - You can get a free API key from [TinyMCE](https://www.tiny.cloud/auth/signup/)

4. Run the development server
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Usage

1. Use the left panel to write and format your content using the rich text editor
2. The right panel shows the generated HTML code
3. You can click the "Generate HTML" button to manually update the HTML code
4. Alternatively, enable the "Auto-update HTML" option to see real-time HTML updates as you type

## Built With

- React
- TinyMCE
- Vite

## License

This project is open-source. Feel free to use and modify it for your needs.

## Contributing

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
