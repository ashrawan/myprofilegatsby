import React from "react"
import Home from "./Home";
import SEO from "../components/seo";
import MainLayout from "../components/MainLayout";

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" keywords={[`shrawan`, `developer`, `portfolio`]} />
    <Home />
  </MainLayout>
)

export default IndexPage
