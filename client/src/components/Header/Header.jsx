import "./Header.css";
import MainImg from '../../images/main.jpg';

export default function Header() {
  return (
    <div className="header">
      <img className="headerImg" src={MainImg} alt="" />
    </div>
  );
}