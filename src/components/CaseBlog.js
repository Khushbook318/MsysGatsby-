import React from "react"
import { Link } from "gatsby"

const CaseBlog = (props) => {
  return (
    <>
      <section className="sectionCaseBlog tbPadd50 ">
        <div className="container containerModified">
          <h2 className="semiBold blueTitle text-center h2_font_services bMargin25">
            {props.title}
          </h2>
          <div className="row">
            {props.blog.map(item =>(
              <div key={item.id} className="col-md-4 caseBlogCol">
              <Link to={item.link}>
              <div className="caseBlogColInner h-100">
                <h4 className="caseBlogColInnerTitle h3_24px  ">
                  {item.attributes.Title}
                </h4>
                <p>{item.attributes.Description}</p>
                <img className="downIcon" width="28" src="https://staging.msystechnologies.com/wp-content/uploads/2019/10/sdc-download-icon.png" alt="case_study"/>
              </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseBlog
