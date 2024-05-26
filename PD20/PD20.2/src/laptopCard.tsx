import React from 'react';
import { Card } from 'react-bootstrap';

interface LaptopCardProps {
  brand: string;
  model: string;
  pricePerMonth: string;
  totalPrice: string;
  imageUrl: string;
  tag: string;
  badgeText: string;
}

const LaptopCard: React.FC<LaptopCardProps> = ({ brand, model, pricePerMonth, totalPrice, imageUrl, tag, badgeText }) => {
  return (
    <div className="card-container">
      {tag && <div className="tag">{tag}</div>}
      <Card className="custom-card">
        {badgeText && <div className="badge">{badgeText}</div>}
        <Card.Img variant="top" src={imageUrl} className="card-img-top-custom" />
        <Card.Body>
          <Card.Title>{brand}</Card.Title>
          <Card.Text>
            <strong>{model}</strong>
            <br />
            <span className="price-line">
              <span className="price-per-month">{pricePerMonth} / mėn.</span>
              <span className="total-price">{totalPrice}</span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LaptopCard;
