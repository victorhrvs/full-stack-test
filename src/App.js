
import "./App.css";
import "./assets/fonts.css"


import Home from "./components/Home/Home.js";
import ToDo from "./components/ToDo/ToDo.js";
import GetInTouch from "./components/GetInTouch/GetInTouch.js";
import Carousel from "./components/Carousel/Carousel.js"


function App() {
  return (
    <div className="App">
      <div className="scroll-container">
        <Home/>

        <ToDo/>

        <Carousel/>

        <GetInTouch/>

        <div id="lineBG"/>
        <footer className="scroll-area">
          <h3>Need help?</h3>
          <h4>coopers@coopers.pro</h4>
          <h5>© 2021 Coopers. All rights reserved.</h5>
          <div id="end" />
        </footer>
      </div>
    </div>
  );
}

export default App;
