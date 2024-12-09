# Netflix-GEMINI

![Project Logo](./src/assests/images/Netflix_Logo_PMS.png)

Netflix-GPT is a web application that enhances your movie browsing experience by integrating the Gemini model to provide personalized movie recommendations. Users can sign in using their Google account for a seamless experience and get AI-generated suggestions tailored to their preferences.

## Live Demo

- Check out the live application [here](https://netflix-gpt-aman2eac.web.app)

## Features

### User Authentication
- **Email and Password Sign-In/Sign-Up**: Create an account using your email address.
- **Google Sign-In**: Quickly sign in using your Google account for fast and secure access.

### Browse Page
- **Header with Navigation**: Easy access to different sections and features.
- **Main Movie Display**: Showcases featured movies with background trailers, titles, and overviews.
- **Movie Lists**: Explore various categories, including Now Playing, Popular, Top Rated, and Upcoming movies.

### Gemini Search Feature
- **AI-Powered Recommendations**: Utilize Gemini model to get personalized movie suggestions based on natural language queries.
- **Interactive Search Bar**: Input queries like "Show me some action movies similar to John Wick" and receive tailored recommendations.
- **Dynamic Results Display**: View AI-generated movie suggestions with images, titles, and additional details.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt
    ```
2. **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```
3. **Set Up Environment Variables**
    *Create a `.env` file in the root directory and add the following variables:*
    ```bash
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    REACT_APP_TMDB_API_TOKEN=your_tmdb_api_token
    REACT_APP_GEMINI_API_KEY=your_openai_gemini_api_key
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
    ```
    *Replace the placeholders with your actual API keys and configuration details.*
4.  **Run the Application**
    ```bash
    npm start
    # or
    yarn start
    ```
    *The app will start in development mode at `http://localhost:3000.`*

## Usage

### Sign In or Sign Up
- Create an account using your email and password.
- Or use the Google Sign-In option for a quicker login experience.

### Explore Movies
- Browse through different categories on the home page.
- View featured movies with trailers playing in the background.
- Click on movies to see more details.

### Get AI Recommendations
- Navigate to the Gemini Search feature by clicking the search icon.
- Enter a natural language query in the search bar (e.g., "I want to watch a romantic comedy from the 90s").
- Receive customized movie recommendations powered by the Gemini model.
- Browse the suggestions and find something that interests you.

## Technologies Used
- **React.js**: Front-end library for building user interfaces.
- **Redux Toolkit**: State management solution.
- **Firebase Authentication**: User authentication and management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **The Movie Database (TMDB) API**: Source for movie data and images.
- **Gemini Model**: AI model used for generating personalized movie recommendations.

## Project Structure
- `src/components`: React components for different parts of the application.
- `src/hooks`: Custom hooks for fetching data and other logic.
- `src/utils`: Utility functions, constants, and API configurations.
- `public`: Public assets and the main HTML template.
