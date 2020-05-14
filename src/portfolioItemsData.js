import KiyoshiRestaurant from "images/kiyoshi-restaurant.png"
import MovieDBImage from "images/movie-db.png"
import ReactFMImage from "images/react-fm.png"
import RealEstateApp from "images/real-estate-app.png"

export const portfolioItemsData = [
  {
    title: "Kiyoshi's Teriyaki & Sushi",
    description:
      "Redesigned a website for Kiyoshi's Teriyaki and Sushi and added a backend with PHP 7 / Laravel and MySQL to develop a fully fleshed CMS system for the employees to update the menu in real-time. Some of the challenges presented in this project included learning PHP and Laravel, as well as deploying the server into the cloud via Digital Ocean and NGINX.",
    tech: "React, Redux, Laravel, MySQL, TypeScript",
    githubUrl: "https://github.com/tylergreulich/kiyoshi-restaurant",
    liveUrl: "https://kiyoshi-restaurant.tylergreulich.com/",
    imgUrl: KiyoshiRestaurant,
  },
  {
    title: "React FM",
    description:
      "After running out of new music that I was interested in listening to on YouTube, I went and created an application that takes an artist or genre of music that you search for and feeds you artists via the LastFM and YouTube APIs that are similar to that artist or that specific genre along with a bar for playback controls. I also utilized the Suspense API from React and implemented lazy loading in this project to learn about the upcoming features of React.",
    tech: "React, Redux, TypeScript",
    githubUrl: "https://github.com/tylergreulich/react-fm",
    liveUrl: "https://react-fm.tylergreulich.com/",
    imgUrl: ReactFMImage,
  },
  {
    title: "Real Estate App",
    description:
      "I needed to get better at filtering data with React so I created a proof of concept real estate application with Material UI and 10 different ways to filter the properties on the page as well as a way to paginate the data. Aside from getting good at filtering data I also learned how to work with and customize a CSS framework without the code getting too messy.",
    tech: "React, TypeScript",
    githubUrl: "https://github.com/tylergreulich/real-estate",
    liveUrl: "https://real-estate-app.tylergreulich.com/",
    imgUrl: RealEstateApp,
  },
  {
    title: "Movie DB",
    description:
      "An application that movies from The Movie DB API that includes movies of similar genres for each movie you view, and has a searchbar for the user to use with autocomplete functionality baked in.",
    tech: "React, TypeScript",
    githubUrl: "https://github.com/tylergreulich/react-mdb",
    liveUrl: "https://moviedb.tylergreulich.com/",
    imgUrl: MovieDBImage,
  },
]
