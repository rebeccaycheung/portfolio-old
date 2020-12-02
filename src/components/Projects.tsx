import React, { FunctionComponent, useState } from 'react';
import { Heading, Spacing, ProjectsContainer, ProjectContainer, ProjectItem, ProjectDescription, Tag, TagContainer, Icon } from '../styles/body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ProjectsProps = {
  title: string,
}

type ProjectItemProps = {
    id: number,
    title: string,
    tags: string[],
    link?: string | undefined,
}

const Projects: FunctionComponent<ProjectsProps> = ({ title }) => {
    const projects = [
        {
            id: 1,
            title: "Nab Business Options Loan",
            tags: [
                'nab', 'production', 'code'
            ],
            link: '',
        },
        {
            id: 2,
            title: "Banker Loan Form",
            tags: [
                'nab', 'production', 'code'
            ],
            link: '',
        },
        {
            id: 3,
            title: "Career Progression Framework",
            tags: [
                'nab', 'code'
            ],
            link: '',
        },
        {
            id: 4,
            title: "Event Calendar",
            tags: [
                'nab', 'code'
            ],
            link: '',
        },
        {
            id: 5,
            title: "Directory",
            tags: [
                'nab', 'design'
            ],
            link: '',
        },
        {
            id: 6,
            title: "Empowering Relationships",
            tags: [
                'code', 'design'
            ],
            link: '',
        },
        {
            id: 7,
            title: "Delicious",
            tags: [
                'uni', 'code', 'design'
            ],
            link: '',
        },
        {
            id: 8,
            title: "UNIHACK 2019",
            tags: [
                'code', 'hackathon'
            ],
            link: '',
        },
        {
            id: 9,
            title: "Finance/Budgeting App",
            tags: [
                'personal', 'code', 'design'
            ],
            link: '',
        }
    ];

    const [ isExpanded, setIsExpanded ] = useState(false);
    const [ project, setProject ] = useState([{} as ProjectItemProps]);

    const projectExpand = (id: number) => {
        const currentProject = projects.filter(project => project.id === id);
        setProject(currentProject);
        setIsExpanded(true);
    }

    const projectItem = projects.map(key => {
        return (
            <>
            <ProjectItem onClick={() => projectExpand(key.id)}>
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
            { isExpanded &&
                <ProjectDescription>
                    <Heading>{ project[0].title }</Heading>
                    <Spacing space={0.3} />
                    { project[0].link && 
                        <p>
                            View the project here:
                            <a href="">{ project[0].link }</a>
                        </p>
                    }
                    <Spacing space={0.3} />
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam ut augue quis dignissim. Etiam elementum auctor tortor, non efficitur nunc commodo eu. Morbi et felis a velit posuere lobortis. Donec egestas blandit convallis. Curabitur mollis dictum blandit. Etiam ut nibh lacinia, ullamcorper arcu at, porttitor quam. Aliquam magna neque, efficitur a arcu non, tempus molestie libero. Vestibulum bibendum augue at velit</p>
                </ProjectDescription>
            }
            </>
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
