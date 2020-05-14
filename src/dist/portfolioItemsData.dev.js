"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.portfolioItemsData = void 0;

var _movieDb = _interopRequireDefault(require("images/movie-db.png"));

var _reactFm = _interopRequireDefault(require("images/react-fm.png"));

var _realEstateApp = _interopRequireDefault(require("images/real-estate-app.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var portfolioItemsData = [{
  title: "React FM",
  description: "After running out of new music that I was interested in listening to on YouTube, I went and created an application that takes an artist or genre of music that you search for and feeds you artists via the LastFM and YouTube APIs that are similar to that artist or that specific genre along with a bar for playback controls. I also utilized the Suspense API from React and implemented lazy loading in this project to learn about the upcoming features of React.",
  tech: "React, Redux, TypeScript",
  githubUrl: "https://github.com/tylergreulich/react-fm",
  liveUrl: "https://react-fm.tylergreulich.com/",
  imgUrl: _reactFm["default"]
}, {
  title: "Movie DB",
  description: "An application that movies from The Movie DB API that includes movies of similar genres for each movie you view, and has a searchbar for the user to use with autocomplete functionality baked in.",
  tech: "React, TypeScript",
  githubUrl: "https://github.com/tylergreulich/react-mdb",
  liveUrl: "https://moviedb.tylergreulich.com/",
  imgUrl: _movieDb["default"]
}, {
  title: "Real Estate App",
  description: "I needed to get better at filtering data with React so I created a proof of concept real estate application with Material UI and 10 different ways to filter the properties on the page as well as a way to paginate the data. Aside from getting good at filtering data I also learned how to work with and customize a CSS framework without the code getting too messy.",
  tech: "React, TypeScript",
  githubUrl: "https://github.com/tylergreulich/real-estate",
  liveUrl: "https://real-estate-app.tylergreulich.com/",
  imgUrl: _realEstateApp["default"]
}];
exports.portfolioItemsData = portfolioItemsData;