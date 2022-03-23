import React from 'react';
import dateOptions from '../localDateOptions';
import {TextField, Box, Button} from '@mui/material';

function NewCommentForm (props) {

    let [name, setName] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [comment, setcomment] = React.useState('');

    
    let [emailError, setEmailError] = React.useState(false);
    let [textOfHelper, setTextOfHelper] = React.useState('');

    function ValidateEmail(){
	    var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	    if(email.match(mailformat)){ 
            setEmailError(false);
            setTextOfHelper('');
        } 
        else {
            setEmailError(true);
            setTextOfHelper('Некорректный email')
        };
    }

    function emailInputHandler(e) {
        setEmail(e.target.value);
        setEmailError(false);
        setTextOfHelper('');
    }

    function nameInputHandler(e){
        setName(e.target.value);
    }

    function commentInputHandler(e){
        setcomment(e.target.value)
    }

    return(
        <Box sx={{
            borderRadius:3, 
            boxShadow: '0 0 30px rgba(0,0,0,0.3)', 
            padding: 5,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '30px, 30px, 1fr', 
            gridTemplateAreas: `"title title"
            "name email"
            "text text"
            "buttonContainer buttonContainer"
            `,
            rowGap: '25px',
            columnGap: '15px' 
        }}>
            <h2 sx={{gridArea: 'title'}}>Комментарий</h2>
            <TextField onChange={nameInputHandler} value={name} label="Имя" variant="outlined" sx={{gridArea: 'name'}}></TextField>
            <TextField onBlur={() => {ValidateEmail()}} 
                       error={emailError}
                       helperText={textOfHelper}
                       value={email} 
                       onChange={emailInputHandler} 
                       type="email" 
                       label="Электропочта" 
                       variant="outlined" 
                       sx={{gridArea: 'email'}}></TextField>
            <TextField onChange={commentInputHandler} value={comment} label="Комментарий" variant="outlined" multiline maxRows={10} sx={{gridArea: 'text'}}></TextField>
            <Box sx={{gridArea: 'buttonContainer', display: 'flex', justifyContent: 'center'}}>
                <Button onClick={() => {props.onConfirmComment({email: email, name: name, comment: comment, date: new Date(Date.now()).toLocaleDateString('ru', dateOptions)})}} variant="contained">Отправить</Button>
            </Box>
        </Box>
    )
}

export default NewCommentForm;