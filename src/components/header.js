import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import LogoImg from "../images/logo.png"

const Container = styled.header`
  height: 141px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 137px;
  height: 59px;
  padding-left: 140px;
`

const ItemsContainer = styled.div`
  width: 206px;
  padding-right: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Item = styled(Link)`
  font-size: 22px;
  text-decoration: none;
  color: black;
`

const Header = () => (
  <Container>
    <Link to="/">
      <Logo src={LogoImg} alt="Logo" />
    </Link>
    <ItemsContainer>
      <Item to="/stories">Stories</Item>
      <Item to="/about">About</Item>
    </ItemsContainer>
  </Container>
)

export default Header
