import React from "react"
import Banner from "../../components/Banner"
import CaseBlog from "../../components/CaseBlog"
import SectionAccelerate from "../../components/SectionAccelerate"
import ClientLogo from "../../components/ClientLogo"
import ServicesList from "../../components/ServicesList"
// import { IsvLists } from "../../components/IsvLists"
import SectionSeeUsAction from "../../components/SectionSeeUsAction"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const IndependentSoftwareVendors = ({ data }) => {
  console.log(data)
  // const myText = `${data.msys.independentSoftwareVendor.data.attributes.services.Title1} <br /> ${data.msys.independentSoftwareVendor.data.attributes.services.Title2}`
  return (
    <>
      <Layout>
        <div className="wrapper">
          <Banner
            title={data.msys.independentSoftwareVendor.data.attributes.BannerPart.Title}
            desc={data.msys.independentSoftwareVendor.data.attributes.BannerPart.Description}
            bgImage={data.msys.independentSoftwareVendor.data.attributes.BannerPart.Banner_Image.data.attributes.url}
            label={data.msys.independentSoftwareVendor.data.attributes.BannerPart.link.label}
            link={data.msys.independentSoftwareVendor.data.attributes.BannerPart.link.href}
          />
          <section className="sectionCustomCopy tbPadd50 ">
            <div className="container containerModified text-center">
              <div className="divLimitedWidContent">
                {data.msys.independentSoftwareVendor.data.attributes.sectionCustomCopy.Description1}
              </div>
            </div>
          </section>
          <ServicesList
            service={data.msys.independentSoftwareVendor.data.attributes.services.ISVservices.data}
            style={{ backgroundColor: "#eff6fa" }}
            desc={data.msys.independentSoftwareVendor.data.attributes.services.Description}
          />
          <CaseBlog
            title={data.msys.independentSoftwareVendor.data.attributes.CaseStudyBlog.Title}
            blog={data.msys.independentSoftwareVendor.data.attributes.CaseStudyBlog.case_studies.data}
          />
          {/* <CaseBlog case_study="Niche Network Diagnostics For leading NFV ISV" white_paper="Cloud Computing ISVs: Building a Cloud-Based Business Strategy" brochure="Product Lifecycle Management Services"/> */}
          <ClientLogo 
            logoItem={data.msys.independentSoftwareVendor.data.attributes.ClientLogoSection.client_logos.data}
          />
          <SectionAccelerate
            title={data.msys.independentSoftwareVendor.data.attributes.SectionAccelerate.title}
            accelerate={data.msys.independentSoftwareVendor.data.attributes.SectionAccelerate.accelerate_collections.data}
          />
          <SectionSeeUsAction 
            description={data.msys.independentSoftwareVendor.data.attributes.SeeUsSection.Description} 
            email={data.msys.independentSoftwareVendor.data.attributes.SeeUsSection.email}
            phone={data.msys.independentSoftwareVendor.data.attributes.SeeUsSection.PhoneNumber}
            subTitle={data.msys.independentSoftwareVendor.data.attributes.SeeUsSection.SubTitle}
            Title={data.msys.independentSoftwareVendor.data.attributes.SeeUsSection.Title}
          />
        </div>
      </Layout>
    </>
  )
}

export default IndependentSoftwareVendors

export const query = graphql`
  query {
    msys {
      independentSoftwareVendor {
        data {
          attributes {
            BannerPart {
              Description
              Title
              Banner_Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              link {
                href
                label
              }
            }
            sectionCustomCopy {
              Description1
            }
            services {
              ISVservices {
                data {
                  attributes {
                    Description
                    Title
                    Icon {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    link {
                      href
                      label
                    }
                    slug
                  }
                }
              }
              Title1
              Title2
              Description
            }
            CaseStudyBlog {
              case_studies {
                data {
                  attributes {
                    Description
                    Title
                  }
                }
              }
              Title
            }
            ClientLogoSection {
              client_logos {
                data {
                  attributes {
                    link {
                      href
                    }
                    ClientLogo {
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
            SectionAccelerate {
              accelerate_collections {
                data {
                  attributes {
                    Description
                    AccelerateLogo {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
              title
            }
            SeeUsSection {
              Description
              PhoneNumber
              Title
              SubTitle
              email
            }
          }
        }
      }
    }
  }
`
