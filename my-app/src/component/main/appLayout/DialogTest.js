import { AppBar, Button, Dialog, FormControl, FormControlLabel, FormHelperText, FormLabel, IconButton, Paper, Radio, RadioGroup, Toolbar, Typography } from '@material-ui/core'
import React ,{ useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
function DialogTest(props) {
    const [correct,setCorrect] = useState(0);
    const [value1, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [helperText, setHelperText] = useState('Choose wisely');
    const [helperText2, setHelperText2] = useState('Choose wisely');
    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (value1 === 'best') {
          setHelperText('You got it!');
          setCorrect(correct => correct+1);
          setError(false);
        } else if (value1 === 'worst1' || 'worst2' || 'worst3') {
          setHelperText('Sorry, wrong answer!');
          setError(true);
        } else {
          setHelperText('Please select an option.');
          setError(true);
        }
      };
      const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
      };

      const handleSubmit2 = (event) => {
        event.preventDefault();
    
        if (value2 === 'best2') {
          setHelperText2('You got it!');
          setCorrect(correct => correct+1);
          setError2(false);
        } else if (value2 === 'worst4' || 'worst5' || 'worst6') {
          setHelperText2('Sorry, wrong answer!');
          setError2(true);
        } else {
          setHelperText2('Please select an option.');
          setError2(true);
        }
      };
      const handleRadioChange2 = (event) => {
        setValue2(event.target.value);
        setHelperText2(' ');
        setError2(false);
      };

      const submitTest = () =>{
          if (value1 == ''){
            setHelperText('Please select an option.');
            setError(true);
          }
          if (value2 == ''){
            setHelperText2('Please select an option.');
            setError2(true);
          }

          props.setMarks(correct);
          props.setTestOpen(false);
      }

    return (
        <Dialog onClose={props.onClose} aria-labelledby="simple-dialog-title" open={props.open} fullScreen >
            <AppBar >
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={props.onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant='h5'> {`${props.title}  - MCQ Test`} </Typography>
          </Toolbar>
        </AppBar>
        <div style={{marginTop:'10vh'}}>
        <Paper style={{width:'80vw',marginLeft:'10vw'}} elevation={3}>
        <form onSubmit={handleSubmit} style={{margin:'30px'}}>
      <FormControl component="fieldset" error={error} >
        <FormLabel component="legend">Which of the following are the advantages of React.js?</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value1} onChange={handleRadioChange}>
          <FormControlLabel value="worst3" control={<Radio />} label="React.js can increase the application's performance with Virtual DOM." />
          <FormControlLabel value="worst2" control={<Radio />} label="React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library." />
          <FormControlLabel value="worst1" control={<Radio />} label="React.js can render both on client and server side." />
          <FormControlLabel value="best" control={<Radio />} label="All of the above" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="text" color="primary">
          Check Answer
        </Button>
      </FormControl>
    </form>
        </Paper>


        <Paper style={{width:'80vw',marginLeft:'10vw'}} elevation={3}>
        <form onSubmit={handleSubmit2} style={{margin:'30px'}}>
      <FormControl component="fieldset" error={error2} >
        <FormLabel component="legend"> Which of the following command is used to install create-react-app?</FormLabel>
        <RadioGroup aria-label="quiz1" name="quiz1" value={value2} onChange={handleRadioChange2}>
          <FormControlLabel value="best2" control={<Radio />} label="npm install -g create-react-app" />
          <FormControlLabel value="worst5" control={<Radio />} label="npm install create-react-app" />
          <FormControlLabel value="worst4" control={<Radio />} label="npm install -f create-react-app" />
          <FormControlLabel value="worst6" control={<Radio />} label="install -g create-react-app" />
        </RadioGroup>
        <FormHelperText>{helperText2}</FormHelperText>
        <Button type="submit" variant="text" color="primary">
          Check Answer
        </Button>
      </FormControl>
    </form>
        </Paper>
        <Button variant='contained' onClick={submitTest} >Submit Test</Button>
        </div>
      </Dialog>
    )
}

export default DialogTest
