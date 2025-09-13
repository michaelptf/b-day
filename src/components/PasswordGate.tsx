import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

const PasswordGate: React.FC<{ onUnlock: () => void }> = ({ onUnlock }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "love") {
      onUnlock();
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        className="shadow-lg"
        style={{ minWidth: "300px", maxWidth: "400px" }}
      >
        <Card.Body className="p-4">
          <Card.Title className="text-center mb-4">
            <h2 className="text-primary">🎁 What's the Secret Password? 🎁</h2>
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter the magic words..."
                className="text-center"
                autoFocus
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Unlock the Surprise! 🎉
              </Button>
            </div>
            {error && (
              <Alert variant="danger" className="mt-3 text-center">
                Oops! That's not quite right. Try again! 🤔
              </Alert>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PasswordGate;
