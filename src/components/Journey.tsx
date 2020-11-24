import React, { FunctionComponent } from 'react';
import { Heading, JourneyContainer, Timeline, Year, TimelineBar, Spacing, TimelineDescription, Margin } from '../styles/body';

type JourneyProps = {
  title: string,
}

const Journey: FunctionComponent<JourneyProps> = ({ title }) => {
    return (
        <JourneyContainer>
            <Heading>{ title }</Heading>
            <Spacing space={1} />
            <Timeline>
                <Year>2017</Year>
                <Year>2018</Year>
                <Year>2019</Year>
                <Year>2020</Year>
                <Year>2021</Year>
            </Timeline>
            <Spacing space={0.3} />
            <TimelineBar width={700} color={'8FB996'} />
            <Spacing space={0.3} />
            <TimelineDescription>
                <h3>Attended Monash University</h3>
                <p>Bachelor’s of Information Technology</p>
                <p>Double Major - Computer networks and security, Software development</p>
            </TimelineDescription>
            <Spacing space={1} />
            <Margin marginLeft={300}>
                <TimelineBar width={100} color={'415D43'} />
                <Spacing space={0.3} />
                <TimelineDescription>
                    <h3>Industry Based Learning Student</h3>
                    <p>National Australia Bank</p>
                </TimelineDescription>
            </Margin>
            <Spacing space={1} />
            <Margin marginLeft={400}>
                <TimelineBar width={300} color={'A1CCA5'} />
                <Spacing space={0.3} />
                <TimelineDescription>
                    <h3>Software Engineer</h3>
                    <p>National Australia Bank • Part time</p>
                </TimelineDescription>
            </Margin>
            <Spacing space={1} />
            <Margin marginLeft={700}>
                <TimelineBar width={300} color={'A1CCA5'} />
                <Spacing space={0.3} />
                <TimelineDescription>
                    <h3>Associate Engineer</h3>
                    <p>National Australia Bank • Full time</p>
                </TimelineDescription>
            </Margin>
        </JourneyContainer>
    )
}

export default Journey;
