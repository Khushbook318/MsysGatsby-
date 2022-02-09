import React from "react"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
// import SectionSeeUsAction from '../components/sectionSeeUsAction'
import { Link } from "gatsby"
// import CaseBlog from "../components/CaseBlog"
import SectionAccelerate from "../components/SectionAccelerate"
import ClientLogo from "../components/ClientLogo"
import Layout from "../components/layout"
import SectionSeeUsAction from "../components/SectionSeeUsAction"

const SinglePost = ({ data }) => {
  console.log({ data })
  return (
    <>
      <Layout>
          <div className="wrapper">
            <Banner
              title={data.msys.pages.data[0].attributes.Banner.Title}
              bgImage={data.msys.pages.data[0].attributes.Banner.Banner_Image.data.attributes.url}
              desc={data.msys.pages.data[0].attributes.Banner.Description}
              link={data.msys.pages.data[0].attributes.Banner.link.href}
              label={data.msys.pages.data[0].attributes.Banner.link.label}
            />
            <section class="sectionCustomCopy  tbPadd50 bg-eff6fa">
              <div class="container containerModified text-center">
                <div class="divLimitedWidContent">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${data.msys.pages.data[0].attributes.sectionCustomCopy.Description1}`,
                    }}
                  />
                </div>
                {/* <div class="row row-eq-height justify-content-center showCaseTiles">
                  <div class="showCaseTilesColumn">
                    <div class="showTileInner">
                      <div class="showTileContent">Workload Optimization</div>
                    </div>
                  </div>
                </div> */}

              </div>
            </section>
            <section class="sectionHowWehelp tbPadd50 ">
              <div class="container containerModified">
                <div class="row">
                  <div class="col-md-12 howWeHelpLeftCol">
                    <div class=" d-flex h-100 ">
                      <div class="align-self-center w-100">
                        <div class="mx-auto ">
                          <div class="text-center divLimitedWidContent howWeHelpLeftColInner wow slideInLeft" data-wow-duration="050">
                            <h2 class="h2Title blueTitle" dangerouslySetInnerHTML={{ __html: `${data.msys.pages.data[0].attributes.sectionHowWehelp.Title}`,}}/>
                            <p
                              dangerouslySetInnerHTML={{__html: `${data.msys.pages.data[0].attributes.sectionHowWehelp.Description}`,}}
                            />
                            <ul class="ulLeftColBulletPoints text-left">
                              {data.msys.pages.data[0].attributes.sectionHowWehelp.list.map(
                                item => (
                                  <li key={item.id}>{item.Title}</li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="sectionTwoColLightBG bg-eff6fa tbPadd50">
              <div class="container containerModified ">
                <div class="row">
                  <div class="col-lg-5 order-lg-12">
                    <div class=" d-flex h-100 ">
                      <div class="align-self-center w-100">
                        <div class="mx-auto  ">
                          <img
                            class="bg-background-area twoColRightColumnImg rocket-lazyload"
                            src={`http://localhost:1337${data.msys.pages.data[0].attributes.sectionTwoCol.image.data.attributes.url}`}
                            altImg="QA_Automation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7 order-lg-1">
                    <div class=" d-flex h-100 ">
                      <div class="align-self-center w-100">
                        <div class="mx-auto  twoColleftColumnContent">
                          <h3 class="h2Title blueTitle"
                           dangerouslySetInnerHTML={{__html: `${data.msys.pages.data[0].attributes.sectionTwoCol.Title}`,}}
                          />
                          <h3 class="h2Title blueTitle">{data.msys.pages.data[0].attributes.sectionTwoCol.Title}</h3>
                          <p>
                            {data.msys.pages.data[0].attributes.sectionTwoCol.Description.Description1}
                            <br />
                            {data.msys.pages.data[0].attributes.sectionTwoCol.Description.Description2}
                            <br />
                            {data.msys.pages.data[0].attributes.sectionTwoCol.Description.Description3}
                          </p>
                          <h5>{data.msys.pages.data[0].attributes.sectionTwoCol.Description.SubTitle}</h5>
                          <ul class="ulLeftColBulletPoints">
                            {data.msys.pages.data[0].attributes.sectionTwoCol.list.map(item=>(
                              <li key={item.id}>{item.Title}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="sectionHowWehelp tbPadd50 ">
              <div class="container containerModified">
                <div class="row">
                  <div class="col-md-12 howWeHelpLeftCol">
                    <div class=" d-flex h-100 ">
                      <div class="align-self-center w-100">
                        <div class="mx-auto ">
                          <div
                            class="text-center divLimitedWidContent howWeHelpLeftColInner wow slideInLeft"
                            data-wow-duration="1500"
                          >
                            <h2 class="h2Title blueTitle">
                              {" "}
                              {data.msys.pages.data[0].attributes.PageServices.Title}
                            </h2>
                            <p>{data.msys.pages.data[0].attributes.PageServices.Description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 howWeHelpRgihtCol">
                    <div className=" d-flex h-100 ">
                      <div className="align-self-center w-100">
                        <div className="mx-auto ">
                          <div className="howWeHelpRgihtColInner text-center">
                            <div className="keyElementsHowWeHelp">
                              {data.msys.pages.data[0].attributes.PageServices.page_services.data.map(
                                list => (
                                  <div
                                    key={list.id}
                                    className="keyElement wow bounceInUp"
                                    data-wow-duration="1500"
                                    data-wow-delay="1.35s"
                                  >
                                    <div className="keyElementInner">
                                      <div className="keyEleIcon">
                                        <img
                                          width="40"
                                          src={`http://localhost:1337${list.attributes.Icon.data.attributes.url}`}
                                          alt={list.altImg}
                                        />
                                      </div>
                                      <h3 id={list.id}>
                                        {list.attributes.Title}
                                      </h3>
                                      <div className="keyElemntOverlay">
                                        <div className="keyElemntOverlayInner">
                                          <p>{list.attributes.Description}</p>
                                          <Link to={list.attributes.link.href} className="btnRoundBorderdWhite">
                                            {list.attributes.link.label}
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="sectionCustomerSpeak bg-eff6fa tbPadd50">
              <div class="container containerModified">
                <div class="row ">
                  <div class="col-md-6">
                    <div class="d-flex h-100 ">
                      <div class="align-self-center w-100">
                        <div class="mx-auto">
                          <div class="embed-responsive customerSpeakVideo">
                            {/* <div
                              class="rll-youtube-player"
                              data-src="https://www.youtube.com/embed/uAEmhZMDRj4"
                              data-id="uAEmhZMDRj4"
                              data-query="feature=oembed"
                            ></div> */}
                            {/* <noscript> */}
                              <iframe
                                title="What are the key technologies that will drive Storage industry? by Niranjan Pedhnekar, Nutanix"
                                width="90"
                                height="506"
                                src="https://www.youtube.com/embed/uAEmhZMDRj4?feature=oembed"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            {/* </noscript> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 ">
                    <div class=" d-flex h-0 ">
                      <div class="align-self-center w-0">
                        <div class="mx-auto  customerSpeakInner">
                          <h2 class="h2_font_services blueTitle">
                            {data.msys.pages.data[0].attributes.CustomerSpeaks.Title}
                          </h2>
                          <p>
                            {data.msys.pages.data[0].attributes.CustomerSpeaks.Description}
                          </p>
                          <p>
                            <strong>
                              {
                                data.msys.pages.data[0].attributes
                                  .CustomerSpeaks.SubTitle
                              }
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="sectionCaseBlog tbPadd50 ">
              <div class="container containerModified">
                <h2 class="semiBold blueTitle text-center h2_font_services bMargin25">
                  Case Study and Blogs
                </h2>
                <div class="row">
                  {data.msys.pages.data[0].attributes.CaseStudy.services_case_studies.data[0].attributes.CaseStudy.map(
                    list => (
                      <div class="col-md-4 caseBlogCol">
                        <Link to={list.link.href}>
                          <div class="caseBlogColInner h-0">
                            <h4
                              class="caseBlogColInnerTitle h3_24px"
                              dangerouslySetInnerHTML={{
                                __html: `${list.Title}`,
                              }}
                            />
                            <p
                              dangerouslySetInnerHTML={{
                                __html: `${list.Description}`,
                              }}
                            />
                            <img
                              className="downIcon"
                              width="28"
                              src="https://staging.msystechnologies.com/wp-content/uploads/2019/10/sdc-download-icon.png"
                              alt="case_study"
                            />
                          </div>
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>
            <ClientLogo 
              logoItem={data.msys.pages.data[0].attributes.ClientLogo.client_logos.data}
            />
            <SectionAccelerate
              title={data.msys.pages.data[0].attributes.SectionAccelerate.title}
              accelerate={data.msys.pages.data[0].attributes.SectionAccelerate.accelerate_collections.data}
            />
          </div>
          <SectionSeeUsAction 
             description={data.msys.pages.data[0].attributes.SeeUsSection.Description} 
             email={data.msys.pages.data[0].attributes.SeeUsSection.email}
             phone={data.msys.pages.data[0].attributes.SeeUsSection.PhoneNumber}
             subTitle={data.msys.pages.data[0].attributes.SeeUsSection.SubTitle}
             Title={data.msys.pages.data[0].attributes.SeeUsSection.Title} 
          />
      </Layout>
    </>
  )
}
export default SinglePost

export const query = graphql`
  query ($slug: String!) {
    msys {
      pages(filters: { slug: { eq: $slug } }) {
        data {
          attributes {
            slug
            Title
            Banner {
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
              Description2
            }
            sectionHowWehelp {
              Description
              Title
              list {
                Title
              }
            }
            sectionTwoCol {
              Description {
                Description1
                Description2
                Description3
                SubTitle
              }
              list {
                Title
              }
              Title
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            PageServices {
              page_services {
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
              Description
              Title
            }
            CustomerSpeaks {
              Description
              SubTitle
              Title
            }
            CaseStudy {
              services_case_studies {
                data {
                  attributes {
                    CaseStudy {
                      Description
                      link {
                        href
                      }
                      Title
                    }
                  }
                }
              }
              Title
            }
            ClientLogo {
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
              email
              SubTitle
              Description
              PhoneNumber
              Title
            }
          }
        }
      }
    }
  }
`
