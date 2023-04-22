import "./style.scss";
import { BluetoothConnectedOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
//TODO: ALERT
interface AlertProps {
  buttonAlert: boolean;
}
const Alert: React.FC<AlertProps> = ({ buttonAlert }) => {
  const [isAlert, setIsAlert] = useState(false);
  const [percent, setPercent] = useState(0);
  console.log(percent);
  let myRef = useRef<NodeJS.Timer>()
  console.log('so 1');
  
  useEffect(() => {
    console.log("so 2");
    
    setIsAlert(buttonAlert);
  }, []);

  useEffect(() => {
    console.log("so 3");
    myRef.current = setInterval(() => {
      setPercent(c => c + 1)
    },30)
  }, []);
  useEffect(() => {
    if (percent === 100) {
      setIsAlert(!isAlert)
      clearTimeout(myRef.current)
    }
  },[percent])

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
    {console.log('so 4 render')}
      {/* <button onClick={handleOnclick}>alert</button> */}
      <div className={`alert ${isAlert && "alert-show"}`}>
        <div className="alert-icon">
          <BluetoothConnectedOutlined className="bluetooth-icon" />
        </div>
        <div className="alert-content">
          {handleContent(content)}
          <div
            className="alert-progress-bar"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <div onClick={handleOnclick} className="alert-close-icon">
          &times;
        </div>
      </div>
    </>
  );
};
export default Alert;
