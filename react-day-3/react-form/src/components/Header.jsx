import { useNavigate } from "react-router-dom";

const headerStyle = {
  backgroundColor: "gray",
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function Header() {
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }
  return (
    <header style={headerStyle}>
      <h1>React Form</h1>
      <button onClick={navigateToHome}>Back to home</button>
    </header>
  );
}

export default Header;
