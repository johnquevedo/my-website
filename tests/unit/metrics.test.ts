import { describe, expect, it } from "vitest";

import { projectsData } from "@/content/projects";
import { deriveProjectMetrics } from "@/lib/metrics";

describe("derived metrics", () => {
  it("computes volatility percentage reductions and averages", () => {
    const volatility = projectsData.find(
      (project) => project.slug === "probabilistic-stock-volatility-forecasting"
    );

    if (!volatility || volatility.metricsRaw.kind !== "volatility") {
      throw new Error("Volatility project missing");
    }

    const derived = deriveProjectMetrics(volatility.metricsRaw);
    expect(derived.kind).toBe("volatility");

    if (derived.kind !== "volatility") {
      throw new Error("Expected volatility derived metrics");
    }

    const spy = derived.rows.find((row) => row.ticker === "SPY");
    expect(spy?.rmseReductionPct).toBe(26.5);
    expect(spy?.maeReductionPct).toBe(25.1);

    expect(derived.averageRmseReductionPct).toBe(25.8);
    expect(derived.averageMaeReductionPct).toBe(24.0);
  });

  it("computes recommendation relevance and diversity ratios", () => {
    const recs = projectsData.find(
      (project) => project.slug === "movie-recommendation-system"
    );

    if (!recs || recs.metricsRaw.kind !== "recommendation") {
      throw new Error("Recommendation project missing");
    }

    const derived = deriveProjectMetrics(recs.metricsRaw);
    expect(derived.kind).toBe("recommendation");

    if (derived.kind !== "recommendation") {
      throw new Error("Expected recommendation derived metrics");
    }

    expect(derived.recallRatio).toBe(2.2);
    expect(derived.ndcgRatio).toBe(2.1);
    expect(derived.coverageRatio).toBe(9.6);
  });
});
