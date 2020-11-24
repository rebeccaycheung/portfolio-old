import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, FactsContainer, SmallSpacing, Spacing } from '../styles/body';

const Facts: FunctionComponent = () => {
    return (
        <Container>
            <FactsContainer>
                <FontAwesomeIcon icon="code" size="lg" />
                <SmallSpacing />
                Associate engineer
            </FactsContainer>
            <Spacing />
            <FactsContainer>
                <FontAwesomeIcon icon="magic" size="lg" />
                <SmallSpacing />
                UX/UI design hobbyist
            </FactsContainer>
            <Spacing />
            <FactsContainer>
                <FontAwesomeIcon icon="graduation-cap" size="lg" />
                <SmallSpacing />
                Bachelor's of Information Technology
            </FactsContainer>
            <Spacing />
            <FactsContainer>
                <FontAwesomeIcon icon={["fab", "aws"]} size="lg" />
                <SmallSpacing />
                AWS certified
            </FactsContainer>
            <Spacing />
            <FactsContainer>
                <FontAwesomeIcon icon="bread-slice" size="lg" />
                <SmallSpacing />
                Amateur cook and baker
            </FactsContainer>
            <Spacing />
            <FactsContainer>
                <FontAwesomeIcon icon="leaf" size="lg" />
                <SmallSpacing />
                Sustainable lifestyle enthusiast
            </FactsContainer>
        </Container>
    )
}

export default Facts;
