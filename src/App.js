import "./App.css";

function App() {
  let time = new Date();
  let hr = time.getHours();
  let greetings = "";
  const cssStyle = {};

  if (hr > 1 && hr < 12) {
    greetings = "Good Morning !";
    cssStyle.color = "green";
  } else if (hr > 12 && hr <= 16) {
    greetings = "Good Afternoon !";
    cssStyle.color = "orange";
  } else if (hr > 16 && hr <= 19) {
    greetings = "Good Evening !";
    cssStyle.color = "blue";
  } else if (hr > 19 && hr <= 24) {
    greetings = "Good night !";
    cssStyle.color = "black";
  }

  return (
    <div className="App">
      <h1>
        Hello Everyone, <span style={cssStyle}>{greetings}</span>
      </h1>
    </div>
  );
}

export default App;
