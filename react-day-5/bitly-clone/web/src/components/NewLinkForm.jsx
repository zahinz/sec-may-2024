import { useForm } from "react-hook-form";
import { postApiWithToken } from "../utils/api";
import { useState } from "react";
import Cookies from "js-cookie";

function NewLinkForm({ onSuccess }) {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const newLinkFormContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    marginBottom: "2rem",
  };

  async function createNewLinkApi(data) {
    try {
      setLoading(true);
      const token = Cookies.get("authToken");
      const serverRes = await postApiWithToken(
        "http://localhost:3000/link",
        data,
        token
      );
      if (!serverRes.ok) {
        alert("You are not authorized to create a new link");
      }
      const resData = await serverRes.json();
      const shortenedLink = resData.data.shortened_link;
      console.log(resData);
      alert(`New link created: ${shortenedLink}`);
      onSuccess();
      reset();
    } catch (error) {
      console.error(error);
      alert("Error creating new link");
    } finally {
      setLoading(false);
    }
  }
  const onSubmit = async (data) => {
    await createNewLinkApi(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={newLinkFormContainerStyle}>
      <label>Original Link</label>
      <input
        {...register("original_link")}
        type="text"
        name="original_link"
        placeholder="https://example.com"
      />
      <button className="primary-black" type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create New Link"}
      </button>
    </form>
  );
}

export default NewLinkForm;
