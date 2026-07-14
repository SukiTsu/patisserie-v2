/**
 * Extraction des titres (entre **...**) et catégories (entre [...])
 * à partir du texte brut d'une publication Facebook.
 */
export interface ParsedPost {
  titles: string[];
  categories: string[];
  cleanedContent: string;
}

export function extractAndRemoveHashtagsAndBrackets(content: string): ParsedPost {
  const titles: string[] = [];
  const categories: string[] = [];

  // Suppression des #hashtags
  const hashtagRegex = /#.*$/gm;
  let cleanedContent = content.replace(hashtagRegex, '').trim();

  // Extraction des titres entre **...**
  const etoileRegex = /\*\*(.*?)\*\*/g;
  let matchTitle;
  while ((matchTitle = etoileRegex.exec(content)) !== null) {
    titles.push(matchTitle[1].trim());
    cleanedContent = cleanedContent.replace(matchTitle[0], '');
  }

  // Extraction des catégories entre [...]
  const bracketRegex = /\[(.*?)\]/g;
  let matchBracket;
  while ((matchBracket = bracketRegex.exec(content)) !== null) {
    const items = matchBracket[1].split(',').map(item => item.trim());
    categories.push(...items);
    cleanedContent = cleanedContent.replace(matchBracket[0], '');
  }

  return {
    titles,
    categories,
    cleanedContent: cleanedContent.trim(),
  };
}
