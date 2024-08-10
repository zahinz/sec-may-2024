import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Header() {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#333",
    color: "#fff",
  };

  const navigate = useNavigate();

  function handleNavigateToLogin() {
    navigate("/login");
  }

  function handleNavigateToRegister() {
    navigate("/register");
  }

  function handleNavigateToHome() {
    navigate("/");
  }

  function handleLogout() {
    Cookies.remove("authToken");
    navigate("/login");
  }
  const token = Cookies.get("authToken");
  return (
    <header style={headerStyle}>
      <h1 onClick={handleNavigateToHome} style={{ cursor: "pointer" }}>
        bitly clone
      </h1>
      {token ? (
        <button onClick={handleLogout} className="primary">
          Logout
        </button>
      ) : (
        <div>
          <button
            onClick={handleNavigateToLogin}
            className="primary"
            style={{ marginRight: "10px" }}
          >
            Login
          </button>
          <button onClick={handleNavigateToRegister} className="outline">
            Register
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
