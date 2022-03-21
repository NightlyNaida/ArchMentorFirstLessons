import dateOptions from './localDateOptions';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Comments from './components/comments';



function App () {
    return(
        <div>
            <CssBaseline>
                <Container sx={{maxWidth: 20, padding: 4}}>
                    <Comments fullName="Серёжа Давыдов" email="govna@poel.com" createdAt={new Date(Date.now()).toLocaleDateString('ru', dateOptions)} text="ты пидор ты пидор ты пидор ты пидор ты пидор ты пидор ты пидор ты пидор ты пидор ты пидор ты пидор "></Comments>
                </Container>
            </CssBaseline>
        </div>
    )
}

export default App;