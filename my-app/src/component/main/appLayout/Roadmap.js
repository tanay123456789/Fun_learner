import React from 'react'
import Topics from '../index/Topics'
import '../styles/Roadmap.css'
function Roadmap(props) {
    return (
        <div className="roadmap">
            <h2>Roadmap</h2>
            <Topics setTitle={props.setTitle} setId={props.setId}/>
        </div>
    )
}

export default Roadmap
