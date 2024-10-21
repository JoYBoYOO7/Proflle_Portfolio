

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://74fee00f408a56e8170c9b38eacea18f@o4507730743328768.ingest.us.sentry.io/4507730750275584",

  tracesSampleRate: 1,

  debug: false,

  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
