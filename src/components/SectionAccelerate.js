import React from "react"


const SectionAccelerate = (props) => {
  return (
    <>
      <section className="sectionAccelerate tbPadd50">
        <div className="containerModified container">
          <h2 className="blueTitle text-center h2_font_services mediumFont bMargin25">
            {props.title}
          </h2>
          <div className="row">
            {props.accelerate.map(list=>(
            <div key={list.id} className="col-md-3 col-sm-6 accelerateCol">
            <div className="accelerateColInner">
              <img src= {`http://localhost:1337${list.attributes.AccelerateLogo.data.attributes.url}`} alt="logo-image" />
              <p>
                {list.attributes.Description}
              </p>{" "}
            </div>
          </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionAccelerate
