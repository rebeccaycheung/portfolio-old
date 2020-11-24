import React, { FunctionComponent } from 'react';
import { HeaderStyle, NameTag, Toggle } from '../styles/body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type HeaderProps = {
  name: string,
  buttonText: string,
}

const Header: FunctionComponent<HeaderProps> = ({ name, buttonText }) => {
    return (
        <HeaderStyle>
            <NameTag>{ name }</NameTag>
            <Toggle>
                <FontAwesomeIcon icon="moon" size="lg" />
                { buttonText }
            </Toggle>
        </HeaderStyle>
    )
}

export default Header;
