import { useState } from "react";
import "./style.scss";
export default function Modal() {
  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      <button onClick={handleModal}>Click me</button>
      <div className={`modal ${modal && 'show'}`}>
        <div onClick={handleModal} className="modal-overlay"></div>
        <div className="modal-body">
          <button onClick={handleModal}>&times;</button>
          <h2>Hello wolrd</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            facere iusto optio molestiae dignissimos excepturi provident dolore
            sapiente sint vero?
          </p>
          <input type="password" placeholder="Enter Password" />
          <p>footer</p>
        </div>
      </div>
    </>
  );
}
