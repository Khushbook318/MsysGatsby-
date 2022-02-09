import React from "react"
import Banner from "../../components/Banner"
// import { FintechList } from "../../components/FintechServiceList"
// import Footer from "../../components/Footer/Footer"
// import Header from "../../components/Header/Header"
// import Parser from 'html-react-parser';
import ServicesList from "../../components/ServicesList"
import ClientLogo from "../../components/ClientLogo"
import SectionAccelerate from "../../components/SectionAccelerate"
import SectionSeeUsAction from "../../components/SectionSeeUsAction"
import SectionCustomerSpeak from "../../components/SectionCustomerSpeak"
// import CaseBlog from "../../components/CaseBlog"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const Loyalty = ({data}) => {
  console.log(data);
  // const myText = 'With MSys Technologies, you can deliver turnkey loyalty solutions to your end-users. Our more-than-decade long expertise spans end-to-end technology stack for all kinds of loyalty applications.We have executed state-of-the-art SaaS and PaaS platforms that act as a marketplace to drive consumer engagement and enable redemption across various business categories. Considering the dynamic market scenario, we develop highly customizable solutions. The Loyalty Management solutions developed at MSys Technologies are scalable for large enterprises, and are supported with the latest technologies like Docker, Kubernetes and other such scalability mechanics. With our expertise and experience in application development, quality assurance, UI/UX, DevOps, Analytics and sustenance within the loyalty space; we are in a unique position to help loyalty solution providers create innovatory new solutions.</p><p>We at MSys have helped leading loyalty solution providers implement innovative marketing, fulfillment and employee incentive solutions for prominent financial institutions, multi-channel retailers, e-commerce companies and Fortune 500 corporates.</p>';
  // const myName = '-CTO, Loyalty Management Solutions company';
  return (
    <>
      <Layout>
        <div className="wrapper">
          <Banner
            title={data.msys.loyalty.data.attributes.BannerPart.Title}
            desc={data.msys.loyalty.data.attributes.BannerPart.Description}
            bgImage={data.msys.loyalty.data.attributes.BannerPart.Banner_Image.data.attributes.url}
            label={data.msys.loyalty.data.attributes.BannerPart.link.label}
            link={data.msys.loyalty.data.attributes.BannerPart.link.href}
          />
          <section class="sectionCustomCopy  tbPadd50 ">
            <div class="container containerModified text-center">
              <div class="divLimitedWidContent">  
                {data.msys.loyalty.data.attributes.sectionCustomCopy.Description1}
              </div>
            </div>
          </section>
          <ServicesList
            title={data.msys.loyalty.data.attributes.services.Title}
            service={data.msys.loyalty.data.attributes.services.loyalty_services.data}
            style={{ backgroundColor: "#eff6fa" }}
            desc={data.msys.loyalty.data.attributes.services.Description1}
            description={data.msys.loyalty.data.attributes.services.Description2}
          />
          <SectionCustomerSpeak 
            title={data.msys.loyalty.data.attributes.CustomerSpeaks.Title} 
            description={data.msys.loyalty.data.attributes.CustomerSpeaks.Description} 
            name={data.msys.loyalty.data.attributes.CustomerSpeaks.SubTitle} 
          />
          {/* <CaseBlog case_study="MSys DevOps and Containerization Solutions Help Fast-Food Giant to Achieve Zero Downtime Deployment" white_paper="Product Engineering Product Sustenance and Maintenance: An Industry Perspective" brochure="Bridge2 Solutions (B2) to Set Up a Subsidiary in India Under the Aegis of MSys Technologies" /> */}
          <ClientLogo 
            logoItem={data.msys.loyalty.data.attributes.ClientLogoSection.client_logos.data}
          />
          <SectionAccelerate title={data.msys.loyalty.data.attributes.SectionAccelerate.title} accelerate={data.msys.loyalty.data.attributes.SectionAccelerate.accelerate_collections.data}/>
          <SectionSeeUsAction
            description={data.msys.loyalty.data.attributes.SeeUsSection.Description} 
            email={data.msys.loyalty.data.attributes.SeeUsSection.email}
            phone={data.msys.loyalty.data.attributes.SeeUsSection.PhoneNumber}
            subTitle={data.msys.loyalty.data.attributes.SeeUsSection.SubTitle}
            Title={data.msys.loyalty.data.attributes.SeeUsSection.Title}          
          />
        </div>
      </Layout>
    </>
  )
}

export default Loyalty

export const query = graphql`
  query {
    msys {
      loyalty {
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
              Description1
              Title
              Description2
              loyalty_services {
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
                  }
                }
              }
            }
            CustomerSpeaks {
              Description
              SubTitle
              Title
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
            SectionAccelerate {
              title
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
  }`