

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://74fee00f408a56e8170c9b38eacea18f@o4507730743328768.ingest.us.sentry.io/4507730750275584",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
