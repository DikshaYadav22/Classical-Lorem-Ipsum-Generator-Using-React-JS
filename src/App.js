import "./App.css";
import React, { useState } from "react";
import { Form, Button } from "reactstrap";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }

    if (count > data.length - 1) {
      amount = data.length - 1;
    }

    setText(data.slice(0, amount));
  };
  return (
    <div>
      <section>
        <article>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <label>Paragraphs :</label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <Button color="warning" type="submit">
              Generate
            </Button>
          </Form>
        </article>
        <article>
          {text.map((item, index) => {
            return <p>{item}</p>;
          })}
        </article>
      </section>
    </div>
  );
};

export default App;
