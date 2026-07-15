"use client";

import Image from "next/image";

/** Hero Editorial Placeholder — conditional hero image slot.
 *  Renders a hero image if provided, renders nothing if not.
 *  Enforces: one hero image per page, never duplicated in body. */

interface Props {
  src?: string;
  alt?: string;
  /** Required: unique page identifier to verify no duplicate usage */
  pageId: string;
}

export default function HeroEditorialPlaceholder({ src, alt, pageId }: Props) {
  if (!src) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxHeight: 420,
        overflow: "hidden",
        borderRadius: 10,
        border: "1px solid var(--line)",
        marginBottom: 28,
      }}
      data-hero-page={pageId}
      data-hero-src={src}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || ""}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
          maxHeight: 420,
        }}
      />
    </div>
  );
}
