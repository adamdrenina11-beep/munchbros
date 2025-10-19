'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/react';

export default function SentryInit() {
  useEffect(() => {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (!dsn) return;
    // Use a flag on window to avoid repeated initialization in HMR/dev
    const win = window as unknown as { __sentry_initialized?: boolean };
    if (win.__sentry_initialized) return;

    // Basic Sentry initialization (no performance tracing to avoid extra typing/setup)
    Sentry.init({
      dsn,
    });
    win.__sentry_initialized = true;
  }, []);

  return null;
}
