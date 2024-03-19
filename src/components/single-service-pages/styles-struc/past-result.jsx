import React from 'react'

import "../styles-file/single-service.css"

export default function SingleService({pastPara1, pastPara2, pastSpan}) {
  return (
    <>
        <div className="past-result-card">
            <p className="past-result-card-para">
                {pastPara1}
                <span className='past-result-span'> {pastSpan} </span>
                {pastPara2}
            </p>
        </div>
    </>
  )
}
