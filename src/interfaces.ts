export interface PostFrontmatter {
  title: string;
  pubDate: string;
  description: string;
  author: string;
}

export type MarkdownPost = import("astro").MarkdownInstance<PostFrontmatter>;
