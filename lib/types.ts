export type ProjectTag = "SWE" | "ML" | "Systems" | "Research";

export interface ProjectLinks {
  repo?: string;
  demo?: string;
  writeup?: string;
}

export interface VolatilityTickerMetrics {
  rmse: number;
  mae: number;
  baselineRmsePersistence: number;
  baselineMaePersistence: number;
  coverage90: number;
  avgWidth90: number;
}

export interface VolatilityMetricsRaw {
  kind: "volatility";
  tickers: Record<"SPY" | "QQQ" | "AAPL", VolatilityTickerMetrics>;
}

export interface RecommendationMetricsRaw {
  kind: "recommendation";
  als: {
    recallAt10: number;
    ndcgAt10: number;
    coverageAt10: number;
  };
  popularity: {
    recallAt10: number;
    ndcgAt10: number;
    coverageAt10: number;
  };
}

export interface GenericMetricsRaw {
  kind: "generic";
}

export type ProjectMetricsRaw =
  | VolatilityMetricsRaw
  | RecommendationMetricsRaw
  | GenericMetricsRaw;

export interface VolatilityDerivedMetrics {
  kind: "volatility";
  rows: Array<{
    ticker: "SPY" | "QQQ" | "AAPL";
    rmseReductionPct: number;
    maeReductionPct: number;
  }>;
  averageRmseReductionPct: number;
  averageMaeReductionPct: number;
}

export interface RecommendationDerivedMetrics {
  kind: "recommendation";
  recallRatio: number;
  ndcgRatio: number;
  coverageRatio: number;
}

export interface GenericDerivedMetrics {
  kind: "generic";
}

export type ProjectDerivedMetrics =
  | VolatilityDerivedMetrics
  | RecommendationDerivedMetrics
  | GenericDerivedMetrics;

export interface ProjectCaseStudy {
  problem: string;
  approach: string[];
  results: string[];
  tradeoffs: string[];
  technicalEvaluationNotes?: string[];
}

export interface ProjectVisual {
  src: string;
  alt: string;
  objectPosition?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  problemOneLiner: string;
  visual: ProjectVisual;
  stack: string[];
  recruiterHighlights: string[];
  tags: ProjectTag[];
  featured: boolean;
  date: string;
  links: ProjectLinks;
  metricsRaw: ProjectMetricsRaw;
  derivedMetrics: ProjectDerivedMetrics;
  caseStudy: ProjectCaseStudy;
}

export type ProjectInput = Omit<Project, "derivedMetrics">;

export interface ResumeEntry {
  organization: string;
  role: string;
  bullets: string[];
}

export interface ResumeProject {
  title: string;
  bullets: string[];
}

export interface ResumeData {
  name: string;
  contact: string;
  education: string[];
  technicalSkills: string[];
  workExperience: ResumeEntry[];
  projects: ResumeProject[];
  leadership: ResumeEntry[];
  additionalSkillsAndInterests: string[];
}
