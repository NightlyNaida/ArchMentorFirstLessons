import './App.css';

import React from 'react';
import {CssBaseline, Box} from '@mui/material';

import Comments from './components/comments';
import NewCommentForm from './components/newCommentForm';


function App () {
    
    let [comments, setComments] = React.useState([]);

    function addNewComment(comment) {
        setComments([...comments, comment]);         
    }

    React.useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    },[comments])

    React.useEffect(() => {
      let comments = localStorage.getItem('comments');
      console.log(comments);
    },[])

    
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{  
                    display:'flex', 
                    flexDirection: 'column', 
                    gap: '60px',
                    width: '800px', 
                    maxWidth: '800px', 
                    padding: 4}}>
                    <Box sx={{
                        display:'flex', 
                        flexDirection: 'column', 
                        gap: '30px', 
                    }}>
                    {comments.map((value) => {return <Comments key={value.date} fullName={value.name} email={value.name} createdAt={value.date} text={value.comment}></Comments>})}
                    </Box>
                    <NewCommentForm onConfirmComment={addNewComment}></NewCommentForm>
                </Box>
        </div>
    )
}

export default App;
