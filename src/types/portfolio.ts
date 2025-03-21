export interface PortfolioProject {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    images: string[];
    category: string;
    tools: string[];
    challenge: string;
    approach: string;
    outcome: string;
    liveUrl?: string;
    figmaUrl?: string;
  }
  
  export type PortfolioCategory = 'all' | 'web' | 'mobile' | 'branding';