import React, {Fragment, useState} from 'react';
import { render } from '@testing-library/react';

const UseCurrency = (label, currencies) => {
    const [state, updateState] = useState();
    const SelectCurrency = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option>--Select currency--</option>
            {Object.entries(currencies).map(([key, value]) => {
                return(<option key={key} type={value.code}>{value.name}</option>);
            })}
            </select>
        </Fragment>
    )
    return ([state, SelectCurrency, updateState]);
}

export default UseCurrency;