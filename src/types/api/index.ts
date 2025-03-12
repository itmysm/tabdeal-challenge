export interface GetCharacters {
  total: number;
  characters: Character[];
  totalPages: number;
  currentPage: number;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: ComicList;
  series: SeriesList;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface ComicList {
  total: number;
  count: string;
  results: ComicItem[];
}

export interface SeriesList {
  total: number;
  count: string;
  results: SeriesItem[];
}

export interface SeriesItem {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  urls: Url[];
}

export interface ComicItem {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  urls: Url[];
}

export interface Url {
  type: string;
  url: string;
}