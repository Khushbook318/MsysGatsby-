import React from "react"
// import { DatacenterServicesList } from "./DatacenterServicesList"
import { Link } from "gatsby"
import { makeSinglePost } from "../utils"

const ServicesList = (props) => {
  return (
    <>
      <section className="sectionHowWehelp tbPadd50" style={props.style}>
        <div className="container containerModified">
          <div className="row">
            <div className="col-md-12 howWeHelpLeftCol">
              <div className=" d-flex h-100 ">
                <div className="align-self-center w-100">
                  <div className="mx-auto ">
                    <div className="text-center divLimitedWidContent howWeHelpLeftColInner wow slideInLeft" data-wow-duration="1500">
                      <h2 className="h2Title blueTitle">{props.title}</h2>
                      <div className="divLimitedWidContent">
                        {props.desc}
                        <p></p>
                        <p>{props.description}</p>
                      </div>
                      {props.contentTitle}
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
                        {props.service.map(list => (
                          <div key={list.id} className="keyElement wow bounceInUp" data-wow-duration="1500" data-wow-delay="1.35s">
                            <div className="keyElementInner">
                              <div className="keyEleIcon">
                                <img width="40" src={`http://localhost:1337${list.attributes.Icon.data.attributes.url}`} alt={list.altImg}/>
                              </div>
                              <h3 id={list.id}>{list.attributes.Title}</h3>
                              <div className="keyElemntOverlay">
                                <div className="keyElemntOverlayInner">
                                  <p>{list.attributes.Description}</p>
                                  <Link to = {makeSinglePost(list.attributes)} className="btnRoundBorderdWhite">
                                    {list.attributes.link.label}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesList
