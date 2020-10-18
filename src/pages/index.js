import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import img from "../images/home_img.png"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2vh;
`
const ContainerLeft = styled.div`
  width: 552px;
  height: 581px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
const ContainerRight = styled.div`
  width: 552px;
  height: 581px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`
const Image = styled.img`
  width: 552px;
  height: 414px;
`
const StoriesText = styled.p`
  margin: 0;
  font-size: 90px;
`
const CyclingText = styled.p`
  margin: 0;
  font-size: 90px;
`
const InfoText = styled.p`
  margin: 0;
  font-size: 40px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <ContainerLeft>
        <CyclingText>CYCLING</CyclingText>
        <InfoText>
          Cycling Stories is a place<br />
          for visual documentation<br />
          of places I’ve visited,<br />
          people I’ve met and things<br />
          I’ve seen while cycling.<br />
        </InfoText>
      </ContainerLeft>
      <ContainerRight>
        <Image src={img} alt="Home image" />
        <StoriesText>STORIES</StoriesText>
      </ContainerRight>
    </Container>
  </Layout>
)

export default IndexPage
