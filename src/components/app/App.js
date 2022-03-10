import "./App.css";
import { Container } from "react-bootstrap";
import Expenses from "../expenses/Expenses";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/Header";

function App() {
  return (
    <Container>
      <Header />
      <Expenses />
    </Container>
  );
}

export default App;
