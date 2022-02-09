import React from 'react'

const SectionCustomerSpeak = (props) => {
    return (
        <>
            <section className="sectionCustomerSpeakDarkbg  tbPadd50">
            <div className="container containerModified">
              <div className="customerSpeakFullWidth text-center">
                <h2 className="h2_font_services bMargin25">
                  {props.title}
                </h2>
                <p>
                  {props.description}
                </p>
                <p>
                 <strong>{props.name}</strong>
                </p>
              </div>
            </div>
          </section>
        </>
    )
}

export default SectionCustomerSpeak
