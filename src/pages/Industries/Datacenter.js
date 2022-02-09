import * as React from "react"
import Banner from "../../components/Banner"
import CaseBlog from "../../components/CaseBlog"
// import { CaseBlogList } from "../../components/CaseBlogList"
// import { Link } from "gatsby"
// import ClientLogo from "../../components/ClientLogo"
import SectionAccelerate from "../../components/SectionAccelerate"
// import { SectionAccelerateList } from "../../components/SectionAccelerateList"
import ServicesList from "../../components/ServicesList"
// import { DatacenterList } from "../../components/DatacenterServicesList"
import SectionSeeUsAction from "../../components/sectionSeeUsAction"
import SectionCustomerSpeak from "../../components/SectionCustomerSpeak"
import Parser from "html-react-parser"
import { graphql } from "gatsby"
import ClientLogo from "../../components/ClientLogo"
import Layout from "../../components/layout"

export default function Component({ data }) {
  console.log(data)
  const myText = `${data.msys.datacenter.data.attributes.CustomerSpeaks.SubTitle}`
  return (
    <> 
      <Layout>
        <div className="wrapper">
          <Banner
            title={data.msys.datacenter.data.attributes.BannerPart.Title}
            desc={data.msys.datacenter.data.attributes.BannerPart.Description}
            bgImage={data.msys.datacenter.data.attributes.BannerPart.Banner_Image.data.attributes.url}
            label={data.msys.datacenter.data.attributes.BannerPart.link.label}
            link={data.msys.datacenter.data.attributes.BannerPart.link.href}
          />
          <section className="sectionCustomCopy  tbPadd50 bg-eff6fa">
            <div className="container containerModified text-center">
              <div className="divLimitedWidContent">
                <p>{data.msys.datacenter.data.attributes.sectionCustomCopy.Description1}</p>
                <h4 className="blueTitle">
                  {data.msys.datacenter.data.attributes.sectionCustomCopy.title}
                </h4>
                <p>{data.msys.datacenter.data.attributes.sectionCustomCopy.Description2}</p>
                <p>{data.msys.datacenter.data.attributes.sectionCustomCopy.Description3}
                </p>
              </div>
            </div>
          </section>
          <ServicesList
            title={data.msys.datacenter.data.attributes.Services.Title}
            service={data.msys.datacenter.data.attributes.Services.datacenter_services.data}
            description={data.msys.datacenter.data.attributes.Services.Description}
          />
          <SectionCustomerSpeak
            title={data.msys.datacenter.data.attributes.CustomerSpeaks.Title}
            description={data.msys.datacenter.data.attributes.CustomerSpeaks.Description}
            name={Parser(myText)}
          />
          <CaseBlog
            title={data.msys.datacenter.data.attributes.CaseStudyBlog.Title}
            blog={data.msys.datacenter.data.attributes.CaseStudyBlog.case_studies.data}
          />
          <ClientLogo 
            logoItem={data.msys.datacenter.data.attributes.ClientLogoSection.client_logos.data}
          />
          <SectionAccelerate
            title={data.msys.datacenter.data.attributes.SectionAccelerate.title}
            accelerate={data.msys.datacenter.data.attributes.SectionAccelerate.accelerate_collections.data}
          />
          <SectionSeeUsAction 
            description={data.msys.datacenter.data.attributes.SeeUsSection.Description} 
            email={data.msys.datacenter.data.attributes.SeeUsSection.email}
            phone={data.msys.datacenter.data.attributes.SeeUsSection.PhoneNumber}
            subTitle={data.msys.datacenter.data.attributes.SeeUsSection.SubTitle}
            Title={data.msys.datacenter.data.attributes.SeeUsSection.Title}
          />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    msys {
      datacenter {
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
              id
              link {
                href
                label
              }
              Title
            }
            sectionCustomCopy {
              Description1
              Description2
              Description3
              id
              title
            }
            Services {
              datacenter_services {
                data {
                  attributes {
                    slug
                    Description
                    Icon {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                    Title
                    link {
                      href
                      label
                      id
                    }
                  }
                }
              }
              Description
              Title
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
            CustomerSpeaks {
              Description
              SubTitle
              Title
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
            ClientLogoSection {
              client_logos {
                data {
                  attributes {
                    ClientLogo {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    link {
                      href
                    }
                  }
                }
              }
            }
            SeeUsSection {
              Description
              SubTitle
              PhoneNumber
              Title
              email
            }
          }
        }
      }
    }
  }
`