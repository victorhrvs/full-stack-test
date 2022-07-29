import Header from "./components/Header.js";
import "./App.css";
import foto from "./assets/foto.png";
import fotoBG from "./assets/fotoBG.png";
import vector from "./assets/Vector.png";
import image from "./assets/image.png";
import iconmail from "./assets/icon-mail.png";

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
                <a href="#ToDoScreen">
                  <button id="GoToList">Go to To-do list</button>
                </a>
              </div>
            </div>

            <div className="ColumnRight">
              <img id="foto" src={foto} alt="" />
              <img id="fotoBG" src={fotoBG} alt="" />
            </div>
          </div>
        </section>

        <section id="ToDoScreen">
          <div id="title">
            <div id="BG2Limit">
              <div id="BG2"></div>
            </div>
            <h2>To-do List</h2>
            <div id="line1"></div>
            <h3 id="subtitle">
              Drag and drop to set your main priorities, check when done and
              create what´s new.
            </h3>
          </div>

          <div className="ToDos">
            <div className="ToDoLeft">
              <div>
                <h3>To-do</h3>
                <h4>Take a breath.</h4>
                <h4>Start doing.</h4>
                <div className="space" />

                <div id="ToDoContent">
                  <img src={vector} alt="" />
                  <p>ToDoContent</p>
                  <a>delete</a>
                </div>

                <button>erase all</button>
              </div>
            </div>

            <div className="ToDoRight">
              <div>
                <h3>Done</h3>
                <h4>Congratulions!</h4>
                <h4>
                  <strong>You have done 5 tasks</strong>
                </h4>
                <div className="space" />
                <div id="ToDoContent">
                  <img src={vector} alt="" />
                  <p>ToDoContent</p>
                  <a>delete</a>
                </div>
                <div id="ToDoContent">
                  <img src={vector} alt="" />
                  <p>ToDoContent</p>
                  <a>delete</a>
                </div>
                <button>erase all</button>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-area" id="carousel">
          <h2>good things</h2>
          <div className="Carousel"></div>
        </section>

        <section className="scroll-area" id="GetInTouch">
          <img src={image} alt="" />
          <div id="side" />
          <div className="GetInTouch">
            <div className="iconGetIn">
              <img src={iconmail} alt="" />
              <div id="titleGetIn">
                <h3>GET IN </h3>
                <h3>
                  <strong>TOUCH</strong>
                </h3>
              </div>
              <div></div>
            </div>
            <div>
              
              <form action="/pagina-processa-dados-do-form" method="post">
                <h6>Your Name</h6>
                <input type="text" name="nome" placeholder="type your name here..." />
                <div>
                  <div className="email">
                    <h6>Email*</h6>
                    <input type="text" name="email" placeholder="example@example.com" />
                  </div>
                  <div>
                  <h6>Telephone*</h6>
                  <input type="text" name="telephone" placeholder="(  ) ____-____"/>
                  </div>
                  </div>
                <h6>Message*</h6>
                <input type="text" name="message" id="message" placeholder="Type what you want to say to us" />
                <button id="sendMsg" type="submit">SEND NOW</button>
                
              </form>
            </div>
          </div>
        </section>

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
