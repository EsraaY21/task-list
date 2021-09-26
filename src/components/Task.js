import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { doc, updateDoc } from 'firebase/firestore';
import db from '../firebase';

const Task = ({ task }) => {
  const { id, name, description } = task;
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

  const updateTaskOnFirebase = async () => {
    const collectionRef = doc(db, 'tasks', id);

    await updateDoc(collectionRef, {
      name: formData.name,
      description: formData.description,
    });
  };

  const handleUpdateTask = (event) => {
    event.preventDefault();
    if (formData.name.length > 0) {
      updateTaskOnFirebase();
    }
    handleClose();
  };

  return (
    <div>
      <Card>
        <Card.Header style={{ backgroundColor: '#ECF3FC' }}>{name}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <span className="editIcon">
            <FontAwesomeIcon
              icon={faEdit}
              className="editIcon"
              style={{ color: '#5D93E1' }}
              onClick={handleShow}
            />
          </span>
          <span>
            <FontAwesomeIcon icon={faTrash} style={{ color: '#5D93E1' }} />
          </span>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateTask}>
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
          <Button variant="primary" onClick={handleUpdateTask}>
            Update Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task;
