import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const ThankYou = ({data}) => {
  return (
    <>
      <Layout>
        <section
          className="servicesLandingHero sectionHomeHero tbPadd100 "
          style={{backgroundImage: `url(http://localhost:1337${data.msys.thankyouPage.data.attributes.image.data.attributes.url})`}}>
          <div className="container containerModified">
            <div className="bannerContentMinHeight d-flex h-100 ">
              <div className="align-self-center w-100">
                <div className="homeHeroInner mx-auto">
                  <h2 className="h2Title blueTitle">
                      {data.msys.thankyouPage.data.attributes.Title}
                  </h2>
                  <h4 className="tMargin25" style={{fontWeight:'400'}}>
                      {data.msys.thankyouPage.data.attributes.Description}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ThankYou

export const query = graphql`
query {
    msys {
      thankyouPage {
        data {
          attributes {
            Description
            Title
            image {
                data {
                  attributes {
                    url
                  }
                }
            }
          }
        }
      }
    }
  }
  
`