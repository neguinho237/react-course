import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 73px;
    border-bottom: 1px solid black;
    justify-content: space-between;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0 64px;
`

export const Logo = styled.h1`
font-size: 30px;
font-weight: 900;
`

export const Nav = styled.nav`
display: flex;
gap: 32px;
`

export const Link = styled.button`
font-size: 16px;
background-color: transparent;
`

export const Button = styled.button`
border: 1px solid black;
display: flex;
justify-content: center;
width: 88px;
height: 48px;
align-items: center;
background-color: ${props => props.bgColor ? props.bgColor : 'trasnparent'};
color: ${props => props.bgColor ? 'white' : 'black' };
`
export const ContainerButton = styled.div`
display: flex;
gap: 16px;
`