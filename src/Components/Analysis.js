import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import { typeParameterInstantiation } from '@babel/types';

const Result = styled.div`
    color: #FFF;
    font-size: 18px;
    font-family: Arial, Helvetica;
`;

const Paragraph = styled.p`
    font-size: 20px;
    span {
        font-weight: bold;
    }
`;

const Analysis = ({analysisCurrency}) => {
    if (Object.keys(analysisCurrency).length === 0) return null;
    const {PRICE, HIGHDAY, LOWDAY, FROMSYMBOL, TOSYMBOL} = analysisCurrency;
    return (
        <Result>
           <Paragraph>The price of {FROMSYMBOL} is: {PRICE}{TOSYMBOL}</Paragraph>
           <Paragraph>The highest price of {FROMSYMBOL} today is: {HIGHDAY}{TOSYMBOL}</Paragraph>
           <Paragraph>The lowest price of {FROMSYMBOL} today is: {LOWDAY}{TOSYMBOL}</Paragraph>
        </Result>
    );
}

export default Analysis;