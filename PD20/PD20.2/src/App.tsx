import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LaptopCard from './laptopCard';
import lenovoImage from './assets/Lenovo.jpg';
import hpImage from './assets/HP.jpeg';
import acerImage from './assets/Acer.jpg';
import './App.css';

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="compare-button">Palyginti</div>
          <LaptopCard
            brand="Lenovo"
            model="IdeaPad 1 15.6″ nešiojamas kompiuteris"
            pricePerMonth="13,83 €"
            totalPrice="498,00 €"
            imageUrl={lenovoImage}
            tag=""
            badgeText="IŠSIUNTIMAS TĄ PAČIĄ D. D."
          />
        </Col>
        <Col>
          <div className="compare-button">Palyginti</div>
          <LaptopCard
            brand="HP"
            model="Victus 16-e1003ny 16.1″ nešiojamas kompiuteris"
            pricePerMonth="37,16 €"
            totalPrice="1 338,00 €"
            imageUrl={hpImage}
            tag=""
            badgeText="IŠSIUNTIMAS TĄ PAČIĄ D. D."
          />
        </Col>
        <Col>
          <div className="compare-button">Palyginti</div>
          <LaptopCard
            brand="Acer"
            model="TravelMate TMP614-51-G2-562H 14″"
            pricePerMonth="29,30 €"
            totalPrice="1 054,80 €"
            imageUrl={acerImage}
            tag=""
            badgeText="Tik internetu"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
