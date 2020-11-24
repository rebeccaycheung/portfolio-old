import React, { FunctionComponent } from 'react';
import { Heading, JourneyContainer, Timeline, Year, MediumSpacing } from '../styles/body';

type JourneyProps = {
  title: string,
}

const Journey: FunctionComponent<JourneyProps> = ({ title }) => {
    return (
        <JourneyContainer>
            <Heading>{ title }</Heading>
            <MediumSpacing />
            <Timeline>
                <Year>2017</Year>
                <Year>2018</Year>
                <Year>2019</Year>
                <Year>2020</Year>
                <Year>2021</Year>
            </Timeline>
        </JourneyContainer>
    )
}

export default Journey;
