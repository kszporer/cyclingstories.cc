import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import img from "../images/progress_img.jpeg"

const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  font-family: acumin-pro, sans-serif;
  font-weight: 500;
`
const Image = styled.img`
  width: 700px;
`

const Stories = () => (
  <Layout>
    <SEO title="Stories" />
    <Header>Work in progress... <span role="img" aria-label="Builder">🛠👷🏻‍♂️🛠</span></Header>
    <Image src={img} alt="Progrss Image" />
  </Layout>
)

export default Stories
