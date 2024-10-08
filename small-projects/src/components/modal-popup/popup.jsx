import "../styles.css";
export default function PopUp({ title, content, footer, onClose }) {
  return (
    <div className="modal-container">
      <button onClick={onClose}>x</button>
      <h1 className="title">{title ? title : "this is title"}</h1>
      <p className="content">{content ? content : "this is the body"}</p>
      <p className="footer">{footer ? footer : "this is the footer"}</p>
    </div>
  );
}
