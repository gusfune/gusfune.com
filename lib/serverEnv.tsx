import { browserEnv } from "lib/browserEnv"

if (process.browser) {
  throw new Error(
    "This should only be incldued on the client (but the env vars wont be exposed)"
  )
}

export const serverEnv = {
  ...browserEnv,
}
