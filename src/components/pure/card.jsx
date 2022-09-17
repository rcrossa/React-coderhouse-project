

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../models/card';
import imagen from '../../assets/Unknown.jpeg';
import DemoCard from 'react-bootstrap/Card';
import './style.css'

const CardComponent = ({ card }) => {
    return (
        <DemoCard className='democard' >
            <DemoCard.Img variant="top" src={imagen} />
            <DemoCard.Body className='democardbody'>
                <DemoCard.Title>{card.name}</DemoCard.Title>
                <DemoCard.Text>
                    {card.description}
                </DemoCard.Text>
                <button className='button' >Go somewhere</button>
            </DemoCard.Body>
        </DemoCard>

    );
};


CardComponent.propTypes = {
    card: PropTypes.instanceOf(Card)
};


export default CardComponent;
