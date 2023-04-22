import "./style.scss";
import { BluetoothConnectedOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
//TODO: ALERT
// 1. TẠI ĐIỂM ĐI (điểm A)
//      1. Hình dạng.
// 1. display
//          1. maxwidth:
//          2. maxheight:
//          2. overflow:

//          3. border
//          4. borderradius
//          5. padding
//          6. margin
//          7 background color
//          8. color
//          9. font family
//          10. font weight
//          11. font style
//     2. Vị trí.
//          1. position : absolute, fixed
//          2. translate: translate X hoac Y
//     3. Chuyển động lúc đứng yên (Các component con)
//          1. animation component
//          2. transition
//     4. Chuyển động của các chức năng liên quan
// 1.1 Chuyển động từ A đến B
//     1. Thời gian
//          1. Animation
//          2. transition
//     2. Kiểu chuyển động
//          1. Animation
//          2. transition
// 2. TẠI ĐIỂM ĐẾN (Điểm B) ========= GIỐNG THÔNG TIN NHƯ TRÊN
//      1. Vị trí
//      2. Hình dạng
//      3. Chuyển động lúc compont cha đứng yên
//      4. Chuyển động của các chức năng liên quan
// 2.2 Chuyển động từ B về A
//     1. Thời gian
//     2. Kiểu chuyển động

export default function Alert() {
  const [isAlert, setIsAlert] = useState(false);
  const [percent, setPercent] = useState(0);
  console.log(percent);
  useEffect(() => {
    
    const timer = setInterval(() => {
        
      if (percent === 100) {
        setPercent(0)
        setIsAlert(false)
      } else {
        setPercent((p) => p+1)
      }
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [percent]);
  const handleOnclick = () => {
    setIsAlert(!isAlert);
  };
  const handleContent = (content: string) => {
    if (content.length < 20) return content;
    return content.slice(0, 20) + " ...";
  };
  const content =
    "Chào mừng quý khách trở lại! Lorem ipsum dolor sit amet consectet adipisicing elit. Autem, mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid ducimus, cupiditate repudiandae voluptate voluptas atque quisquam, odit tempore maiores dicta minus sapiente perspiciatis harum delectus non, earum beatae libero vero eos accusantium! Ad autem, amet rerum illum mollitia adipisci aspernatur consequatur eveniet quaerat est eligendi sint, ex vel quasi delectus labore alias? Quia voluptatum, quibusdam consectetur iste nostrum, fugiat velit soluta expedita voluptatem nam a ad corporis eligendi perspiciatis deserunt, possimus consequuntur ut consequatur harum numquam et cumque. Neque, facere. Eum labore dolorem maiores facere sit aliquid doloribus obcaecati, inventore nostrum officia quisquam voluptas culpa, soluta suscipit unde iste.";
  return (
    <>
      <button onClick={handleOnclick}>alert</button>
      <div className={`alert ${isAlert && "alert-show"}`}>
        <div className="alert-icon">
          <BluetoothConnectedOutlined className="bluetooth-icon" />
        </div>
        <div className="alert-content">
          {handleContent(content)}
          <div className="alert-progress-bar" style={{ width: `${percent}%` }}></div>
        </div>
        <div onClick={handleOnclick} className="alert-close-icon">
          &times;
        </div>
      </div>
    </>
  );
}
