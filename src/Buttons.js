import "./Buttons.css";

let Buttons = (props) => {
  const { click } = props;
  return (
    <div className="MainButtons__container wrapper">
      <div className="MainButtons">
      <button className="animal" onClick={() => click("animal")}>
        animal
      </button>
      <button className="career" onClick={() => click("career")}>
        career
      </button>
      <button className="celebrity" onClick={() => click("celebrity")}>
        celebrity
      </button>
      <button className="dev" onClick={() => click("dev")}>
        dev
      </button>
      <button className="explicit" onClick={() => click("explicit")}>
        explicit
      </button>
      <button className="fashion" onClick={() => click("fashion")}>
        fashion
      </button>
      <button className="food" onClick={() => click("food")}>
        food
      </button>
      <button className="history" onClick={() => click("history")}>
        history
      </button>
      <button className="money" onClick={() => click("money")}>
        money
      </button>
      <button className="movie" onClick={() => click("movie")}>
        movie
      </button>
      <button className="music" onClick={() => click("music")}>
        music
      </button>
      <button className="political" onClick={() => click("political")}>
        political
      </button>
      <button className="religion" onClick={() => click("religion")}>
        religion
      </button>
      <button className="science" onClick={() => click("science")}>
        science
      </button>
      <button className="sport" onClick={() => click("sport")}>
        sport
      </button>
      <button className="travel" onClick={() => click("travel")}>
        travel
      </button>
      <button className="money" onClick={() => click("random")}>
        random
      </button>
      </div>
    </div>
  );
};

export default Buttons;
