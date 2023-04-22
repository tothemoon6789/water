import { useEffect, useState } from "react";
import "./style.scss";
export default function Badge() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNumber((c) => c + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('clear timeout');
      
    };
  },[number]);
  console.log('test');
  
  return (
    <>
      <div className="badge-wraper">
        <div className="badge">
          Inbox<span className="badge-number">{number}</span>
        </div>
      </div>
    </>
  );
}
