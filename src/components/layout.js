import * as React from "react"
// import Banner from "./Banner"
// import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./style.css"
import CustomWidget from "./CustomWidget"
import ScrollToTop from "./ScrollToTop"

// import "jquery/dist/jquery.min.js";

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    msys {
        header {
            data {
              attributes {
                Header {
                  Button {
                    Title
                    Button {
                      href
                      label
                    }
                  }
                  MenuItem {
                    Title
                    link {
                      href
                      label
                    }
                    menu_links {
                      data {
                        attributes {
                          Title
                          link {
                            href
                            label
                          }
                        }
                      }
                    }
                  }
                  ServiceMenu {
                    Title
                    link {
                      href
                      label
                    }
                    sub_menus {
                      data {
                        attributes {
                          ServiceSubMenu {
                            link {
                              href
                              label
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
                }
              }
            }
        }
        footer {
          data {
            attributes {
              Footer {
                footer_desc
                FooterSocialLink {
                  SocialIcon_Label
                  SocialIcon {
                    href
                    Social_icon {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
                FooterSubcontent {
                  copyright
                  link {
                    href
                    label
                  }
                }
                footer_logo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                logoSpl {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                menu_sections {
                  data {
                    attributes {
                      Title
                      link {
                        href
                        label
                      }
                    }
                  }
                }
              }
            }
          }
        }
    }
  }
  `)

  return (
    <>
    <div className="wrapper">
      <Header 
        menuItem={data.msys.header.data.attributes.Header.MenuItem} 
        ServiceTitle={data.msys.header.data.attributes.Header.ServiceMenu.Title}
        subMenu={data.msys.header.data.attributes.Header.ServiceMenu.sub_menus.data}
        button={data.msys.header.data.attributes.Header.Button}
      />
      <main role="main">
        {children}
      </main>
      <Footer
        logoImage={data.msys.footer.data.attributes.Footer.footer_logo.data.attributes.url}
        logoSplImage={data.msys.footer.data.attributes.Footer.logoSpl.data.attributes.url}
        contents={data.msys.footer.data.attributes.Footer.menu_sections.data}
        description={data.msys.footer.data.attributes.Footer.footer_desc} 
        copyright={data.msys.footer.data.attributes.Footer.FooterSubcontent.copyright}
        Subcontent={data.msys.footer.data.attributes.Footer.FooterSubcontent.link}
        label={data.msys.footer.data.attributes.Footer.FooterSocialLink.SocialIcon_Label}
        Social_icon_content={data.msys.footer.data.attributes.Footer.FooterSocialLink.SocialIcon}
      />
      <CustomWidget />
      <ScrollToTop />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// export const query = graphql`
// query {
//     msys {
//       header {
//         data {
//           attributes {
//             Header {
//               ServiceMenu {
//                 Title
//                 link {
//                   href
//                   label
//                 }
//                 sub_menus {
//                   data {
//                     attributes {
//                       ServiceSubMenu {
//                         link {
//                           href
//                           label
//                         }
//                       }
//                       link {
//                         href
//                         label
//                       }
//                     }
//                   }
//                 }
//               }
//               MenuItem {
//                 Title
//                 menu_links {
//                   data {
//                     attributes {
//                       Title
//                       link {
//                         href
//                         label
//                       }
//                     }
//                   }
//                 }
//               }
//               Button {
//                 Title
//                 Button {
//                   href
//                   label
//                 }
//               }
//             }
//             Footer {
//               footer_logo {
//                 data {
//                   attributes {
//                     url
//                   }
//                 }
//               }
//               footer_desc
//               logoSpl {
//                 data {
//                   attributes {
//                     url
//                   }
//                 }
//               }
//               FooterSubcontent {
//                 copyright
//                 link {
//                   href
//                   label
//                 }
//               }
//               FooterSocialLink {
//                 SocialIcon_Label
//                 SocialIcon {
//                   href
//                   Social_icon {
//                     data {
//                       attributes {
//                         url
//                       }
//                     }
//                   }
//                 }
//               }
//               menu_sections {
//                 data {
//                   attributes {
//                     Title
//                     link {
//                       href
//                       label
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }  
// `
