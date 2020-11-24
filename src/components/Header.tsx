import React, { FunctionComponent } from 'react';
import { HeaderStyle, NameTag, Toggle } from '../styles/body';

type HeaderProps = {
  name: string,
  buttonText: string,
}

const Header: FunctionComponent<HeaderProps> = ({ name, buttonText }) => {
    return (
        <HeaderStyle>
            <NameTag>{ name.toUpperCase() }</NameTag>
            <Toggle>{ buttonText }</Toggle>
        </HeaderStyle>
    )
}

export default Header;
