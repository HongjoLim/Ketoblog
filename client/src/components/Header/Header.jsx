import "./Header.css";
import MainImg from '../../images/main.png';

const Header = () => {
  return (
    <div className="header">
      <img className="headerImg" src={MainImg} alt="" />
    </div>
  );
}

export default Header;