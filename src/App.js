import { useEffect, useState  } from "react";
import "./App.css";
import "./assets/fonts.css"


import Home from "./components/Home/Home.js";
import ToDo from "./components/ToDo/ToDo.js";
import GetInTouch from "./components/GetInTouch/GetInTouch.js";
import Carousel from "./components/Carousel/Carousel.js"

const defaultData = [
  {title: 'Grupo 1', items: [{text:'this is a new task', checked: false} , {text:'Develop the To-do list page', checked: true}]},
  {title: 'Grupo 2', items: [{text:'Home Page Design', checked: false} , {text:'Get FTP credentials', checked: true}]}
]

function App() {
  const [data, setData] = useState();  

  useEffect(() => {
    /*{
    if (localStorage.getItem('List')) {
      console.log(localStorage.getItem('List'))
      setData(JSON.parse(localStorage.getItem('List')))
    } else {
      setData(defaultData)
    } }*/
    setData(defaultData)
  }, [setData])
  

  return (
    <div className="App">
      <div className="scroll-container">
        <Home/>

        <ToDo data={data}/>

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
