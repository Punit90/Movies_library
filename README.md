**Movie App Library**

This project is a movie app library developed using React.js. It allows users to search for movies and provides pagination for better browsing. 

The app utilizes "https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}" to fetch movie data.

**Features:-**

Search Functionality: Users can search for movies by title.
Pagination: Movies are displayed with pagination for easier navigation.

**Setup:-**

Follow these steps to set up the project locally:

**Prerequisites:-**

Node.js installed on your machine

**Installation:-**

Clone the repository using the following command:
git clone https://github.com/your-username/movie-app-library.git

**Navigate into the project directory:-**

cd movie-app-library

**Install the dependencies:-**

npm install

**Running the App:-**

After installation, start the development server:-

npm start

Open your browser and navigate to http://localhost:3000 to view the app.

**API Key Configuration:-**

The app uses "https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}" for fetching movie data. add it to the project. You can find the configuration file at App.js. Replace 'API_Key' with your actual API key.


The app uses "https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${searchString}" for searching movie data. add it to the project. You can find the configuration file at App.js. Replace 'API_Key' with your actual API key and searchString with the search query.

**Usage:-**

Search: Enter the movie title in the search bar to search for movies.
Pagination: Navigate through pages using the pagination controls.
