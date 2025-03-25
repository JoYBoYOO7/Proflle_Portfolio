

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b5ee126b9d39c61bbac0c917eb516f70@o4507730743328768.ingest.us.sentry.io/4508162272526336",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
