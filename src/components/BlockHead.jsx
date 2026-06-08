export default function BlockHead({ num, title }) {
  return (
    <div className="b-head">
      <span className="b-num">{num}</span>
      <span className="b-title">{title}</span>
      <span className="b-rule" />
    </div>
  );
}
