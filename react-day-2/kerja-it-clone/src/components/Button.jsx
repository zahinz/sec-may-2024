function Button(props) {
  const styleGhostButton = {
    backgroundColor: "transparent",
    borderRadius: "5px",
    padding: "5px 10px",
    margin: "5px",
    cursor: "pointer",
  };

  const styleOutlineButton = {
    backgroundColor: "transparent",
    borderRadius: "5px",
    padding: "5px 10px",
    margin: "5px",
    cursor: "pointer",
    border: "1px solid #333",
  };

  const styleSolidButton = {
    backgroundColor: "black",
    borderRadius: "5px",
    padding: "5px 10px",
    margin: "5px",
    cursor: "pointer",
  };

  return (
    <button
      style={
        props.variant === "outline" ? styleOutlineButton : styleGhostButton
      }
      {...props}
    >
      {props.text || "This is a button"}
    </button>
  );
}

export default Button;
