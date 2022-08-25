import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import { TCardProps, Card } from '../Card';
import { TProps } from './CardList.types';

const CardListContainer: FC<TProps> = ({ type }) => {
  const [items, setItems] = useState<TCardProps[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${type}`)
      .then(({ data }) => setItems(data))
      .catch((error) => {
        // TODO: Handle error response
      });
  }, [type]);

  return (
    <Row>
      {items.map((item) => (
        <Card key={item.name} {...item} />
      ))}
    </Row>
  );
};

export { CardListContainer };
