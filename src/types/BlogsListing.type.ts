export type MediaMetadata = {
  url: string;
  [key: string]: string;
};

export type Media = {
  'media-metadata'?: MediaMetadata[];
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  [key: string]: any; // This allows other keys with any value type
};

export type BlogItem = {
  abstract: string;
  byline: string;
  des_facet?: string[];
  geo_facet?: string[];
  id: number;
  media: Media[] | [];
  org_facet: string[];
  published_date: string;
  section: string;
  source: string;
  subsection: string;
  title: string;
  type: string;
  updated: string;
  url: string;
  per_facet?: string[]
};

export type blogListProps = {
  blogs: BlogItem[];
  setSelectedBlog: (blog: BlogItem) => void;
};

export type blogDetailProps = {
  selectedBlog: BlogItem;
};
