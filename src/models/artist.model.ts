export interface Artist {
  id: number;
  name: string;
}

export interface Track {
  title: string,
  duration: number
}

// export interface Album {
//   albumId   : string,
//             title: string,
//             artistId : number,
//             formatId : number,
//             genreId: Array<string>,
//             inStock: number,
//             price : number,
//             trackList : Array<Track>,
//             releaseYear : number,
//             recordLabel : string,
//             coverImg : string
// }

export interface Genre {
  id: string,
  name: string
}

export interface Format {
  id: number,
  name: string
}