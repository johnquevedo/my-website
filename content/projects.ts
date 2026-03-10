import type { ProjectInput } from "@/lib/types";

export const projectsData: ProjectInput[] = [
  {
    slug: "probabilistic-stock-volatility-forecasting",
    title: "Probabilistic Stock Volatility Forecasting",
    summary:
      "Built a machine learning pipeline to forecast 5-day stock volatility using historical market data.",
    problemOneLiner:
      "Forecasting next-week volatility needs calibrated uncertainty intervals, not only point predictions.",
    visual: {
      src: "/projects/stock-forecasting.png",
      alt: "Probabilistic stock volatility forecasting dashboard with prediction intervals and trend chart.",
      objectPosition: "center top"
    },
    stack: ["Python", "PyTorch", "GPyTorch", "Streamlit", "yfinance"],
    recruiterHighlights: [
      "Built a machine learning pipeline to forecast 5-day stock volatility using historical market data.",
      "Improved forecast accuracy by 23–28% compared to simple baseline methods across SPY, QQQ, and AAPL.",
      "Shipped a Streamlit dashboard for visualizing forecasts, uncertainty bands, and model performance."
    ],
    tags: ["ML", "Systems", "Research"],
    featured: true,
    date: "2026-02-20",
    links: {
      repo: "https://github.com/johnquevedo/probabilistic-stock-volatility-forecasting",
      demo: "https://probabilistic-stock-volatility-forecasting.streamlit.app/"
    },
    metricsRaw: {
      kind: "volatility",
      tickers: {
        SPY: {
          rmse: 0.010309323172696143,
          mae: 0.006198356337401235,
          baselineRmsePersistence: 0.014021835013327853,
          baselineMaePersistence: 0.008276910600346224,
          coverage90: 0.9801192842942346,
          avgWidth90: 0.043927693280352516
        },
        QQQ: {
          rmse: 0.01173411215438022,
          mae: 0.008088757890828467,
          baselineRmsePersistence: 0.016257851594250673,
          baselineMaePersistence: 0.010532404981162499,
          coverage90: 0.9681908548707754,
          avgWidth90: 0.045041689382603105
        },
        AAPL: {
          rmse: 0.01978191163261088,
          mae: 0.013329578162555498,
          baselineRmsePersistence: 0.025761785042761158,
          baselineMaePersistence: 0.017485105487323675,
          coverage90: 0.8986083499005965,
          avgWidth90: 0.052736205109959806
        }
      }
    },
    caseStudy: {
      problem:
        "The project forecasts 5-day-ahead realized volatility for SPY, QQQ, and AAPL while quantifying uncertainty for monitoring and decision support.",
      approach: [
        "Downloaded daily OHLCV data from yfinance and cached it locally.",
        "Engineered realized-volatility features including RV lags, return statistics, calendar cyclic features, and volume z-scores.",
        "Trained rolling-window exact Gaussian Processes with PyTorch and GPyTorch.",
        "Generated 50%, 90%, and 95% prediction intervals and surfaced anomaly/regime alerts in a Streamlit dashboard."
      ],
      results: [
        "The GP model outperformed persistence and EWMA baselines across all three tickers in the latest walk-forward snapshot.",
        "The dashboard provides both point forecasts and interval bands so forecast confidence is visible.",
        "Artifacts are versioned so deployment does not require retraining on startup."
      ],
      tradeoffs: [
        "Exact GP training with rolling windows increases runtime and tuning cost.",
        "Committed artifacts simplify deployment but require periodic refresh to stay current with new market data."
      ],
      technicalEvaluationNotes: [
        "Walk-forward setup: 2-year backtest with horizon 5 and rolling-window training.",
        "Baselines: persistence and EWMA.",
        "Coverage@90: SPY 0.980, QQQ 0.968, AAPL 0.899."
      ]
    }
  },
  {
    slug: "movie-recommendation-system",
    title: "Movie Recommendation System",
    summary:
      "Built a personalized movie recommendation system using collaborative filtering on the MovieLens 100K dataset.",
    problemOneLiner:
      "New users need useful recommendations quickly without retraining the entire model.",
    visual: {
      src: "/projects/movie-match.png",
      alt: "MovieMatch Streamlit interface with search, ratings, and recommendations panels.",
      objectPosition: "center top"
    },
    stack: ["Python", "implicit", "Pandas", "NumPy", "SciPy", "Streamlit"],
    recruiterHighlights: [
      "Built a personalized movie recommendation system using collaborative filtering on the MovieLens 100K dataset.",
      "Increased catalog coverage from 3.9% to 37.0% of movies.",
      "Deployed an interactive Streamlit app that updates recommendations in real time from user-ratings."
    ],
    tags: ["ML", "Research"],
    featured: true,
    date: "2026-02-15",
    links: {
      repo: "https://github.com/johnquevedo/movie-match",
      demo: "https://movie-match-app.streamlit.app/"
    },
    metricsRaw: {
      kind: "recommendation",
      als: {
        recallAt10: 0.2463,
        ndcgAt10: 0.1253,
        coverageAt10: 0.3704
      },
      popularity: {
        recallAt10: 0.1125,
        ndcgAt10: 0.0605,
        coverageAt10: 0.0386
      }
    },
    caseStudy: {
      problem:
        "The goal is to infer a new user profile from a short in-session rating list and produce personalized recommendations without retraining.",
      approach: [
        "Converted MovieLens 100K ratings to implicit feedback with a positive threshold (rating >= 4).",
        "Trained ALS factors offline to learn movie and user embeddings.",
        "Inferred a brand-new user vector from rated movies using regularized least squares in-session.",
        "Scored unseen movies with embedding dot products and added simple nearest-liked-movie explanations."
      ],
      results: [
        "Personalized ALS recommendations outperformed popularity recommendations on relevance and ranking quality.",
        "Catalog coverage expanded substantially, reducing repeated popular-title bias.",
        "The Streamlit app supports search, rating management, recommendations, and similar-movie lookup in one flow."
      ],
      tradeoffs: [
        "MovieLens data files are fetched locally and not committed to the repo.",
        "Explanations are intentionally simple and prioritize transparency over complexity."
      ],
      technicalEvaluationNotes: [
        "Offline benchmark compares ALS against a popularity baseline on Recall@10, NDCG@10, and Coverage@10.",
        "Ratios: Recall 2.2x, NDCG 2.1x, Coverage 9.6x."
      ]
    }
  },
  {
    slug: "full-stack-social-reading-platform",
    title: "Full-Stack Social Reading Platform",
    summary:
      "Built a full-stack social reading app with search, personal bookshelves, reviews, follows, and activity tracking.",
    problemOneLiner:
      "Readers need one place to discover books, organize progress, and interact socially around reading.",
    visual: {
      src: "/projects/shelf.png",
      alt: "Shelf landing page showing social reading features and interface preview.",
      objectPosition: "center top"
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Docker"
    ],
    recruiterHighlights: [
      "Built a full-stack social reading app with search, personal bookshelves, reviews, follows, and activity tracking.",
      "Designed PostgreSQL/Prisma schema and APIs for authentication, notifications, comments, likes, and follows.",
      "Implemented responsive UI and secure authentication, enabling persistent user profiles and social interactions."
    ],
    tags: ["SWE", "Systems"],
    featured: true,
    date: "2026-01-25",
    links: {
      repo: "https://github.com/johnquevedo/shelf",
      demo: "https://shelf.johnfquevedo.com"
    },
    metricsRaw: {
      kind: "generic"
    },
    caseStudy: {
      problem:
        "Shelf addresses fragmented reading workflows by combining discovery, organization, social activity, and journal tracking in one product.",
      approach: [
        "Built a full-stack TypeScript app on Next.js App Router with PostgreSQL and Prisma.",
        "Implemented credentials auth with verification and password reset, plus secure social interactions (reviews, likes, comments, follow/unfollow).",
        "Added Open Library discovery with canonical local caching and Goodreads CSV import with idempotent merge behavior.",
        "Shipped responsive navigation, notifications, reading journal stats, and profile settings with image uploads in production."
      ],
      results: [
        "Users can discover books, manage shelves, track reading progress, and engage with social activity in one app.",
        "Production deployment is live with documented architecture and test coverage (Vitest and Playwright).",
        "The app supports import from existing Goodreads history to reduce onboarding friction."
      ],
      tradeoffs: [
        "Import and merge logic increases backend complexity compared to a clean-slate-only approach.",
        "Feed and explore views rely on real database queries and may need additional caching as load increases."
      ],
      technicalEvaluationNotes: [
        "Stack: Next.js 14, TypeScript, Tailwind, PostgreSQL, Prisma, NextAuth, Zod, React Hook Form.",
        "Testing: Vitest + Playwright.",
        "Deployment: https://shelf.johnfquevedo.com"
      ]
    }
  }
];
