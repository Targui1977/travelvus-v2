interface RobustnessNoteProps {
  textHtml: string;
}

export default function RobustnessNote({ textHtml }: RobustnessNoteProps) {
  return (
    <div className="robustness-note">
      <span className="robustness-label">Robustness</span>
      <span dangerouslySetInnerHTML={{ __html: textHtml }} />
    </div>
  );
}
