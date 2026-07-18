type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ eyebrow, title, intro }: Props) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
