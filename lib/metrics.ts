import type {
  ProjectDerivedMetrics,
  ProjectMetricsRaw,
  RecommendationMetricsRaw,
  VolatilityMetricsRaw
} from "./types";

function roundToOne(value: number) {
  return Math.round(value * 10) / 10;
}

function reductionPercent(value: number, baseline: number) {
  return ((baseline - value) / baseline) * 100;
}

function ratio(numerator: number, denominator: number) {
  return numerator / denominator;
}

function deriveVolatility(raw: VolatilityMetricsRaw): ProjectDerivedMetrics {
  const rows = (Object.entries(raw.tickers) as Array<
    ["SPY" | "QQQ" | "AAPL", VolatilityMetricsRaw["tickers"]["SPY"]]
  >).map(([ticker, metrics]) => ({
    ticker,
    rmseReductionPct: roundToOne(
      reductionPercent(metrics.rmse, metrics.baselineRmsePersistence)
    ),
    maeReductionPct: roundToOne(
      reductionPercent(metrics.mae, metrics.baselineMaePersistence)
    )
  }));

  const averageRmseReductionPct = roundToOne(
    rows.reduce((sum, row) => sum + row.rmseReductionPct, 0) / rows.length
  );
  const averageMaeReductionPct = roundToOne(
    rows.reduce((sum, row) => sum + row.maeReductionPct, 0) / rows.length
  );

  return {
    kind: "volatility",
    rows,
    averageRmseReductionPct,
    averageMaeReductionPct
  };
}

function deriveRecommendation(raw: RecommendationMetricsRaw): ProjectDerivedMetrics {
  return {
    kind: "recommendation",
    recallRatio: roundToOne(ratio(raw.als.recallAt10, raw.popularity.recallAt10)),
    ndcgRatio: roundToOne(ratio(raw.als.ndcgAt10, raw.popularity.ndcgAt10)),
    coverageRatio: roundToOne(
      ratio(raw.als.coverageAt10, raw.popularity.coverageAt10)
    )
  };
}

export function deriveProjectMetrics(raw: ProjectMetricsRaw): ProjectDerivedMetrics {
  if (raw.kind === "volatility") {
    return deriveVolatility(raw);
  }

  if (raw.kind === "recommendation") {
    return deriveRecommendation(raw);
  }

  return { kind: "generic" };
}
