import styled from "styled-components";

export const Spacing = styled.div`
    padding: 2rem;
`

export const SmallSpacing = styled.div`
    padding: 0.3rem;
`

export const HeaderStyle = styled.body`
    display: flex;
    justify-content: flex-start;
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
    margin: 0rem;
`

export const Toggle = styled.body`
    text-align: center;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 10px;
    width: 150px;
    margin-right: 0rem;
`

export const Tile = styled.body`
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

export const AboutContainer = styled.body`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`
