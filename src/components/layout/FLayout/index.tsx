import Body from "./layout-component/body";
import Header from "./layout-component/header";
import "./style.scss";
export default function FLayout() {
  return (
    <>
    <div className="wrap">

      <Header/>
      <Body/>
    </div>
    </>
  );
}
