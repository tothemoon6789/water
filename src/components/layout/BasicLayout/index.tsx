import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Bar from '../../components/Charts/Bar';
import Modal from '../../components/Modal';
import './style.scss'
export default function BasicLayout() {
  return (
    <>
      <div className="basic-layout">
        <header>
          <h1>Game Store</h1>
        </header>
        <nav>This is navigtion bar</nav>
        <article>
          <div className="article1">
            <Modal/>
            <Alert/>
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
