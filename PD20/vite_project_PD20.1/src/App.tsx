import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import glassesGuy from './assets/image';
import './App.css';

function BasicExample() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* veikia */}
      <Card border='dark' style={{ width: '20rem' }}>
        <Card.Img variant="top" src={glassesGuy} width={288} height={250} />
        <Card.Body>
          <Card.Title style={{ marginTop: '1rem', marginLeft: '1rem', color: 'black' }}>Jon Doe</Card.Title>
          <Card.Text style={{ marginLeft: '1rem', color: 'black' }}>
            Full-stack web developer. When I'm not coding or learning I like to
            play board games, to cook (and eat), or just enjoy the Portuguese sun at the beach.
          </Card.Text>
          <div className="app-container">
            <Button style={{ margin: '3px' }} variant='primary'>HTML & CSS👍</Button>
            <Button style={{ margin: '3px' }} variant="warning">JavaScript🔥</Button>
            <Button style={{ margin: '3px' }} variant="success">Web Design👍</Button>
            <Button style={{ margin: '3px' }} variant="danger">Git & Github🔥</Button>
            <Button style={{ margin: '3px' }} variant="info">React👍</Button>
            <Button style={{ margin: '3px' }} variant="danger">Svelte😊</Button>
          </div>
        </Card.Body>
      </Card>

     {/* neveikia */}
      <Card border='dark' style={{ width: '20rem', filter: 'grayscale(100%)' }}>
        <Card.Img variant="top" src={glassesGuy} width={288} height={250} style={{ filter: 'grayscale(100%)' }} />
        <Card.Body>
          <Card.Title style={{ marginTop: '1rem', marginLeft: '1rem', color: 'gray' }}>Jon Doe</Card.Title>
          <Card.Text style={{ marginLeft: '1rem', color: 'gray' }}>
            Full-stack web developer. When I'm not coding or learning I like to
            play board games, to cook (and eat), or just enjoy the Portuguese sun at the beach.
          </Card.Text>
          <div className="app-container">
            <Button style={{ margin: '3px', filter: 'grayscale(100%)' }} variant='primary'>HTML & CSS👍</Button>
            <Button style={{ margin: '3px', filter: 'grayscale(100%)' }} variant="warning">JavaScript🔥</Button>
            <Button style={{ margin: '3px', filter: 'grayscale(100%)' }} variant="success">Web Design👍</Button>
            <Button style={{ margin: '3px', filter: 'grayscale(100%)' }} variant="danger">Git & Github🔥</Button>
            <Button style={{ margin: '3px', filter: 'grayscale(100%)' }} variant="info">React👍</Button>
            <Button style={{ margin: '3px', filter: 'grayscale(100%)' }} variant="danger">Svelte😊</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
