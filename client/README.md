# Netflix Frontend Clone 🎬 🎥 📺
This project is a clone of the frontend of the popular streaming website Netflix. It allows users to sign up, log in, browse through collections of movies, and save movies to their watchlist. The project is built using React JS with Vite, Tailwind CSS, Firebase for authentication and saving movies, and The Movie Database (TMDb) API for fetching movie information.



## Features
* **User Authentication:** Users can create accounts and log in securely using Firebase authentication.
* **Browse Movies:** Users can scroll through various collections of movies, including popular movies, top-rated movies, upcoming releases, and more.
* **Movie Details:** Clicking on a movie poster or title provides users with detailed information about the movie, including a brief overview, release date, and rating.
* **Save to Watchlist:** Authenticated users can add movies to their watchlist, which will be saved to their account.
* **Responsive Design:** The clone is designed to be responsive and accessible across different devices, including desktops, tablets, and mobile phones.



## Technologies Used
* **React JS with Vite**: The project is built using React JS along with Vite, a fast build tool that enhances the development experience by providing rapid server start and optimized production builds.
* **Tailwind CSS:** Tailwind CSS is used for styling the components. It offers a utility-first approach, making it efficient to create consistent and responsive designs.
* **Firebase:** Firebase provides the authentication functionality for user sign-up and login. It also serves as the backend for storing user watchlists securely.
* **The Movie Database (TMDb) API:** The project fetches movie data from the TMDb API. This API provides a wide range of movie-related information, including details, images, ratings, and more.



## Getting Started
To use this project locally, follow these steps:

1. **Clone the Repository:** Start by cloning this repository to your local machine using Git.
   ```bash
   git clone https://github.com/devham236/netflix-clone.git
   ```
   

2. **Install Dependencies:** Navigate to the project directory and install the required dependencies using npm or yarn.
   ```bash
   cd netflix-frontend-clone
   npm install
   # or
   yarn install
   ```
   

3. **API Key Setup:** You'll need to sign up for a TMDb API key and set it up in the project. Create a .env file in the project root and add your API key.
   ``` env
   VITE_API_KEY=Your-tmdb-Api-key
   ```
   

4. **Firebase Configuration:** Set up a Firebase project and obtain the configuration settings (apiKey, authDomain, projectId, etc.). In `src/Config/firebase-config.js` you can see how the config file would look like.



5. **Run the App:** Once everything is set up, start the development server.
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   

6. **Access the App:** Open your browser and go to your `localhost` to see the Netflix clone in action.



## Improvements and Feedback
There are some positioning issues with the title of the poster you see at first when opening the project. Should there be some bugs you encounter, please feel free to submit an issue using the issues tab above. If you have ideas for new features, improvements, or any idea of modifying the project, i would encourage you to clone and rename this project to use for your own purposes. It's somewhat of a well starter boilerplate, especially for people who just started to code. Your input is valuable and deeply appreciated.

**Happy Coding 🚀**
