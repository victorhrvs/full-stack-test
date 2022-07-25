import Header from "./components/Header.js";
import "./App.css";
import foto from "./assets/foto.png";
import fotoBG from "./assets/fotoBG.png";

function App() {
  return (
    <div className="App">
      <div className="scroll-container">
        <section className="scroll-area">
          <Header />
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
        <section className="scroll-area" >
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
        <section className="scroll-area" >
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
      </div>
    </div>
  );
}

export default App;
