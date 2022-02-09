import React from 'react'
// import { TitleContent } from './FintechServiceList'

const FintectContentTitle = (props) => {
    return (
        <>
           <div className="row row-eq-height justify-content-center showCaseTiles">
                {props.contents.map(post => (
                    <div key={post.id} className="showCaseTilesColumn">
                        <div className="showTileInner">
                            <div className="showTileContent">{post.attributes.SubTitle}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FintectContentTitle
