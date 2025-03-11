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
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: ComicList;
  series: SeriesList;
  stories: StoryList;
  urls: Url[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface ComicList {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}

export interface ComicItem {
  resourceURI: string;
  name: string;
}

export interface SeriesList {
  available: number;
  collectionURI: string;
  items: SeriesItem[];
  returned: number;
}

export interface StoryList {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
}

export interface Url {
  type: string;
  url: string;
}

export interface ComicList {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}

export interface SeriesItem {
  resourceURI: string;
  name: string;
}

export interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}
