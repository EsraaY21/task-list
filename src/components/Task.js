import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task }) => {
  const { name, description } = task;
  return (
    <Card>
      <Card.Header style={{ backgroundColor: '#ECF3FC' }}>{name}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <span className="editIcon">
          <FontAwesomeIcon
            icon={faEdit}
            className="editIcon"
            style={{ color: '#5D93E1' }}
          />
        </span>
        <span>
          <FontAwesomeIcon icon={faTrash} style={{ color: '#5D93E1' }} />
        </span>
      </Card.Body>
    </Card>
  );
};

export default Task;
