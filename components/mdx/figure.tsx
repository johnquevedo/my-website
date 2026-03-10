import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function Figure({ src, alt, caption, width = 1200, height = 675 }: FigureProps) {
  return (
    <figure className="my-6">
      <Image
        alt={alt}
        className="w-full rounded-lg border border-border"
        height={height}
        src={src}
        width={width}
      />
      {caption && <figcaption className="mt-2 text-xs text-muted">{caption}</figcaption>}
    </figure>
  );
}
