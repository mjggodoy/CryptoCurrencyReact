import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

const ErrorParagraph = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #181e23;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({message}) => {

    return (
        <ErrorParagraph>{message}</ErrorParagraph>
    );
}

export default Error;