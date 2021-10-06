import React from "react"

import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import praying from "../images/praying_1.png";

import TlBWrapper from "../components/TLBWrapper";
import Blur from "../components/Blur";
import Heading1 from "../components/Heading1"

import styled from "styled-components";

import Work from "../components/Work";


const WorkHolder = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;  
`;

const Title = styled.h1`
    margin: 20px auto;
    width: 90%;
    text-align: center;
    position: fixed;
    top: 20px;
    z-index: 3;
`;

const Me = styled.img`
    display: block;
    margin: 0 auto 20px;
    @media (${({ theme }) => theme.respondTo.tablet}) {
      max-width: 500px;
      font-size: 20px;
    }
`;

const Welcoming = styled(TlBWrapper)`
    @media (${({ theme }) => theme.respondTo.tablet}) {
        max-width: 60%;
        margin: auto;
    }
`;

const CenterHead = styled(Heading1)`
    text-align: center;
`;

const IndexPage = ({ data }) => {

  const welcome = data.prismicWelcome.data
  const workdata = data.allPrismicWork.nodes
  
  
  
    workdata.sort(function(a, b) {
      return b.data.order - a.data.order;
    })

    const works = workdata.map((item, i)=>
          <Work item={item.data} key={i}/>
    );

    return(
      <>
      <Layout isHomepage={"yes"}>
        <SEO title="Get in touch"/>

      <Title>Tim<Blur text={"o"} />thy F<Blur text={"ol"} />i</Title>
        <div>
          <Me src={praying} alt="Having a good time mostly :-)"/>
          <Welcoming content={welcome.brood_text}/>
          <CenterHead text={"Work ↓"} />
          <WorkHolder>
              {works}
          </WorkHolder>
        </div>
      
        
      </Layout>
      </>
    );
  }

export default IndexPage


export const HOMEPAGE_QUERY = graphql`
{
  allPrismicWork{
    nodes{
      data{
        brood_text{
        font_grootte
        type_link
        text_link_of_space
        style
        context{
          text
        }
        
      }
      order
      live_link{
        text
      }
      repo_link{
        text
      }
        cover{
          url
        }
        title{
          text
        }
        date{
          text
        }
        
      }
    }
  }
  prismicWelcome{
    data{
      brood_text{
        font_grootte
        type_link
        text_link_of_space
        style
        context{
          text
        }
        
      }
    }
  }
}
`