import { useEffect, useState } from "react";

export default function Header() {
  const [rotation, setRotation] = useState("-180deg");
  const [scale, setScale] = useState(1.2);
  useEffect(() => {
    setRotation("45deg");
    setScale(1);
  }, []);
  return (
    <>
      <div className="header">
        <div className="left">
          <div
            className="logo"
            style={{ transform: `rotate(${rotation}) scale(${scale})` }}
          >
            <div className="part"></div>
            <div className="part"></div>
            <div className="part"></div>
            <div className="part"></div>
          </div>
          <div className="brand">
            <h1>THẦN TỐC COMPANY</h1>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}
