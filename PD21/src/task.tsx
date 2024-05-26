import React from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';

interface TaskProps {
  task: string;
  priority: string;
  status: string;
  onDelete: () => void;
  onEdit: () => void;
  onToggleStatus: () => void;
}

const Task: React.FC<TaskProps> = ({ task, priority, status, onDelete, onEdit, onToggleStatus }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col md={3}>
            <Card.Text>Task</Card.Text>
            <Card.Title>{task}</Card.Title>
          </Col>
          <Col md={3}>
            <Card.Text>Priority</Card.Text>
            <Card.Text>{priority}</Card.Text>
          </Col>
          <Col md={2}>
            <Form.Check
              type="switch"
              id="status-switch"
              label={status}
              checked={status !== 'To Do'}
              onChange={onToggleStatus}
            />
          </Col>
          <Col md={1}>
            <Button variant="outline-primary" onClick={onEdit}>
              <i className="bi bi-pencil"></i>
            </Button>
          </Col>
          <Col md={1}>
            <Button variant="outline-danger" onClick={onDelete}>
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Task;
