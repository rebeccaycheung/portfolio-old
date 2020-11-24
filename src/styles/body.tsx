import styled from "styled-components";

export const Spacing = styled.div`
    padding: 2rem;
`

export const MediumSpacing = styled.div`
    padding: 1rem;
`

export const SmallSpacing = styled.div`
    padding: 0.3rem;
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
