type AdditionalProperties = {
  [key: string]: string;
};

type media = {
  'media-metadata': { url: string; [key: string]: string }[];
} & { [key: string]: string };

export type BlogItem = {
  abstract: string;
  byline: string;
  des_facet: string[];
  geo_facet: string[];
  id: number;
  media: media[];
  org_facet: string[];
  published_date: string;
  section: string;
  source: string;
  subsection: string;
  title: string;
  type: string;
  updated: string;
  url: string;
  per_facet: string[]
} & AdditionalProperties;

export type blogListProps = {
  blogs: BlogItem[];
  setSelectedBlog: (blog: BlogItem) => void;
};

export type blogDetailProps = {
  selectedBlog: BlogItem;
};
