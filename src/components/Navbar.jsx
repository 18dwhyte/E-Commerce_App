import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
const Container = styled.div`
    height: 60px;
    
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content: spaced-between
`;



const Langauge = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div `
    border: 1px solid lightgray;
    display:flex;
    align-items: center;
    margin:25px;
    padding: 5px;
    
`
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    `

const Input = styled.input`
    border:none;
`

const Center = styled.div`
    flex: 1;
    text-align:center;
    `
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    `
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
`
export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                <Langauge>EN</Langauge>
                <SearchContainer> 
                    <Input></Input>
                </SearchContainer>
                </Left>
                <Center>
                    <Logo>Flowers.</Logo>
                </Center>
                 <Right>
                     <MenuItem> REGISTER</MenuItem>
                     <MenuItem> SIGN IN</MenuItem>
                     <Badge badgeContent={4} color="success">
                        <MailIcon color="action" />
                     </Badge>
                 </Right>
            </Wrapper>
        </Container>
    )
}
