export const siteConfig = {
  name: "John Quevedo",
  title: "Portfolio",
  description:
    "Full-stack and machine learning projects with measurable outcomes, clear ownership, and production-minded execution.",
  url: "https://johnquevedo.dev",
  location: "New Haven, CT",
  accentColor: "#5e3b28",
  links: {
    github: "https://github.com/johnquevedo",
    linkedin: "https://linkedin.com/in/john-quevedo",
    email: "mailto:john.quevedo@yale.edu",
    phone: "tel:+14757778330",
    resume: "/resume/john-quevedo-resume.pdf"
  },
  githubContentBaseUrl:
    "https://github.com/johnquevedo/john-portfolio/blob/main/content"
} as const;

export const analyticsConfig = {
  provider: (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER ?? "vercel") as
    | "vercel"
    | "plausible"
    | "none",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? ""
} as const;
