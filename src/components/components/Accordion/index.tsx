import { useState } from "react";
import "./style.scss";
export default function Accordion() {
  const [visible, setVisible] = useState(false);
  const handleBody = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="accordion">
        <div onClick={handleBody} className="title">
          I am accordion {visible}
          <button className={`close ${visible ? "rotate" : ""}`}>&#9650;</button>
        </div>
        <div className={`body ${visible ? "show" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          consectetur ullam tempore velit inventore obcaecati? Molestias eaque
          odit tempora dolores.
        </div>
      </div>
    </>
  );
}
