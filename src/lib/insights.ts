
import type { Insight, InsightRecord } from "@/types/insight";

const SHOW_MOCK_ARTICLES = true;

// ทดสอบ
const mockInsights: InsightRecord[] = [
  {
    id: "mock-003",
    slug: "mock-nutrition",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "",
    imageAlt: "Nutrition placeholder",
    category: "NUTRITION",
    content: "Lorem ipsum dolor sit amet.",
    publishedAt: "2026-10-22T09:00:00+07:00",
    status: "published",
  },
  {
    id: "mock-002",
    slug: "mock-lifestyle",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "",
    imageAlt: "Lifestyle placeholder",
    category: "LIFESTYLE",
    content: "Lorem ipsum dolor sit amet.",
    publishedAt: "2026-10-20T09:00:00+07:00",
    status: "published",
  },
  {
    id: "mock-001",
    slug: "mock-brain-health",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    coverImage: "",
    imageAlt: "Brain Health placeholder",
    category: "BRAIN HEALTH",
    content: "Lorem ipsum dolor sit amet.",
    publishedAt: "2026-10-18T09:00:00+07:00",
    status: "published",
  },
];

export async function getLatestInsights(
  limit = 3
): Promise<Insight[]> {
  const insights = SHOW_MOCK_ARTICLES ? mockInsights : [];
  const now = Date.now();

  return insights
    .filter(
      (article) =>
        article.status === "published" &&
        Date.parse(article.publishedAt) <= now
    )
    .sort(
      (a, b) =>
        Date.parse(b.publishedAt) - Date.parse(a.publishedAt) ||
        b.id.localeCompare(a.id)
    )
    .slice(0, limit)
    .map(
      ({
        id,
        slug,
        title,
        excerpt,
        coverImage,
        imageAlt,
        category,
        publishedAt,
      }) => ({
        id,
        slug,
        title,
        excerpt,
        coverImage,
        imageAlt,
        category,
        publishedAt,
      })
    );
}


export async function getAllInsights(): Promise<Insight[]> {
  return getLatestInsights(Number.MAX_SAFE_INTEGER);
}


export async function getInsightBySlug(
  slug: string
): Promise<InsightRecord | null> {
  const insights = SHOW_MOCK_ARTICLES ? mockInsights : [];
  const now = Date.now();

  return (
    insights.find(
      (article) =>
        article.slug === slug &&
        article.status === "published" &&
        Date.parse(article.publishedAt) <= now
    ) ?? null
  );
}

