
import type { Insight, InsightRecord } from "@/types/insight";

const API_URL = (
  process.env.NEUROLINK_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "https://neurolink-api-p8my.onrender.com"
).replace(/\/+$/, "");

const API_TIMEOUT = 60_000;

type ApiArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string | null;
  coverImage: string | null;
  coverImageAlt: string | null;
  category: {
    id: string;
    name: string;
    slug: string;
  } | null;
  seo?: {
    metaTitle: string | null;
    metaDescription: string | null;
  } | null;
  publishedAt: string | null;
};

function normalizeArticle(article: ApiArticle): InsightRecord {
  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt ?? "",
    content: article.content ?? "",
    coverImage: article.coverImage ?? "",
    imageAlt: article.coverImageAlt ?? article.title,
    category: article.category?.name ?? "General",
    publishedAt: article.publishedAt ?? "",
    status: "published",
    seo: article.seo ?? null,
  };
}

function isPublished(article: ApiArticle): boolean {
  if (!article.publishedAt) return false;

  const publishedTime = Date.parse(article.publishedAt);

  return (
    Number.isFinite(publishedTime) &&
    publishedTime <= Date.now()
  );
}

async function fetchFromApi(
  path: string
): Promise<Response> {
  const response = await fetch(`${API_URL}${path}`, {
    cache: "no-store",
    signal: AbortSignal.timeout(API_TIMEOUT),
  });

  if (!response.ok && response.status !== 404) {
    throw new Error(`Articles API: ${response.status}`);
  }

  return response;
}

async function fetchArticles(): Promise<ApiArticle[]> {
  const response = await fetchFromApi("/api/articles");

  if (response.status === 404) {
    throw new Error("Articles API endpoint not found");
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid articles API response");
  }

  return data as ApiArticle[];
}

export async function getAllInsights(): Promise<Insight[]> {
  const articles = await fetchArticles();

  return articles
    .filter(isPublished)
    .sort(
      (a, b) =>
        Date.parse(b.publishedAt!) -
        Date.parse(a.publishedAt!)
    )
    .map((article) => {
      const {
        id,
        slug,
        title,
        excerpt,
        coverImage,
        imageAlt,
        category,
        publishedAt,
      } = normalizeArticle(article);

      return {
        id,
        slug,
        title,
        excerpt,
        coverImage,
        imageAlt,
        category,
        publishedAt,
      };
    });
}

export async function getLatestInsights(
  limit = 3
): Promise<Insight[]> {
  try {
    const articles = await getAllInsights();
    return articles.slice(0, limit);
  } catch (error) {
    console.error("Failed to load latest insights:", error);
    return [];
  }
}

export async function getInsightBySlug(
  slug: string
): Promise<InsightRecord | null> {
  const response = await fetchFromApi(
    `/api/articles/${encodeURIComponent(slug)}`
  );

  if (response.status === 404) {
    return null;
  }

  const article: ApiArticle = await response.json();

  if (!article || !isPublished(article)) {
    return null;
  }

  return normalizeArticle(article);
}
