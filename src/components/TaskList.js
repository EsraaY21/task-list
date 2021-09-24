import React from 'react';
import Task from './Task';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-container">
      <Container>
        <h4>All Tasks</h4>
        <Row xs={1} md={2} lg={4} className="g-4">
          {tasks.map((task) => (
            <Col key={task.id}>
              <Task task={task} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TaskList;
