import { Link } from "react-router-dom";
import "./navBar.css";
function navBar() {
  return (
    <div className="container">
      <h1>News Reader App</h1>
      <div className="nav-menu">
        <Link className="test" to="/">
          Home
        </Link>
        <Link className="test" to="/admin/add">
          Add News
        </Link>
        <Link className="test" to="/admin/edit">
          Edit News
        </Link>
      </div>
    </div>
  );
}

export default navBar;
