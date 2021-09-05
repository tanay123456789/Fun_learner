import { AppBar, Dialog, DialogTitle, IconButton, Toolbar } from '@material-ui/core'
import React from 'react'
import YouTube from 'react-youtube';
import CloseIcon from '@material-ui/icons/Close'
var getYouTubeID = require('get-youtube-id');

function DialogYt(props) {
    const id = getYouTubeID(props.url);
    const opts = {
        height: '600',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const _onReady=(event) =>{
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      };
      
    return (
        <Dialog onClose={props.onClose} aria-labelledby="simple-dialog-title" open={props.open} fullScreen >
            <AppBar >
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={{marginTop:'10vh'}}>
        <YouTube videoId={id} opts={opts} onReady={_onReady} />
        </div>
      </Dialog>
    )
    
}

export default DialogYt
