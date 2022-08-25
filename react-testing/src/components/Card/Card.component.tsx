import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { TProps } from './Card.types';

const Card: FC<TProps> = ({ name, imageURL }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img style={{ width: '75%' }} src={imageURL || ''} alt={name} />
    </Col>
  );
};

export { Card };
