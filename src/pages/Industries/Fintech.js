import { graphql } from "gatsby"
import React from "react"
import Banner from "../../components/Banner"
// import CaseBlog from "../../components/CaseBlog"
import ClientLogo from "../../components/ClientLogo"
import FintectContentTitle from "../../components/FintectContentTitle"
// import { FintechList } from "../../components/FintechServiceList"
// import FintectContentTitle from "../../components/FintectContentTitle"
// import Footer from "../../components/Footer/Footer"
// import Header from "../../components/Header/Header"
import Layout from "../../components/layout"
import SectionAccelerate from "../../components/SectionAccelerate"
import SectionSeeUsAction from "../../components/SectionSeeUsAction"
import ServicesList from "../../components/ServicesList"

const Fintech = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout>
        <div className="wrapper">
          <Banner
            title={data.msys.fintech.data.attributes.BannerPart.Title}
            desc={data.msys.fintech.data.attributes.BannerPart.Description}
            bgImage={data.msys.fintech.data.attributes.BannerPart.Banner_Image.data.attributes.url}
            label={data.msys.fintech.data.attributes.BannerPart.link.label}
            link={data.msys.fintech.data.attributes.BannerPart.link.href}
          />
          <section class="sectionCustomCopy  tbPadd50 ">
            <div class="container containerModified text-center">
              <div class="divLimitedWidContent">
                <p>
                  {data.msys.fintech.data.attributes.sectionCustomCopy.Description1}
                </p>
                <h4 class="blueTitle">
                  {data.msys.fintech.data.attributes.sectionCustomCopy.title}
                </h4>
                <p>
                  {data.msys.fintech.data.attributes.sectionCustomCopy.Description2}
                </p>
              </div>
            </div>
          </section>
          <ServicesList
            service={data.msys.fintech.data.attributes.services.fintech_services.data}
            contentTitle={<FintectContentTitle contents = {data.msys.fintech.data.attributes.services.show_tiles_columns.data} />}
            desc= {data.msys.fintech.data.attributes.services.fintech_services.Description}
          />
          {/* <CaseBlog
            case_study="Secure Messaging Portal"
            white_paper="Software-Defined Storage Technology Architecture & Characteristics"
            brochure="Product Lifecycle Management Services"
          /> */}
          <ClientLogo 
            logoItem={data.msys.fintech.data.attributes.ClientLogoSection.client_logos.data}
          />
          <SectionAccelerate
            title={data.msys.fintech.data.attributes.SectionAccelerate.title}
            accelerate={data.msys.fintech.data.attributes.SectionAccelerate.accelerate_collections.data}
          />
          <SectionSeeUsAction 
            description={data.msys.fintech.data.attributes.SeeUsSection.Description} 
            email={data.msys.fintech.data.attributes.SeeUsSection.email}
            phone={data.msys.fintech.data.attributes.SeeUsSection.PhoneNumber}
            subTitle={data.msys.fintech.data.attributes.SeeUsSection.SubTitle}
            Title={data.msys.fintech.data.attributes.SeeUsSection.Title}
          />
        </div>
      </Layout>
    </>
  )
}

export default Fintech

export const query = graphql`
  query {
    msys {
      fintech {
        data {
          attributes {
            BannerPart {
              Banner_Image {
                data {
                  attributes {
                    url
                  }
                }
              }
              Description
              Title
              link {
                href
                label
              }
            }
            sectionCustomCopy {
              Description1
              Description2
              title
            }
            services {
              fintech_services {
                data {
                  attributes {
                    Description
                    Title
                    link {
                      href
                      label
                    }
                    Icon {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    slug
                  }
                }
              }
              Description
              show_tiles_columns {
                data {
                  attributes {
                    SubTitle
                  }
                }
              }
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
              SubTitle
              Title
              email
            }
          }
        }
      }
    }
  }
`
