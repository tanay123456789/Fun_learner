import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Topics = ({setTitle,setId}) =>  {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Where to Start</Typography>
        </AccordionSummary>
        <AccordionDetails onClick={()=> {
          setTitle("Why React ?");
          setId("6133dce40de9965fb0bdc4df");}}>
          <Typography>
            Why React?
          </Typography>
        </AccordionDetails>
        <AccordionDetails onClick={()=> {
          setTitle("What is React?");
          setId("6133de990de9965fb0bdc4e2");
          }} >
          <Typography>
            What is React?
          </Typography>
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("Getting Started")} >
          <Typography>
            Getting Started
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Basics of React</Typography>
        </AccordionSummary>
        <AccordionDetails onClick={()=> setTitle("Hello World in React")}>
          <Typography>
           Hello World
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("Intro to JSX")}>
          <Typography>
            Intro to JSX
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("Element and Components")}>
          <Typography>
            Element and Components
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("State and Lifecycle")}>
          <Typography>
            State and Lifecycle
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Advanced Concepts</Typography>
        </AccordionSummary>
        <AccordionDetails onClick={()=> setTitle("Forwarding Refs")}>
          <Typography>
            Forwarding Refs
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("Fragments")}>
          <Typography>
            Fragments
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("Higher order Components")}>
          <Typography>
            Higher order Components
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("Render props")}>
          <Typography>
            Render props
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("Web Components")}>
          <Typography>
            Web Components
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails onClick={()=> setTitle("Intro to Hooks")}>
          <Typography>
            Intro to Hooks
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("State Hooks")}>
          <Typography>
            State Hooks
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("Effect Hook")}>
          <Typography>
            Effect Hook
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("Rules Of Hooks")}>
          <Typography>
            Rules Of Hooks
          </Typography>
          
        </AccordionDetails>
        <AccordionDetails onClick={()=> setTitle("BUilding your own Hook")}>
          <Typography>
            Building your own Hook
          </Typography>
          
        </AccordionDetails>
        
      </Accordion>
      
     
    </div>
  );
}

export default Topics;