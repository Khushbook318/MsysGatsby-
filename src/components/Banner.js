import { Link } from 'gatsby'
import React from 'react'

const Banner = (props) => {
    return (
        <>
	<section className="servicesLandingHero sectionHomeHero tbPadd100 colorFFF" style={{backgroundImage: `url(http://localhost:1337${props.bgImage})`}} >
		    <div className="container containerModified">
			    <div className="bannerContentMinHeight d-flex h-100 ">
				    <div className="align-self-center w-100">
					    <div className="homeHeroInner mx-auto">
						    <h1 className="homeHerotitle">{props.title}</h1>
							<p className="homeHeroText">{props.desc} </p>	
							<Link to={props.link} className="scrollCTA homeHeroCTA blueRoundedBtn">{props.label}</Link>		
					    </div>			
				    </div>
			    </div>
		    </div>
	    </section>
        </>
    )
}

export default Banner
