import React from 'react'
import style from './appstyle.module.css'
import Details from './Details'
import Links from './Links'

const GlassConcept = () => {

    return (
        <div className={style.profile}>
            <h3>Soumik Laik</h3>
            <p>Subscribe to my channel</p>
            <Links />
            <Details/>
        </div>
    )
}

export default GlassConcept
