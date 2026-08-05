import { buildSchema } from "@/utiles/schema";

/**
 * Emits the JSON-LD @graph for a route.
 *
 * Rendered as a plain <script> inside the server-rendered HTML (not next/script)
 * so it is present in the raw document that crawlers and LLM fetchers read —
 * many never execute JavaScript.
 */
export default function JsonLd({ path = "/" }) {
  return (
    <script
      type="application/ld+json"
      // Schema is built from local static data, never user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildSchema(path)).replace(/</g, "\\u003c"),
      }}
    />
  );
}
