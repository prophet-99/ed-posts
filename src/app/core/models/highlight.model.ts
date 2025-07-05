export interface HighlightNotice {
  id: number;
  isMain: boolean;
  image: string;
  title: string;
  description: string;
  date: string; // formato: YYYY-MM-DD
}

export interface HighlightBlog {
  id: number;
  image: string;
  title: string;
  date: string; // formato: YYYY-MM-DD
}

export interface Highlight {
  notices: HighlightNotice[];
  blogs: HighlightBlog[];
}
