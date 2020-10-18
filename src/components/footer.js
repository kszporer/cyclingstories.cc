import React from "react"
import styled from "styled-components"

import logo from "../images/logo_footer.png"

const Container = styled.footer`
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 140px;
`

const Logo = styled.img`
  width: 93px;
  height: 40px;
  margin-top: 1px;
`

const FooterText = styled.p`
  margin: 0;
  padding-left: 44px;
  font-size: 16px;
  color: #888888;
`

const FooterLinks = styled.p`
  margin: 0;
  padding-right: 140px;
  font-size: 22px;
  color: #888888;
`

const Link = styled.a`
  color: #888888;
  text-decoration: none;
`
const Footer = () => (
  <Container>
    <ContainerLeft>
      <Logo src={logo} alt="Logo" />
      <FooterText>
        {`© ${new Date().getFullYear()} CyclingStories.cc`}
        <br />
        {"Design by "}
        <Link href="https://github.com/krzysiek-szporer">
          Krzysztof Szporer
        </Link>
      </FooterText>
    </ContainerLeft>
    <FooterLinks>
      <Link href="https://www.strava.com/athletes/11166844">Strava</Link>
      {" / "}
      <Link href="https://www.komoot.com/user/824528627906">Komoot</Link>
    </FooterLinks>
  </Container>
)

export default Footer
