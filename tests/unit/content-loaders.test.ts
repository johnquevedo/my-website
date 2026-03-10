import { describe, expect, it } from "vitest";

import {
  getFeaturedProjects,
  getProjectBySlug,
  getProjects,
  getResumeData
} from "@/lib/content";

describe("content loaders", () => {
  it("loads projects and keeps required recruiter-first fields", async () => {
    const projects = await getProjects();
    expect(projects.length).toBeGreaterThanOrEqual(3);
    expect(projects[0]).toMatchObject({
      slug: expect.any(String),
      title: expect.any(String),
      stack: expect.any(Array),
      recruiterHighlights: expect.any(Array),
      metricsRaw: expect.any(Object),
      derivedMetrics: expect.any(Object)
    });
  });

  it("returns exactly 3 featured projects", async () => {
    const featured = await getFeaturedProjects();
    expect(featured.length).toBe(3);
    expect(featured.every((project) => project.featured)).toBe(true);
  });

  it("preserves exact required project names", async () => {
    const projects = await getProjects();
    const titles = projects.map((project) => project.title);
    expect(titles).toContain("Probabilistic Stock Volatility Forecasting");
    expect(titles).toContain("Movie Recommendation System");
  });

  it("loads project details by slug", async () => {
    const project = await getProjectBySlug("movie-recommendation-system");
    expect(project.title).toEqual("Movie Recommendation System");
    expect(project.caseStudy.problem.length).toBeGreaterThan(0);
  });

  it("loads structured resume JSON", async () => {
    const resume = await getResumeData();
    expect(resume.name).toBe("John Quevedo");
    expect(resume.education[0]).toContain("Yale");
    expect(resume.workExperience.length).toBeGreaterThan(0);
  });
});
