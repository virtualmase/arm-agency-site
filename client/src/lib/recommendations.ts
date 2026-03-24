/**
 * AI-Powered Article Recommendation Algorithm
 * Design: Hudson Yards institutional modernism
 * Purpose: Improve reader engagement through personalized content recommendations
 */

interface BlogPostData {
  id: string;
  category: string;
  tags: string[];
  publishedDate: string;
  [key: string]: any;
}

interface RecommendedPost extends BlogPostData {
  relevanceScore: number;
  matchingTags: string[];
}

/**
 * Calculate relevance score between current post and candidate post
 * Scoring factors:
 * - Category match: +40 points
 * - Tag overlap: +15 points per matching tag
 * - Recency: +10 points for newer articles
 */
export const calculateRelevanceScore = (
  currentPost: BlogPostData,
  candidatePost: BlogPostData
): number => {
  let score = 0;

  // Category match: +40 points
  if (currentPost.category === candidatePost.category) {
    score += 40;
  }

  // Tag overlap: +15 points per matching tag
  const matchingTags = candidatePost.tags.filter((tag: string) =>
    currentPost.tags.includes(tag)
  ).length;
  score += matchingTags * 15;

  // Recency bonus: +10 points for recent articles
  const currentDate = new Date(currentPost.publishedDate);
  const candidateDate = new Date(candidatePost.publishedDate);
  if (candidateDate > currentDate) {
    score += 10;
  }

  return Math.min(score, 100);
};

/**
 * Get AI-recommended articles based on current post
 * Returns top N articles sorted by relevance score
 */
export const getRecommendedArticles = (
  currentPost: BlogPostData,
  allPosts: BlogPostData[],
  limit: number = 2
): RecommendedPost[] => {
  return allPosts
    .filter((p) => p.id !== currentPost.id)
    .map((post) => {
      const matchingTags = post.tags.filter((tag: string) =>
        currentPost.tags.includes(tag)
      );
      return {
        ...post,
        relevanceScore: calculateRelevanceScore(currentPost, post),
        matchingTags,
      };
    })
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
};

/**
 * Get matching tags between two posts
 */
export const getMatchingTags = (
  currentTags: string[],
  candidateTags: string[]
): string[] => {
  return candidateTags.filter((tag) => currentTags.includes(tag));
};
