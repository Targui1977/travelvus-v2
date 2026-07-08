interface VerdictChangedBannerProps {
  cause: string;
  consequence: string;
  onUndo: () => void;
}

export default function VerdictChangedBanner({
  cause,
  consequence,
  onUndo,
}: VerdictChangedBannerProps) {
  return (
    <div className="flip-banner">
      {/* Chip */}
      <span className="flip-chip">Verdict changed</span>

      {/* Cause + consequence */}
      <span
        className="flip-text"
        dangerouslySetInnerHTML={{
          __html: `${cause} ${consequence}`,
        }}
      />

      {/* Undo button */}
      <button className="flip-undo-btn" onClick={onUndo}>
        &#8634; Undo
      </button>
    </div>
  );
}
