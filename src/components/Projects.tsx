import React, { FunctionComponent, useState } from 'react';
import { Heading, Spacing, ProjectsContainer, ProjectContainer, ProjectItem, ProjectDescription, Tag, TagContainer, Icon, Stack, StackContainer, StackIcon, Margin } from '../styles/body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

type ProjectsProps = {
  title: string,
}

type StackProps = {
    name: string,
    icon?: string,
    type?: string,
    color?: string,
}

type ProjectItemProps = {
    id: number,
    title: string,
    description: string,
    tags: string[],
    link?: string | undefined,
    stack?: StackProps[],
}

const Projects: FunctionComponent<ProjectsProps> = ({ title }) => {
    const projects = [
        {
            id: 1,
            title: "Nab Business Options Loan",
            description: ``,
            tags: [
                'nab', 'production', 'code'
            ],
            link: 'https://www.nab.com.au/business/loans-and-finance/business-loans/nab-business-options-loans',
        },
        {
            id: 2,
            title: "Banker Loan Form",
            description: ``,
            tags: [
                'nab', 'production', 'code'
            ],
            link: '',
        },
        {
            id: 3,
            title: "Career Progression Framework",
            description: ``,
            tags: [
                'nab', 'code'
            ],
            link: '',
        },
        {
            id: 4,
            title: "Event Calendar",
            description: ``,
            tags: [
                'nab', 'code'
            ],
            link: '',
        },
        {
            id: 5,
            title: "Directory",
            description: ``,
            tags: [
                'nab', 'design'
            ],
            link: '',
        },
        {
            id: 6,
            title: "Empowering Relationships",
            description: ``,
            tags: [
                'code', 'design'
            ],
            link: '',
            stack: [{name: 'Vue', icon: 'vuejs', type: 'fab', color: "64B687"}, {name: 'TypeScript', icon: 'js', type: 'fab', color: "3275C0"}]
        },
        {
            id: 7,
            title: "Delicious",
            description: ``,
            tags: [
                'uni', 'code', 'design'
            ],
            link: '',
            stack: [{name: 'Swift', icon: 'swift', type: 'fab', color: "D55A41"}, {name: 'Firebase', icon: 'database', type: 'fas', color: "F6CC51"}]
        },
        {
            id: 8,
            title: "UNIHACK 2019",
            description: ``,
            tags: [
                'code', 'hackathon'
            ],
            link: '',
            stack: [{name: 'Swift', icon: 'swift', type: 'fab', color: "D55A41"}, {name: 'Firebase', icon: 'database', type: 'fas', color: "F6CC51"}]
        },
        {
            id: 9,
            title: "Finance/Budgeting App",
            description: ``,
            tags: [
                'personal', 'code', 'design'
            ],
            link: '',
            stack: [{name: 'Adobe XD'}, {name: 'Vue', icon: 'vuejs', type: 'fab', color: "64B687"}, {name: 'Firefly iii APIs', icon: 'piggy-bank', type: 'fas', color: "E2726E"}]
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
            { isExpanded &&
                <ProjectDescription>
                    <Heading>{ project[0].title }</Heading>
                    <Spacing space={0.3} />
                    { project[0].link && 
                        <p>
                            View the project here: 
                            <a href={project[0].link}> { project[0].link }</a>
                        </p>
                    }
                    <Spacing space={0.3} />
                    <h3>Description</h3>
                    <p>{ project[0].description }</p>
                    <StackContainer>
                    { project[0].stack && project[0].stack.map((stack) =>
                        <Stack>
                            <StackIcon backgroundColor={stack.color ? stack.color : "fff"}><FontAwesomeIcon icon={[stack.type as IconPrefix, stack.icon as IconName]} size="2x" /></StackIcon>
                            <Margin marginTop={15}></Margin>
                            <p>{stack.name}</p>
                        </Stack>
                    )}
                    </StackContainer>
                </ProjectDescription>
            }
        </ProjectsContainer>
    )
}

export default Projects;
