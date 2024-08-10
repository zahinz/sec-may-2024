import { useEffect, useState } from "react";
import { getApiWithToken } from "../utils/api";
import Cookies from "js-cookie";
import Header from "../components/Header";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [links, setLinks] = useState([]);
  async function fetchLinks() {
    try {
      setIsLoading(true);
      const token = Cookies.get("authToken");
      const serverRes = await getApiWithToken(
        "http://localhost:3000/link",
        token
      );
      if (!serverRes.ok) {
        alert("You are not authorized to view this page");
      }
      const data = await serverRes.json();
      setLinks(data.data);
    } catch (error) {
      console.error("Error at fetchLinks");
      alert("You are not authorized to view this page");
      window.location.href = "/login";
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchLinks();
  }, []);
  return (
    <div>
      <Header />
      <div style={{ padding: "2rem" }}>
        <h1>Dashboard</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Original Link</th>
                <th>Shortened Link</th>
                <th>Visit Count</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {links.map(function (link) {
                return (
                  <tr key={link.id}>
                    <td>{link.original_link}</td>
                    <td>{link.shortened_link}</td>
                    <td>{link.visit_count}</td>
                    <td>{link.createdAt}</td>
                    <td>{link.updatedAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
