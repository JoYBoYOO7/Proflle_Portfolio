

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b5ee126b9d39c61bbac0c917eb516f70@o4507730743328768.ingest.us.sentry.io/4508162272526336",

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
