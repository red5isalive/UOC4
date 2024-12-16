import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
         <Link to="/page2">Page2</Link>
        </li>
      </ul>

      {children}
    </div>
  );
};

export default Layout;