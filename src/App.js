import { Container, Row, Col } from "react-bootstrap";
import Form from "./components/form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-primary">
        Roman Numerals to Decimal and Decimal to Roman Numerals Converter
      </h1>
      <Container>
        <Row>
          <Col />
          <Form />
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default App;
