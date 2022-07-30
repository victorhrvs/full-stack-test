import "./card.css";
import foreground from "../../assets/icone-coopers.png";
import func from "../../assets/tag.png";
import read from "../../assets/read.png";
function Card( {description, image} ) {
    return (
        <div id="card">
            <div id="cardImage">
                <img src={image} alt="" />
            </div>
            <div id="foregroundPosition">
                <img id="foreground" src={foreground} alt="" />
            </div>
            
            <img id="function" src={func} alt=""/>

            <h3 id="description">{description}</h3>
            <img id="read" src={read} alt=""/>


        </div>
    );
  };
  
  export default Card;