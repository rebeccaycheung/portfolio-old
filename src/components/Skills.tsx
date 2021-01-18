import React, { FunctionComponent } from 'react';
import { Heading, Spacing, SkillsContainer, SkillItem, SkillItemContainer } from '../styles/body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SkillsProps = {
  title: string,
}

const Skills: FunctionComponent<SkillsProps> = ({ title }) => {
    return (
        <SkillsContainer>
            <Heading>{ title }</Heading>
            <Spacing space={0.3} />
            <SkillItemContainer>
                <SkillItem>
                    <FontAwesomeIcon icon={["fab", "vuejs"]} size="5x" />
                    <p>Vue</p>
                </SkillItem>
                <SkillItem>
                    <FontAwesomeIcon icon={["fab", "react"]} size="5x" />
                    <p>React</p>
                </SkillItem>
                <SkillItem>
                    <FontAwesomeIcon icon={["fab", "css3-alt"]} size="5x" />
                    <p>CSS</p>
                </SkillItem>
                <SkillItem>
                    <FontAwesomeIcon icon={["fab", "html5"]} size="5x" />
                    <p>HTML</p>
                </SkillItem>
                <SkillItem>
                    <FontAwesomeIcon icon={["fab", "node-js"]} size="5x" />
                    <p>NodeJS</p>
                </SkillItem>
                <SkillItem>
                    <FontAwesomeIcon icon={["fab", "js"]} size="5x" />
                    <p>TypeScript</p>
                </SkillItem>
                <SkillItem>
                    <FontAwesomeIcon icon={["fab", "git-alt"]} size="5x" />
                    <p>Git</p>
                </SkillItem>
            </SkillItemContainer>
        </SkillsContainer>
    )
}

export default Skills;
