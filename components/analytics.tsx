import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import { analyticsConfig } from "@/lib/site-config";

export function AnalyticsProvider() {
  if (analyticsConfig.provider === "none") {
    return null;
  }

  if (analyticsConfig.provider === "plausible" && analyticsConfig.plausibleDomain) {
    return (
      <Script
        defer
        data-domain={analyticsConfig.plausibleDomain}
        src="https://plausible.io/js/script.js"
      />
    );
  }

  return <Analytics />;
}
