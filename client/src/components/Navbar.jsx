import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Добавьте useNavigate
  const isAuth = useSelector((state) => Boolean(state.auth.token));

  const handleLogout = () => {
    dispatch(logout());
    navigate("/register");  // Направление на страницу регистрации после выхода
  };

  const activeStyles = {
    color: 'white',
  };

  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">
        E
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              to={"/"}
              className="text-xs text-gray-400 hover:text-white"
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              to={"/posts"}
              className="text-xs text-gray-400 hover:text-white"
            >
              My posts
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              to={"/new"}
              className="text-xs text-gray-400 hover:text-white"
            >
              Add post
            </NavLink>
          </li>
        </ul>
      )}
      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2 cursor-pointer">
        {isAuth ? (
          <button onClick={handleLogout}>Exit</button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
