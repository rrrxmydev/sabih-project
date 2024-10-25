// import "../styles/nav.css";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
const NavBar = () => {
  return (
    <div className="">
      <div dir="rtl" className="navBar_container">
        <Link to="/fav">
          <h3 className="nav">المفضلة</h3>{" "}
        </Link>{" "}
        <br />
        <Link to="/athkar">
          <h3 className="nav">أذكار</h3>{" "}
        </Link>{" "}
        <br />
        <Link to="/SunnaBooks">
          <h3 className="nav">كتب السنة </h3>{" "}
        </Link>{" "}
        <br />
        <Link to="/Duaa">
          <h3 className="nav">أدعية</h3>{" "}
        </Link>{" "}
        <br />
        <Link to="/feedback">
          <h3 className="nav">تواصل معنا</h3>{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

export default NavBar;
