import type { Insight } from "@/types/insight";

const fallbackImages: Record<string, string> = {
  "Brain Health": "/images/insights/brain-health.jpg",
  "Health Technology": "/images/insights/health-technology.jpg",
  "AI & Medical Imaging": "/images/insights/ai-medical-imaging.jpg",
};

export function getInsightImage(article: Insight): string {
  return (
    article.coverImage ||
    fallbackImages[article.category] ||
    "/images/insights/default-placeholder.jpg"
  );
}