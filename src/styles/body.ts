import styled from "styled-components";

interface WidthProps {
    width: number;
}

export const Width = styled.body<WidthProps>`
    ${({ width }) => `width: ${width}px;`}
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
    ${({ marginTop }) => marginTop ? `margin-top:${marginTop}px` : `margin-top:0px`};
    ${({ marginLeft }) => marginLeft ? `margin-left:${marginLeft}px` : `margin-left:0px`};
    ${({ marginRight }) => marginRight ? `margin-right:${marginRight}px` : `margin-right:0px`};
    ${({ marginBottom }) => marginBottom ? `margin-bottom:${marginBottom}px` : `margin-bottom:0px`};
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
    width: 200px;
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
    ${({ width }) => `width: ${width}px;`}
    height: 12px;
    border-radius: 20px;
`

export const TimelineDescription = styled.div`
    text-align: left;
`

export const SkillsContainer = styled(Tile)`
    width: 60%;
    float: right;
`

export const SkillItem = styled.div`
    text-align: center;
    padding-right: 60px;
    text-transform: uppercase;
    font-weight: 500;
`

export const SkillItemContainer = styled.div`
    display: flex;
    justify-items: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 800px;
`
