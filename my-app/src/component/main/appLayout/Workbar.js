import { Button, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import '../styles/Workbar.css'
import DialogTest from './DialogTest';
import DialogYt from './DialogYt';

function Workbar({title, desc, videos}) {
    const [marks,setMarks] = useState(0);
    const [testOpen,setTestOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [url,setUrl] = useState("https://www.youtube.com/watch?v=ckiaNqOrG5U");
    const handleClose =()=>{
        setOpen(false)
        setTestOpen(false)
        setMarks(0)
    }
    return (
        <div className="workbar">
            <Typography variant='h4' >{title}</Typography>
            
            <Typography variant='body1' style={{margin:'20px 5px'}}>{desc}</Typography>
           
            <Typography variant='h5'>Videos</Typography>
            <ul>
                <li ><Button variant='text' color='primary' onClick={()=> {
                    setOpen(true);
                    setUrl(videos[0]);
                }}>Video1</Button></li>
                <li><Button variant='text' color='primary'  onClick={()=> {
                    setOpen(true);
                    setUrl(videos[1]);
                }}>Video2</Button></li>
            </ul>
            <Button variant='contained' color='primary' onClick={()=>{
                setTestOpen(true);
            }}>Start Test</Button>
            <DialogYt open={open} onClose={handleClose} url={url}/>

            <DialogTest open={testOpen} onClose={handleClose} title={title} setMarks={setMarks} setTestOpen={setTestOpen}/>

            <Typography> Score = {(marks/2)*100} %</Typography>
        </div>
    )
}

export default Workbar
