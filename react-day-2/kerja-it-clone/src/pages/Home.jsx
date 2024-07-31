import Header from "../components/Header";
import data from "../data/jobs.json";
import { useNavigate } from "react-router-dom";

function Home() {
  console.log(data);
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/job/hello");
  }
  return (
    <div>
      <div id="top">
        <p>Find more remote jobs at Kerja-Remote.com</p>
      </div>
      <Header />
      <div id="cards">
        <div className="card" onClick={handleNavigate}>
          <h2>Mobile App Developer</h2>
          <div>
            <p>Company: DataKeepers</p>
            <p>Location: Ipoh, Perak</p>
            <p>Experince: 2-4 years</p>
          </div>
        </div>
        <div className="card" onClick={handleNavigate}>
          <h2>Mobile App Developer</h2>
          <div>
            <p>Company: DataKeepers</p>
            <p>Location: Ipoh, Perak</p>
            <p>Experince: 2-4 years</p>
          </div>
        </div>
        <div className="card" onClick={handleNavigate}>
          <h2>Mobile App Developer</h2>
          <div>
            <p>Company: DataKeepers</p>
            <p>Location: Ipoh, Perak</p>
            <p>Experince: 2-4 years</p>
          </div>
        </div>
        <div className="card" onClick={handleNavigate}>
          <h2>Mobile App Developer</h2>
          <div>
            <p>Company: DataKeepers</p>
            <p>Location: Ipoh, Perak</p>
            <p>Experince: 2-4 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
