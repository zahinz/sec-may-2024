import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

function ViewJob() {
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }

  const params = useParams();
  const jobId = params.id;

  return (
    <div>
      <Header />
      <h1>View Job {jobId}</h1>
      <button onClick={navigateToHome}>Back to Home</button>
    </div>
  );
}

export default ViewJob;
