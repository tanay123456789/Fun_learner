import { Button, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import '../styles/Workbar.css'
import DialogYt from './DialogYt';

function Workbar({title, items}) {
  
    const [open, setOpen] = useState(false);
    const [url,setUrl] = useState("https://www.youtube.com/watch?v=ckiaNqOrG5U");
    const handleClose =()=>{
        setOpen(false)
    }
    return (
        <div className="workbar">
            <h2>{title}</h2>
            <p>
            {items.description}
            </p>
            <Typography variant='h5'>Videos</Typography>
            <ul>
                <li ><Button variant='text' color='primary' onClick={()=> setOpen(true)}>Video1</Button></li>
                <li><Button variant='text' color='primary'>Video2</Button></li>
            </ul>
            <Button variant='contained' color='primary'>Start Test</Button>
            <DialogYt open={open} onClose={handleClose} url={url}/>
        </div>
    )
}

export default Workbar
