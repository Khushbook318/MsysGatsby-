import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faLight } from '@fortawesome/free-solid-svg-icons'
// import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
const ScrollToTop = () =>{

  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(()=>{
      window.addEventListener('scroll', ()=>{
          if(window.scrollY>100){
            setScrollToTop(true)
          }
          else{
            setScrollToTop(false)
          }
      })
  },[])

  const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };
  return (
      <>
        {/* <div >
        </div> */}
        {/* <ScrollUpButton StopPosition={0} ContainerClassName="scrollToTopDiv" style={{background: "#e4e2e2" }}/> */}
        {scrollToTop && (
            <button className="scrollToTopDiv" onClick={scrollTop}>
                {/* <FontAwesomeIcon icon={faAngleUp} style={{}}/> */}
                <FontAwesomeIcon icon={faAngleUp}/>
                {/* <FontAwesomeIcon icon={faCoffee}/> */}
                {/* <FontAwesomeIcon icon="fa-regular fa-coffee" /> */}
                {/* ^ */}
            </button>
        )}
      </>
  )
};

export default ScrollToTop;
