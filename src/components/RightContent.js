import React from 'react'
import Content from './Content'
import style from './appstyle.module.css'

const RightContent = () => {
    return (
        <div className={style.foright}>
            <div>
                <h1>Search Here</h1>
                <input type="text"></input>
            </div>
            <Content />
        </div>
    )
}

export default RightContent
