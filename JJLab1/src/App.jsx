// src/App.jsx
import './App.css';
import logo from './assets/ihLogo.png';
import menu from './assets/ihMenu.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';



function App() {
  return (
    <div className="App">
      <div className="headerBox">
        <img src={logo} className='top-left' />
        <img src={menu} className='top-right' />
        <h1 className='landingHeader'>Say hello to <br />ReactJS</h1>
        <p className='landingPara'>You will learn how to use<br />
          the most popular frontend library,<br />
          and become a super ninja developer.
        </p>
        <button className='landingButton'>Awesome!</button>
      </div>

      <div className="image-container">
        <div className="image-wrapper">
          <img src={icon1} />
          <h3>Declaritive</h3>
          <p>React makes it painless to create interactive uis.</p>
        </div>
        <div className="image-wrapper">
          <img src={icon2} />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="image-wrapper">
          <img src={icon3} />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="image-wrapper">
          <img src={icon4} />
          <h3>JSX</h3>
          <p>A sstatically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>

  );
}

export default App;