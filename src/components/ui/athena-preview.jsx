// Featured "app preview" for Athena: the app's own mark, centered.
export function AthenaPreview() {
  return (
    <div className="athena-preview" aria-hidden="true">
      <div className="ap-logo">
        <img src="/athena-icon.svg" alt="" />
        <span>ATHENA</span>
      </div>
    </div>
  );
}
