import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 60px;
    
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: spaced-between
`;

const Left = styled.div`
    flex: 1`
const Center = styled.div`
    flex: 1`
const Right = styled.div`
    flex: 1`
export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                  <Left>a</Left>
                <Center>b</Center>
                 <Right>c</Right>
            </Wrapper>
        </Container>
    )
}
