import "./style.css";
export default function FLayout() {
  
  return (
    <>
    <div className="f-layout">
      <nav className="nav-bar">
        <div className="item">
          <a href="#">&#9900;</a>
        </div>
        <div className="item">
          <a href="#">&#9900;</a>
        </div>
        <div className="item">
          <a href="#">&#9900;</a>
        </div>
        <div className="item">
          <a href="#">&#9900;</a>
        </div>
        <div className="item">
          <a href="#">&#9900;</a>
        </div>
        <div className="item">
          <a href="#">&#9900;</a>
        </div>
      </nav>
      <section className="content">
        <header>
            <img src="https://i.pravatar.cc" alt="..." />
            <h1>Car Company</h1>
        </header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <section className="carousel">
            
        </section>
        <section className="information">
            <div className="item">
            <h2>Kan loser.</h2>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio minus delectus sed nobis maxime perspiciatis dolorem hic repellendus placeat aspernatur recusandae sunt dolore praesentium modi tempora! Reprehenderit, exercitationem nihil?</div>
            </div>
            <div className="item">
            <h2>Chia petsrp.</h2>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio minus delectus sed nobis maxime perspiciatis dolorem hic repellendus placeat aspernatur recusandae sunt dolore praesentium modi tempora! Reprehenderit, exercitationem nihil?</div>
            </div>
            <div className="item">
            <h2>Nam duoe.</h2>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, optio minus delectus sed nobis maxime perspiciatis dolorem hic repellendus placeat aspernatur recusandae sunt dolore praesentium modi tempora! Reprehenderit, exercitationem nihil?</div>
            </div>
        </section>
        <section className="service">
            <div className="item">
              <h3>One</h3>
              <img src="https://i.pravatar.cc" alt="" />
            </div>
            <div className="item">
              <h3>One</h3>
              <img src="https://i.pravatar.cc" alt="" />
            </div>
            <div className="item">
              <h3>One</h3>
              <img src="https://i.pravatar.cc" alt="" />
            </div>
            <div className="item">
              <h3>One</h3>
              <img src="https://i.pravatar.cc" alt="" />
            </div>
        </section>
        <footer>
          Contact: 0933888555 <br/>
          Address: 4983 H.5, Block C
        </footer>
      </section>
    </div>
    </>
  );
}
