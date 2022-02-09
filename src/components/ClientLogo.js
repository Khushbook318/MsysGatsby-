import React from "react"
import { Link } from "gatsby"
import "./style.css"

const ClientLogo = (props) =>{
  console.log(props)
  return (
    <>
      <section className="sectionClientLogo bg-eff6fa tbPadd50 lrPadd20">
        <div className="container-fluid">
          <div className="clientLogo_slick">
            {props.logoItem.map(list => (
              <div key={list.id} className="clinetLogoColumn">
                <div className="clientColumnInner d-flex h-100">
                  <div className="align-self-center w-100">
                    <div className="mx-auto">
                      <Link to={list.attributes.link.href}>
                        <img src={`http://localhost:1337${list.attributes.ClientLogo.data.attributes.url}`} alt="client-partner"/>
                      </Link>
                    </div>
                  </div>
                </div>  
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ClientLogo
