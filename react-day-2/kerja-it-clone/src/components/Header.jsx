import Button from "./Button";

function Header() {
  function testButton() {
    console.log("Button clicked");
  }
  return (
    <div id="nav">
      <nav>
        <h1>kerja-it.com</h1>
        <div>
          <Button text="📊 Stats" />
          <Button text="🏹 Talents" onClick={testButton} />
          <Button text="Login" />
          <Button text="Register" variant="outline" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
