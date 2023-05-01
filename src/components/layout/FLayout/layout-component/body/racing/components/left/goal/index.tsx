import { useEffect, useState } from "react";

export default function Goal() {
  const [firstWidth, setFirstWidth] = useState("0%")
  const [secondWidth, setSecondWidth] = useState("0%")
  const [thirtWidth, setThirtWidth] = useState("0%")
  const [fourthWidth, setFourthWidth] = useState("0%")
  useEffect(() => {
    setFirstWidth("80%")
    setSecondWidth("40%")
    setThirtWidth("90%")
    setFourthWidth("95%")
  },[])
  return (
    <>
      <div className="goal">
        <div className="goal-title">Doanh số các nhóm</div>
        <div className="racing-road">
          <div className="racing-group" style={{width:`${firstWidth}`}}></div>
          <div className="racing-group" style={{width:`${secondWidth}`}}></div>
          <div className="racing-group" style={{width:`${thirtWidth}`}}></div>
          <div className="racing-group" style={{width:`${fourthWidth}`}}></div>
          
        </div>
        <div className="racing-content">
          <div className="racing-group">
            <div className="racing-color"></div>
            <div className="racing-note">Nhóm Ngọc</div>
          </div>
          <div className="racing-group">
            <div className="racing-color"></div>
            <div className="racing-note">Nhóm Trung</div>
          </div>
          <div className="racing-group">
            <div className="racing-color"></div>
            <div className="racing-note">Nhóm Minh</div>
          </div>
          <div className="racing-group">
            <div className="racing-color"></div>
            <div className="racing-note">Nhóm Hoàng</div>
          </div>
        </div>
      </div>
    </>
  );
}
