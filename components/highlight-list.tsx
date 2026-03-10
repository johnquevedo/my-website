interface HighlightListProps {
  items: string[];
}

export function HighlightList({ items }: HighlightListProps) {
  return (
    <ul className="space-y-1.5 text-sm text-fg">
      {items.map((item) => (
        <li key={item}>- {item}</li>
      ))}
    </ul>
  );
}
