import "./Header.css";
import MainImg from '../../images/main.jpg';

const Header = () => {
  return (
    <div className="header">
      <img className="headerImg" src={MainImg} alt="" />
    </div>
  );
}

export default Header;