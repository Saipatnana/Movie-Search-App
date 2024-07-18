# Movie Search Application

This is a React application that allows users to search for movies using the Open Library Search API. The search results are displayed as cards, each with a random dog image fetched from another API. The application features loading states, error handling, and responsive design using Tailwind CSS.

![app Preview with Movies](https://res.cloudinary.com/dxcob4mbd/image/upload/v1721318308/kxxi5hju34gcpdkwuy3a.png)
![app Loading view](https://res.cloudinary.com/dxcob4mbd/image/upload/v1721318298/jydo2kdvzqe9l8qo9dix.png)
![Movie Search App Preview](https://drive.google.com/file/d/1tjbJmfLAIxGh_AHuwS2g7luU1kluDuwy/view?usp=sharing)
## Features

- Search for movies using the Open Library Search API
- Display search results as cards with movie details and random dog images
- Handle loading states with a loading indicator
- Basic form validation
- Error handling for API requests
- Responsive design using Tailwind CSS.

## Technologies Used

- React
- Tailwind CSS
- React Icons

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:Saipatnana/Movie-Search-App.git
cd Movie-Search-App
```

2. Install dependencies:

```bash
npm install
```
### Running the Application:

To run the application in development mode:
```bash
npm start
```
Open http://localhost:3000 to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This will create a build folder with all the static files needed to deploy the application.

# Project Structure
```bash
movie-search-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── MovieCard.js
│   │   ├── SearchBar.js
│   ├── utils/
│   │   ├── api.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
│
├── package.json
├── README.md
└── ...

```

# Usage
### Searching for Movies
- Type a movie name in the search bar.
- Press the "Search" button or press Enter.
- The application will fetch and display the search results as cards with movie details and random dog images.
### Handling Loading States
- A loading indicator will be displayed while the application is fetching data.
### Handling Errors
- If there is an error fetching data, an error message will be displayed.
### Marking a Task as Completed
- Click the checkbox next to the task you want to mark as completed.
- The task text will be styled with a strikethrough to indicate completion.

# Components
## SearchBar
- Location: src/components/SearchBar.js
- Description: A search bar component where users can enter a movie name.
## MovieCard
- Location: src/components/MovieCard.js
- Description: A card component that displays movie details and a random dog image.

# API
## fetchMovies
- Description: Fetches movies from the Open Library Search API based on the search query.
- Usage
``` bash
import { fetchMovies } from '../utils/api';
const results = await fetchMovies(query);

```
## fetchRandomDogImage
- Description: Fetches a random dog image from the Dog CEO API.
- Usage
``` bash
import { fetchRandomDogImage } from '../utils/api';
const image = await fetchRandomDogImage();
```