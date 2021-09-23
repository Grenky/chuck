import './Chuck.css';
import ChuckImg from "./images/clipart1131480 1.png";
let Chuck = (props) => {
    const {joke} = props
    return (
        <div className="MainChuck wrapper">
            <div className="MainChuck__content">
                <img src={ChuckImg} className="logo" alt="ChuckImg"></img>
                <div className="label">{joke.value}</div>
            </div>
        </div>

    )
}
export default Chuck;
