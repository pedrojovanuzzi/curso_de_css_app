import "./style.css";

export const Aula2 = () => {
  return (
    <div className="aula2_body">
      <div className="check_div">
        <h1>CheckBox</h1>
        <label htmlFor="one">
          <input className="input_aula2" type="checkbox" name="one" id="one" />
          <span className="span_aula2"></span>
          <a className="a_aula2">One</a>
        </label>
        <label htmlFor="two">
          <input className="input_aula2" type="checkbox" name="two" id="two" />
          <span className="span_aula2"></span>
          <a className="a_aula2">Two</a>
        </label>
        <label htmlFor="three">
          <input className="input_aula2" type="checkbox" name="three" id="three" />
          <span className="span_aula2"></span>
          <a className="a_aula2">Three</a>
        </label>
      </div>
    </div>
  );
};
