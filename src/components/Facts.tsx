import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, FactsContainer, Spacing } from '../styles/body';

const Facts: FunctionComponent = () => {
    return (
        <Container>
            <FactsContainer>
                <FontAwesomeIcon icon="code" size="lg" />
                <Spacing space={0.3}  />
                Associate engineer
            </FactsContainer>
            <FactsContainer>
                <FontAwesomeIcon icon="magic" size="lg" />
                <Spacing space={0.3}  />
                UX/UI design hobbyist
            </FactsContainer>
            <FactsContainer>
                <FontAwesomeIcon icon="graduation-cap" size="lg" />
                <Spacing space={0.3}  />
                Bachelor's of IT
            </FactsContainer>
            <FactsContainer>
                <FontAwesomeIcon icon={["fab", "aws"]} size="lg" />
                <Spacing space={0.3}  />
                AWS certified
            </FactsContainer>
            <FactsContainer>
                <FontAwesomeIcon icon="bread-slice" size="lg" />
                <Spacing space={0.3}  />
                Amateur cook and baker
            </FactsContainer>
            <FactsContainer>
                <FontAwesomeIcon icon="leaf" size="lg" />
                <Spacing space={0.3}  />
                Sustainable lifestyle enthusiast
            </FactsContainer>
        </Container>
    )
}

export default Facts;
