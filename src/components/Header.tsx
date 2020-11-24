import React, { FunctionComponent } from 'react';
import { Toggle } from '../styles/body';

type HeaderProps = {
  name: string,
  buttonText: string,
}

const Header: FunctionComponent<HeaderProps> = ({ name, buttonText }) => {
    return (
        <>
            <h1>{ name.toUpperCase() }</h1>
            <Toggle>{ buttonText }</Toggle>
        </>
    )
}

export default Header;
