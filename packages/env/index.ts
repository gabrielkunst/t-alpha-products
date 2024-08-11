import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    API_URL: z.string().url(),
    APP_URL: z.string().url(),
  },
  client: {},
  shared: {},
  runtimeEnv: {
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
  },
  emptyStringAsUndefined: true,
})
