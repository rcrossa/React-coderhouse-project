import React from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = ({ loading }) => {
    return (loading) ? (<Spinner animation='border' variant='primary' />) : '';
}

export default Loader;
