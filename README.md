# DOODLE

An open-source website designed to provide children with free coloring sheets and educational resources aims to support their cognitive and creative development. This platform, accessible to anyone, focuses on offering high-quality, engaging coloring materials that encourage children to explore their creativity, improve fine motor skills, and enhance focus. By fostering a playful learning environment, the website also introduces children to educational concepts in an enjoyable way.

## Contribute a Coloring Page

To contribute a coloring page, please follow these steps:

1. **Fork this Repository**  
   Begin by forking this repository to your own GitHub account.

2. **Locate the `data.json` File**  
   Navigate to `./public/data.json` in the project directory.

3. **Add Your Coloring Page Information**  
   Add a JSON object with details about the coloring page, following the format below. Ensure that the URL points to the image you wish to share.

   ```json
   {
       "id": <id>,
       "name": <name>,
       "ageGroup": 1,
       "url": <url>
   }
   ```

   - **id**: Unique identifier for the coloring page.
   - **name**: Title or brief description of the drawing.
   - **ageGroup**: Suggested age range for the coloring activity.
   - **url**: Direct URL link to the coloring page image.

4. **Create a Pull Request**  
   Once you’ve made the changes, submit a pull request to merge your addition into the main project.

Your contribution helps provide free, accessible coloring resources to children and supports their development through creative learning. Thank you for contributing!

## Steps to Contribute and Build the Website

### Prerequisites

Before contributing to this project, make sure you have the following tools installed:

- **Node.js** (v14 or later)  
  You can download and install it from [Node.js official website](https://nodejs.org/).
- **Git**  
  Ensure Git is installed on your system. Download it from [Git official website](https://git-scm.com/).

### 1. Fork the Repository

- Visit the repository page on GitHub and click the **Fork** button at the top right to create a copy of the repository under your own account.

### 2. Clone the Repository

- Clone the repository to your local machine using the following command:

  ```bash
  git clone https://github.com/rajv4rdhan/DoodleDelight.git
  ```

### 3. Install Dependencies

- Navigate to the project folder and install the required dependencies by running:

  ```bash
  cd DoodleDelight
  npm install
  ```

  This will install all the necessary packages, including React, Vite, Tailwind CSS, and Material-UI (MUI), as specified in the `package.json` file.

### 4. Set Up Tailwind CSS

- Tailwind is already configured in this project, but if you're setting it up from scratch, you can follow these steps:
  
  - Install Tailwind CSS by running:

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

  - Generate the Tailwind configuration files:

    ```bash
    npx tailwindcss init
    ```

  - Add the following paths to the `tailwind.config.js` file under the `content` array:

    ```js
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    ```

  - Add the following lines to the top of your `src/index.css`:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### 5. Set Up Material-UI (MUI)

- Material-UI (MUI) is already included in this project, but if you need to install it, run:

  ```bash
  npm install @mui/material @emotion/react @emotion/styled
  ```

### 6. Run the Development Server

- Start the development server by running the following command:

  ```bash
  npm run dev
  ```

  This will launch the development server and open the project in your default browser. You can now make changes to the code, and the browser will automatically reload to reflect the changes.

### 7. Contribute Your Changes

- To contribute, create a new branch to work on your feature or bug fix:

  ```bash
  git checkout -b your-branch-name
  ```

- Make your changes to the code. For example, you can add a new coloring page or improve the UI.

- After making changes, stage and commit your changes:

  ```bash
  git add .
  git commit -m "Add new feature or fix bug"
  ```

- Push your changes to your fork:

  ```bash
  git push origin your-branch-name
  ```

### 8. Create a Pull Request

- Go to your repository on GitHub, and you'll see a prompt to create a pull request for your changes.
- Click **New Pull Request**, and then select the base branch (usually `main`) and the compare branch (your feature branch).
- Provide a brief description of your changes and submit the pull request.

### 9. Review and Merge

- The project maintainers will review your pull request. If everything looks good, they will merge your changes into the main repository.

### 10. Build the Project for Production (Optional)

- To build the project for production, run the following command:

  ```bash
  npm run build
  ```

  This will generate the production-ready files in the `dist` folder.

### 11. Celebrate Your Contribution

- Congratulations! You've successfully contributed to the project. Your changes will now help children access free coloring resources and educational materials!

Thank you for contributing!
