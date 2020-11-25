import React, { FunctionComponent } from 'react';
import { Heading, Spacing, ProjectsContainer, ProjectContainer, ProjectItem, Tag } from '../styles/body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ProjectsProps = {
  title: string,
}

const Projects: FunctionComponent<ProjectsProps> = ({ title }) => {
    return (
        <ProjectsContainer>
            <Heading>{ title }</Heading>
            <Spacing space={1} />
            <ProjectContainer>
                <ProjectItem>
                    <FontAwesomeIcon icon="align-left" size="2x" />
                    <h3>Nab Business Options Loan</h3>
                    <Tag>
                        #nab
                    </Tag>
                    <Tag>
                        #production
                    </Tag>
                    <Tag>
                        #code
                    </Tag>
                </ProjectItem>
            </ProjectContainer>
        </ProjectsContainer>
    )
}

export default Projects;
