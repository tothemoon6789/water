import { useState } from 'react';
import Accordion from '../../components/Accordion';
import Alert from '../../components/Alert';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import Bar from '../../components/Charts/Bar';
import Modal from '../../components/Modal';
import './style.scss'
export default function BasicLayout() {
  const [alert, setAlert] = useState(false)
  console.log('in basic layout')
  const handleOnClick = () => {
    setAlert(!alert)
  }
  return (
    <>
      <div className="basic-layout">
        <header>
          <h1>Game Store</h1>
        </header>
        <nav>This is navigtion bar  
          {/* <Badge/> */}
          </nav>
        <article>
          <div className="article1">
            <Modal/>
            <Button onClick={handleOnClick} />
            {alert && <Alert buttonAlert={alert}/>}
            <Accordion/>
            <Accordion/>
            <Accordion/>
            <Accordion/>
            <Accordion/>
          </div>
          <div className="article2">
            <Bar/>
           
          </div>
          <div className="article3">
            <Button/>
          </div>
        </article>
        <footer>this is footer</footer>
      </div>
      <div className="floating-button">+</div>
    </>
  );
}
