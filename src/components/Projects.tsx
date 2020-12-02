import React, { FunctionComponent } from 'react';
import { Heading, Spacing, ProjectsContainer, ProjectContainer, ProjectItem, Tag, TagContainer, Icon } from '../styles/body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ProjectsProps = {
  title: string,
}

const Projects: FunctionComponent<ProjectsProps> = ({ title }) => {
    const projects = [
        {
            title: "Nab Business Options Loan",
            tags: [
                'nab', 'production', 'code'
            ]
        },
        {
            title: "Banker Loan Form",
            tags: [
                'nab', 'production', 'code'
            ]
        },
        {
            title: "Career Progression Framework",
            tags: [
                'nab', 'code'
            ]
        },
        {
            title: "Event Calendar",
            tags: [
                'nab', 'code'
            ]
        },
        {
            title: "Directory",
            tags: [
                'nab', 'design'
            ]
        },
        {
            title: "Empowering Relationships",
            tags: [
                'code', 'design'
            ]
        },
        {
            title: "Delicious",
            tags: [
                'uni', 'code', 'design'
            ]
        },
        {
            title: "UNIHACK 2019",
            tags: [
                'code', 'hackathon'
            ]
        },
        {
            title: "Finance App",
            tags: [
                'personal', 'code', 'design'
            ]
        }
    ]

    const projectItem = projects.map(key => {
        return (
            <ProjectItem>
                <Icon>
                    <FontAwesomeIcon icon="align-left" size="2x" />
                </Icon>
                <h3>{ key.title }</h3>
                <Spacing space={0.3} />
                <TagContainer>
                    {
                        key.tags.map(tag => {
                            return (
                                <Tag>
                                    #{tag}
                                </Tag>
                            )
                        })
                    }
                </TagContainer>
            </ProjectItem>
        )
    })

    return (
        <ProjectsContainer>
            <Heading>{ title }</Heading>
            <Spacing space={1} />
            <ProjectContainer>
                { projectItem }
            </ProjectContainer>
        </ProjectsContainer>
    )
}

export default Projects;
