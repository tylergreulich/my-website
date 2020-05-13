import MovieDBImage from "images/movie-db.png"
import ReactFMImage from "images/react-fm.png"

export const portfolioItemsData = [
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
    title: "Movie DB",
    description:
      "An application that movies from The Movie DB API that includes movies of similar genres for each movie you view, and has a searchbar for the user to use with auto-complete baked in.",
    tech: "React, TypeScript",
    githubUrl: "https://github.com/tylergreulich/react-mdb",
    liveUrl: "https://moviedb.tylergreulich.com/",
    imgUrl: MovieDBImage,
  },
]