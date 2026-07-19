import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "6w9y9cqo",
  dataset: "production",
  apiVersion: "2025-07-16",
  useCdn: false,
  perspective: "published",
});