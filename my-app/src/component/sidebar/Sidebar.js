import React from 'react'
import { Button, Typography } from '@material-ui/core'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <Typography variant='h2'>Dashboard</Typography>
            <div className="item">
                <Typography variant='h5'>React</Typography>
            </div>
            <div className="item">
                <Typography variant='h5'>Python</Typography>
            </div>
            <div className="item">
                <Typography variant='h5'>UI/UX</Typography>
            </div>
            <div className="item">
                <Typography variant='h5'>Android Development</Typography>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
            <Button variant='outlined' color='primary'>+</Button>

            </div>
        </div>
    )
}

export default Sidebar
