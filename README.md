# GitHub User Search

A modern React application for searching and viewing GitHub user profiles. Built with React, Styled Components, and the GitHub API.

## [Design - Figma](https://www.figma.com/design/uDUI9mShrkzbwHcLSIdQyx/github-user-search-app?node-id=0-1&p=f&t=Qs5myOSZP9ccpQ8I-0)

### Screenshot

![](./src/assets/design/preview.jpg)

## Overview

GitHub User Search is a responsive web application that allows users to search for GitHub profiles and view detailed information about users, including their repositories, followers, following count, location, social links, and more. The application features a clean, modern interface with dark/light theme support.

## Features

- 🔍 **User Search**: Search for any GitHub user by username
- 🌓 **Theme Toggle**: Switch between light and dark themes
- 📱 **Responsive Design**: Fully responsive layout that works on all devices
- ⚡ **Real-time Data**: Fetch and display user data from GitHub API
- 🎨 **Modern UI**: Beautiful interface built with Styled Components
- ⏳ **Loading States**: Visual feedback during data fetching
- 🔗 **Social Links**: Direct links to user's website, Twitter, and company profile
- 📊 **User Stats**: View repositories, followers, and following counts

## Technologies Used

- **React** 18.2.0 - UI library
- **Styled Components** 5.3.6 - CSS-in-JS styling
- **GitHub API** - User data fetching
- **Create React App** - Build tooling and development environment

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd GitHub-user-search
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
# or
npm run dev
```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

In the project directory, you can run:

- `npm start` or `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner in interactive watch mode

## Project Structure

```
src/
├── components/
│   ├── App.js              # Main application component with API logic
│   ├── Search.js           # Search bar and theme toggle component
│   ├── User.js             # User profile display component
│   └── styles/             # Styled components
│       ├── App.Styled.js   # Main app styles
│       ├── Search.Styled.js # Search bar styles
│       └── UserInfo.Styled.js # User info card styles
├── assets/                 # Images, icons, and design assets
│   ├── design/            # Design preview images
│   └── *.svg              # Icon assets
├── index.js               # Application entry point
└── index.css              # Global styles
```

## Features Implementation

- **API Integration**: Uses GitHub's public REST API to fetch user data
- **State Management**: React hooks (useState, useEffect) for component state
- **Error Handling**: Comprehensive error handling for API failures
- **Loading States**: Loading indicators for better user experience
- **Theme Management**: Theme state management with visual toggle
- **Responsive Design**: Mobile-first approach with CSS media queries
- **URL Validation**: Automatic URL formatting for user websites

## Author

**Tamara Tava**

- LinkedIn: [@tamara-tava](https://www.linkedin.com/in/tamara-tava/)

## License

This project is open source and available under the MIT License.
