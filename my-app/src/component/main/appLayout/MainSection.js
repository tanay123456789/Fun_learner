import React, { useState,useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Roadmap from './Roadmap'
import Workbar from './Workbar'

function MainSection() {
    const [id,setId] = useState("6133dce40de9965fb0bdc4df")
    const [items,setItems] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false)
    const [title,setTitle] = useState("Why React ?")
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`http://localhost:5000/topics/${id}`)
        .then(res => res.json())
        .then(json => {
            setIsLoaded(true);
            setItems(json);
        })
    },[dispatch]);

console.log(items);
    return (
        <div style={{display:'flex',height:'70vh'}}>
            <Roadmap setTitle={setTitle} setId={setId} />
            <Workbar title={title} items={items} />
        </div>
    )
}

export default MainSection
