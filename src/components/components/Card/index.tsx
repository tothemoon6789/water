import "./style.scss";
export default function Card() {
  return (
    <div className="card">
      <div className="header">
        <img src="https://i.pravatar.cc" alt="..." />
      </div>
      <div className="body">
        <div className="title">Pham Ngoc Linh</div>
        <div className="content">
          Phạm Ngọc Linh là một lập trình viên rất giỏi!
        </div>
      </div>
    </div>
  );
}
