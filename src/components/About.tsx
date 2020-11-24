import React, { FunctionComponent } from 'react';
import { Heading, Spacing, AboutContainer, AboutTile, ContactTile } from '../styles/body';
import Facts from './Facts';
import Contact from './Contact';

type AboutProps = {
  title: string,
  description: string,
}

const About: FunctionComponent<AboutProps> = ({ title, description }) => {
    return (
        <AboutContainer>
            <AboutTile>
                <Heading>{ title }</Heading>
                <Spacing space={0.3} />
                <div>{ description }</div>
                <Spacing space={0.3}  />
                <Facts />
            </AboutTile>
            <ContactTile>
                <Contact title="Contact me" />
            </ContactTile>
        </AboutContainer>
    )
}

export default About;
