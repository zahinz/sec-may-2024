import { useNavigate } from "react-router-dom";

const buttonGroup = {
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "20px",
};

function Home() {
  const navigate = useNavigate();
  function navigateToFormA() {
    navigate("/form-a");
  }
  function navigateToFormB() {
    navigate("/form-b");
  }
  function navigateToFormC() {
    navigate("/form-c");
  }
  return (
    <div>
      <h1>Hello Home</h1>
      <div style={buttonGroup}>
        <button onClick={navigateToFormA}>Form A</button>
        <button onClick={navigateToFormB}>Form B</button>
        <button onClick={navigateToFormC}>Form C</button>
      </div>
    </div>
  );
}

export default Home;
