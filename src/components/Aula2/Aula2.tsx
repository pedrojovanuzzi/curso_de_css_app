import "./style.css";

export const Aula2 = () => {
  return (
    <div className="aula2_body">
      <div className="check_div">
        <h1>CheckBox</h1>
        <label htmlFor="one">
          <input type="checkbox" name="one" id="one" />
          <span></span>
          <a>One</a>
        </label>
        <label htmlFor="two">
          <input type="checkbox" name="two" id="two" />
          <span></span>
          <a>Two</a>
        </label>
        <label htmlFor="three">
          <input type="checkbox" name="three" id="three" />
          <span></span>
          <a>Three</a>
        </label>
      </div>
    </div>
  );
};
