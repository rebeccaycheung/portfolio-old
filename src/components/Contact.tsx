import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, FactsContainer, Spacing, Heading } from '../styles/body';

type ContactProps = {
    title: string
}

const Contact: FunctionComponent<ContactProps> = ({ title }) => {
    return (
        <>
            <Heading>{ title }</Heading>
            <Container>
                <FactsContainer>
                    <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                    <Spacing space={0.3}  />
                    Github
                </FactsContainer>
                <FactsContainer>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                    <Spacing space={0.3}  />
                    LinkedIn
                </FactsContainer>
                <FactsContainer>
                    <FontAwesomeIcon icon="envelope" size="lg" />
                    <Spacing space={0.3}  />
                    rebeccaycheung@gmail.com
                </FactsContainer>
            </Container>
        </>
    )
}

export default Contact;
