import { useEffect, useState } from "react";
import {
  deleteApiWithToken,
  getApiWithToken,
  putApiWithToken,
} from "../utils/api";
import Cookies from "js-cookie";
import Header from "../components/Header";
import NewLinkForm from "../components/NewLinkForm";

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
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteLink(id) {
    if (window.confirm("Are you sure you want to delete this link?")) {
      try {
        const token = Cookies.get("authToken");
        const serverRes = await deleteApiWithToken(
          `http://localhost:3000/link/${id}`,
          token
        );
        if (!serverRes.ok) {
          alert("You are not authorized to delete this link");
        }
        alert("Link deleted successfully");
        fetchLinks();
      } catch (error) {
        console.error(error);
        alert("Error deleting link");
      }
    }
  }

  async function editLink(id) {
    try {
      const newOriginaalLink = prompt("Enter new original link");
      if (!newOriginaalLink) {
        return;
      }
      const token = Cookies.get("authToken");
      const serverRes = await putApiWithToken(
        `http://localhost:3000/link/${id}`,
        { original_link: newOriginaalLink },
        token
      );
      if (!serverRes.ok) {
        alert("You are not authorized to edit this link");
      }
      alert("Link edited successfully");
      fetchLinks();
    } catch (error) {
      console.error(error);
      alert("Error editing link");
    }
  }

  useEffect(function () {
    fetchLinks();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ padding: "2rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>Dashboard</h1>
        <NewLinkForm onSuccess={fetchLinks} />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Original Link</th>
                <th>Shortened Link</th>
                <th>Visit Count</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {links.map(function (link) {
                return (
                  <tr key={link.id}>
                    <td>{link.original_link}</td>
                    <td>{link.shortened_link}</td>
                    <td>{link.visit_count}</td>
                    <td style={{ textAlign: "center" }}>
                      <button onClick={() => editLink(link.id)}>Edit</button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button onClick={() => deleteLink(link.id)}>
                        Delete
                      </button>
                    </td>
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
