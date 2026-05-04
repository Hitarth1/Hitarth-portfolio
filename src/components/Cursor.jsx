import './Cursor.css';

export default function Cursor() {
  return (
    <>
      <div className="cursor-dot" aria-hidden="true"></div>
      <div className="cursor-ring" aria-hidden="true"></div>
    </>
  );
}
