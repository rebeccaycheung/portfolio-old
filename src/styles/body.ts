import styled from "styled-components";

interface WidthProps {
    width: number;
}

export const Width = styled.div<WidthProps>`
    ${({ width }) => `width: ${width}%;`}
    margin: 0 auto;
    clear: both;
`

interface SpacingProps {
    space: number;
}

export const Spacing = styled.div<SpacingProps>`
    ${({ space }) => `padding: ${space}rem;`}
`

interface MarginProps {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
}

export const Margin = styled.div<MarginProps>`
    ${({ marginTop }) => marginTop ? `margin-top:${marginTop}%` : `margin-top:0px`};
    ${({ marginLeft }) => marginLeft ? `margin-left:${marginLeft}%` : `margin-left:0px`};
    ${({ marginRight }) => marginRight ? `margin-right:${marginRight}%` : `margin-right:0px`};
    ${({ marginBottom }) => marginBottom ? `margin-bottom:${marginBottom}%` : `margin-bottom:0px`};
`

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
`

export const NameTag = styled.h1`
    text-align: center;
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 0px 0px 10px 10px;
    height: 150px;
    width: 311px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 0rem;
`

export const Toggle = styled.div`
    text-align: center;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 10px;
    width: 150px;
`

export const Tile = styled.div`
    background-color: #ffffff;
    padding: 2.5rem;
    border-radius: 10px;
`

export const AboutTile = styled(Tile)`
    flex: 2 4 auto;
    margin-right: 2rem;
`

export const ContactTile = styled(Tile)`
    flex: 1 1 0;
`

export const Heading = styled.h1`
    font-weight: 600;
    font-size: 18px;
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-items: spacing-between;
    align-items: center;
`

export const FactsContainer = styled(Container)`
    width: 200px;
    height: 50px;
`

export const AboutContainer = styled.div`
    display: flex;
    justify-items: spacing-between;
    align-items: stretch;
`

export const JourneyContainer = styled.div`
    text-align: center;
`

export const Timeline = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
`

export const Year = styled.div`
    width: 100%;
    border-right: 2px solid #707070;
    &:nth-child(1) {
        border-left: 2px solid #707070;
    }
`

interface TimelineBarProps {
    width: number;
    color: string;
}

export const TimelineBar = styled.div<TimelineBarProps>`
    ${({ color }) => `background-color: #${color};`}
    ${({ width }) => `width: ${width}%;`}
    height: 12px;
    border-radius: 20px;
`

export const TimelineDescription = styled.div`
    text-align: left;
`

export const SkillsContainer = styled(Tile)`
    text-align: center;
`

export const SkillItem = styled.div`
    text-align: center;
    padding-right: 5rem;
    &:last-child {
        padding-right: 0rem;
    }
    text-transform: uppercase;
    font-weight: 500;
`

export const SkillItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1.5rem;
`

export const ProjectsContainer = styled(Tile)`
    border-radius: 10px 10px 0px 0px;
    padding-bottom: 100px;
`

export const ProjectContainer = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    flex-wrap: wrap;
`

export const ProjectItem = styled.button`
    flex: 1 1 30%;
    height: 30%;
    border: none;
    border-radius: 20px;
    background-color: #F8F8F8;
    text-transform: capitalize;
    padding: 20px 30px;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: left;
    cursor: pointer;
`

export const ProjectDescription = styled.div`
    border-radius: 20px;
    background-color: #F8F8F8;
    padding: 30px 30px 0px 30px;
    margin-bottom: 1.5rem;
`

export const Tag = styled.div`
    color: #818181;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 10px;
    padding-right: 10px;
`

export const TagContainer = styled.div`
    display: flex;
    justify-items: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const Icon = styled.div`
    margin-bottom: 20px;
    color: #709775;
`

export const StackContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 80%;
`

export const Stack = styled.div`
    background-color: #ffffff;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    height: 200px;
    margin-left: 2rem;
    padding: 1rem 0.5rem 0rem 0.5rem;
    text-align: center;
    width: 60px;
`

interface StackIconProps {
    backgroundColor: string;
}

export const StackIcon = styled.div<StackIconProps>`
    ${({ backgroundColor }) => `background-color: #${backgroundColor};`}
    color: #ffffff;
    font-size: 15px;
    border-radius: 10rem;
    padding: 0.8rem;
    width: 30px;
    height: 30px;
    text-align: center;
    margin: 0 auto;
`
