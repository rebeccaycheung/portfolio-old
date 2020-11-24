import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, FactsContainer, SmallSpacing, Spacing, Heading } from '../styles/body';

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
                    <SmallSpacing />
                    Github
                </FactsContainer>
                <Spacing />
                <FactsContainer>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                    <SmallSpacing />
                    LinkedIn
                </FactsContainer>
                <Spacing />
                <FactsContainer>
                    <FontAwesomeIcon icon="envelope" size="lg" />
                    <SmallSpacing />
                    Email: rebeccaycheung@gmail.com
                </FactsContainer>
            </Container>
        </>
    )
}

export default Contact;
