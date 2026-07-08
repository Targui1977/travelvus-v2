interface DecisionDebtProps {
  title: string;
  textHtml: string;
  factors: string[];
}

export default function DecisionDebt({
  title,
  textHtml,
  factors,
}: DecisionDebtProps) {
  return (
    <div style={{ marginTop: 24 }}>
      <div className="debt-card">
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: textHtml }} />
        <div className="debt-factors">
          {factors.map((f, i) => (
            <span key={i}>
              {f}{i < factors.length - 1 ? " · " : ""}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
