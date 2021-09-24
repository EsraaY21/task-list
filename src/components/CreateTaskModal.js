import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const CreateTaskModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addTaskToFirebase = async () => {};

  const handleAddTask = (event) => {
    event.preventDefault();
    addTaskToFirebase();
    // add the new task to firebase
    // add the new task to state
    handleClose();
  };

  return (
    <div>
      <button className="btn btn-primary mt-2" onClick={handleShow}>
        Create Task
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddTask}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Task Name"
                name="name"
                value={formData.name}
                onChange={(event) => {
                  handleInputChange(event);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={(event) => {
                  handleInputChange(event);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddTask}>
            Create Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateTaskModal;
