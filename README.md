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

## Deployment to Render

### Prerequisites
- A GitHub account with your project repository
- A Render account
- TinyMCE API key

### Steps to Deploy

1. **Push your code to GitHub**
   - Make sure your project is pushed to a GitHub repository

2. **Sign up for Render**
   - Go to [render.com](https://render.com/) and create an account if you don't have one

3. **Create a new Static Site**
   - From the Render dashboard, click "New" and select "Static Site"
   - Connect your GitHub account and select your repository
   - Configure the following settings:
     - **Name**: Choose a name for your site
     - **Branch**: Select the branch to deploy (usually `main`)
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `dist`

4. **Set Environment Variables**
   - In the "Environment" section, add your TinyMCE API key:
     - Key: `VITE_TINYMCE_API_KEY`
     - Value: Your TinyMCE API key

5. **Configure TinyMCE Domain**
   - Your Render deployment domain needs to be approved in your TinyMCE account:
     - Log in to your [TinyMCE account](https://www.tiny.cloud/auth/login/)
     - Navigate to "Approved Domains" in your dashboard
     - Add your Render domain (e.g., `your-app-name.onrender.com`)

6. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your application

7. **Access Your Site**
   - Once deployment is complete, your site will be available at `https://your-app-name.onrender.com`
   - Render will automatically redeploy your site when you push changes to your repository

### Troubleshooting

If you see the error "This domain is not registered in the TinyMCE Customer Portal", make sure you've added your Render domain to the approved domains in your TinyMCE account as described in step 5.

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
