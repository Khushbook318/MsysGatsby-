import React from "react"
// import { Company, Resources, Services } from "./Footer_list"
import { Link } from "gatsby"
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => {
  return (
    <>
      <footer className="footer mainFooter" role="contentinfo">
        <div className="container containerModified">
          <div className="row">
            <div className="col-lg-4 mainFooterLeftCol">
              <div className="mainFooterLeftColInner">
                <div className="mainFooterLogo">
                  <img src={`http://localhost:1337${props.logoImage}`} />
                </div>
                <div className="footerAboutInfo">
                  <p>{props.description}</p>
                  <div class="logoSpl" style={{'padding': '45px 0 0'}}>
                    <img style={{'width': '175'}} src={`http://localhost:1337${props.logoSplImage}`} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mainFooterRgihtCol">
              <div className="row">
                {props.contents.map((list) => (
                  <div key={list.id} className="col-md-4" >
                    <div className="widget_nav_menu">
                      <h3>{list.attributes.Title}</h3>
                      <ul className="menu">
                        {list.attributes.link.map(post => (
                          <li key={post.id}>
                            <Link to={post.href}>{post.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row rowSubFooter">
            <div className="col-lg-7 col-md-12 mainSubFooterColLeft">
              <div className=" d-flex h-100 ">
                <div className="align-self-center w-100">
                  <p className="copyright">
                    © {(new Date().getFullYear())} {props.copyright}
                  </p>
                  <ul className="ulSubFooterLink">
                    {props.Subcontent.map(list=>(
                      <li key={list.id}>
                        <Link to={list.href} target="_blank">
                          {list.label}
                        </Link>
                      </li>
                    ))}
                  </ul>  
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-5 footerSocialIconsDiv mainSubFooterColRight">
              <h6>{props.label}</h6>
              <ul className="socialLinksFooter">
                {props.Social_icon_content.map(list=>(
                  <li key={list.id}>
                  <Link
                    to={list.href}
                    className="linkedin"
                    title="LinkedIn"
                    target="_blank"
                  >
                    <div className="animation-wrap">
                      <div className="anim-icon-linkedin width32 cpointer">
                        <img
                          src={`http://localhost:1337${list.Social_icon.data.attributes.url}`}
                          style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            maxWidth: "18px",
                            paddingTop: "7px",
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
