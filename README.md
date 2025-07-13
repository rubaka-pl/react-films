# React Films

A simple React application that fetches and displays movies from the OMDb API. The project is built using Vite and Materialize CSS and deployed to GitHub Pages.

## Live Demo

[https://rubaka-pl.github.io/react-films/](https://rubaka-pl.github.io/react-films/)

## Features

* Search for movies by title
* Filter results by type (All, Movie, Series)
* Responsive Materialize CSS-based UI
* Fallback images for missing posters

## Technologies

* React
* Vite
* Materialize CSS

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rubaka-pl/react-films.git
   cd react-films
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create environment variables:**

   Copy the example file and fill in your OMDb API key:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and set:

   ```dotenv
   VITE_OMDB_API_URL=https://www.omdbapi.com
   VITE_OMDB_API_KEY=your_api_key_here
   ```

4. **Run in development mode:**

   ```bash
   npm run dev

   ```

5. **Build for production and deploy:**

   ```bash
   npm run deploy

   ```

## Environment Variables

* `VITE_OMDB_API_URL`: Base URL for the OMDb API (e.g., `https://www.omdbapi.com`).
* `VITE_OMDB_API_KEY`: Your OMDb API key. You can get one from [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx).


