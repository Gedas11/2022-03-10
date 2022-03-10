import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import React, { useState } from "react";
const AddExpense = () => {
  const [items, setItems] = useState({
    date: "",
    type: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  };
  console.log(items);
  return (
    <>
      <Card>
        <Card.Header>Pridekite islaidas i islaidu sarasa</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Pasirinkite data</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={items.value}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Pasirinkite spalva</Form.Label>
              <Form.Control type="color" name="date" value={items.value} onChange={handleChange}></Form.Control>
            </Form.Group> */}
            <Form.Group className="mb-3">
              <FloatingLabel label="Pasirinkite islaidu tipa">
                <Form.Select
                  value={items.type}
                  name="type"
                  onChange={handleChange}
                >
                  <option>Pramogos</option>
                  <option>Nuoma</option>
                  <option>Kreditas</option>
                  <option>Kuras</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Aprasykite islaidas"
                style={{ height: "100px" }}
                name="description"
                value={items.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>islaidu suma</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={items.amount}
                onChange={handleChange}
              />
            </Form.Group>
            <Button>Saugoti</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddExpense;
