import React, { FunctionComponent } from 'react';
import { Tile, Heading, SmallSpacing, HeaderStyle } from '../styles/body';
import Facts from './Facts';
import Contact from './Contact';

type AboutProps = {
  title: string,
  description: string,
}

const About: FunctionComponent<AboutProps> = ({ title, description }) => {
    return (
        <HeaderStyle>
            <Tile>
                <Heading>{ title }</Heading>
                <SmallSpacing />
                <div>{ description }</div>
                <SmallSpacing />
                <Facts />
            </Tile>
            <Tile>
                <Contact title="Contact me" />
            </Tile>
        </HeaderStyle>
    )
}

export default About;
