import Education from "./Education";
import Experience from "./Experience";

function App() {
  // inline css in jsx is written in camelCase and put in an object
  const profilePicStyle = {
    padding: "50px",
  };
  return (
    <div>
      <section>
        <img
          id="profile-pic"
          src="https://avatars.githubusercontent.com/u/64232111"
          alt="Zahin Zulkipli"
          style={profilePicStyle}
        />
        <h1>Zahin Zulkipli</h1>
        <p>
          I am a software engineer with a passion for web development. I have
          experience working with JavaScript, React, and Node.js. I am currently
          seeking new opportunities to grow my skills and further my career.
        </p>
      </section>
      <hr />
      <Experience />
      <hr />
      <Education />
    </div>
  );
}

export default App;
