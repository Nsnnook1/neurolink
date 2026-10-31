
export type Insight = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  imageAlt: string;
  category: string;
  publishedAt: string;
};

export type InsightRecord = Insight & {
  content: string;
  status: "draft" | "published";
  updatedAt?: string;
  seo?: {
    metaTitle: string | null;
    metaDescription: string | null;
  } | null;
};
