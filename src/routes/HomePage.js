import "../scss/main.scss";
import "../scss/sides.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="main">
      <div className="sides">
        <Link to="hi" className="side">
          안녕하세요
        </Link>
        <Link to="hi" className="side">
          안녕하세요
        </Link>
        <Link to="hi" className="side">
          안녕하세요
        </Link>
        <Link to="hi" className="side">
          안녕하세요
        </Link>
        <Link to="hi" className="side">
          안녕하세요
        </Link>
        {/* <Link to="setting" className="side">
          <div className="setting">setting</div>
        </Link> */}
      </div>
      <div className="contents">
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
        <Link to="/note" className="content">
          <img src="https://picsum.photos/250/250" />
          <span>대충 설명 ~~</span>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
