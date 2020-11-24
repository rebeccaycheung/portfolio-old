import styled from "styled-components";

export const Spacing = styled.div`
    padding: 2rem;
`

export const SmallSpacing = styled.div`
    padding: 0.5rem;
`

export const HeaderStyle = styled.body`
    display: flex;
    justify-content: space-between;
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
`

export const Toggle = styled.body`
    text-align: center;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 10px;
    width: 150px;
`

export const Tile = styled.body`
    background-color: #ffffff;
    padding: 2.5rem;
    border-radius: 10px;
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
    width: 300px;
    height: 50px;
`
