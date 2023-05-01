import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MovingIcon from "@mui/icons-material/Moving";
import FunctionsIcon from "@mui/icons-material/Functions";
import DoneIcon from "@mui/icons-material/Done";
export default function Nav() {
  return (
    <>
      <div className="nav">
        <div className="detail">
          <FunctionsIcon />
          <h3>133</h3>
        </div>
        <div className="detail">
          <DoneIcon />
          <h3>112</h3>
        </div>
        <div className="detail">
          <MovingIcon />
          <h3>120%</h3>
        </div>
        <div className="detail">
          <AttachMoneyIcon />
          <h3>5.02tỷ</h3>
        </div>
      </div>
    </>
  );
}
