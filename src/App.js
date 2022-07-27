import Header from "./components/Header.js";
import "./App.css";
import foto from "./assets/foto.png";
import fotoBG from "./assets/fotoBG.png";
//import leftBG from "./assets/leftBG.png";

function App() {
  return (
    <div className="App">
      <div className="scroll-container">
        <section className="scroll-area" id="area1">
          <Header />
          <div className="Columns">
            <div className="ColumnLeft">
              <div className="GoToListContainer">
                <h1>
                  <strong>Organize</strong> your daily jobs
                </h1>
                <div className="Content">
                  <p>The only way to get things done</p>
                </div>
                <button id="GoToList">Go to To-do list</button>
              </div>
            </div>

            <div className="ColumnRight">
              <img id="foto" src={foto} alt="" />
              <img id="fotoBG" src={fotoBG} alt="" />
            </div>
          </div>
        </section>



        <section  id="ToDoScreen">
          <div id="title">
          <div id="BG2Limit">
            <div id="BG2"></div>
          </div>
          <h2>To-do List</h2>
          <div id="line1"></div>
          <h3 id="subtitle">Drag and drop to set your main priorities, check when done and create what´s new.</h3>
          </div>


          <div className="ToDos">
            <div className="ToDoLeft">
              <div>

              </div>
            </div>

            <div className="ToDoRight">
              <div></div>
            </div>
          </div>
        </section>
          
        
        <section className="scroll-area" id="carousel">
          <div className="Columns">
            <div className="ColumnLeft">
              <h1>
                <strong>Organize</strong> your daily jobs
              </h1>
            </div>

            <div className="ColumnRight">
              <img id="foto" src={foto} alt="" />
              <img id="fotoBG" src={fotoBG} alt="" />
            </div>
          </div>
        </section>

        <section className="scroll-area" id="GetInTouch">
          <h2>GET IN TOUCH</h2>
        </section>
        
        <div id="lineBG"></div>
        <footer  className="scroll-area" >
          
              
            
          
          <h3>Need help?</h3>
          <h4>coopers@coopers.pro</h4>
          <h5>© 2021 Coopers. All rights reserved.</h5>

        </footer>
        

      </div>
    </div>
  );
}

export default App;
