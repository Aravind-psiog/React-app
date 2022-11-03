import Style from '../css/Style.css'; 

function BaseTemplate(){
    return (<header class="header">
    <a href="" class="logo">MMDB</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li><a href="#work">Our Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#careers">Careers</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </header>)
}

export default BaseTemplate;