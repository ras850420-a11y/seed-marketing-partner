import type { JsonObject } from "@/types/json";

interface JsonLdProps {
  data: JsonObject | JsonObject[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
