import Button from "./Button.js";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.title}>
      <h1>Hi!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
