//import logo from "../../assets/Logo.png";
import "./ToDo.css";
import vector from "../../assets/Vector.png";


function ToDo() {
  return (
    <section id="ToDoScreen">
      <div id="title">
        <div id="BG2Limit">
          <div id="BG2"></div>
        </div>
        <h2>To-do List</h2>
        <div id="line1"></div>
        <h3 id="subtitle">
          Drag and drop to set your main priorities, check when done and create
          what´s new.
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
              <a href="#ToDoScreen">delete</a>
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
              <a href="#ToDoScreen">delete</a>
            </div>
            <div id="ToDoContent">
              <img src={vector} alt="" />
              <p>ToDoContent</p>
              <a href="#ToDoScreen">delete</a>
            </div>
            <button>erase all</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToDo;
