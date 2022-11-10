import Style from "../Header/Header.css";
import Variables from "./Variables";

const HeaderTemplate = () => {
  return (
    <div className="head">
      <header class="header">
        <a href="" class="logo">
          {Variables.title}
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        <ul class="menu">
          <li>
            <a href="#">{Variables.new}</a>
          </li>
          <li>
            <a href="#">{Variables.popular}</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderTemplate;
