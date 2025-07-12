export interface BlogContentParagraph {
  type: 'paragraph';
  text: string;
}

export interface BlogContentImage {
  type: 'image';
  url: string;
  caption: string;
}

export type BlogContentBlock = BlogContentParagraph | BlogContentImage;

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  coverImage: string;
  coverCaption: string;
  content: BlogContentBlock[];
}
