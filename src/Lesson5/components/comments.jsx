import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';


function Comments (props) {
    return(
        <>
            <Container sx={{
                borderRadius:3, 
                boxShadow: '0 0 30px rgba(0,0,0,0.3)', 
                padding: 5, 
                display: 'grid', 
                gridTemplateColumns: '70px 1fr 40px', 
                gridTemplateRows: '1fr 20px',
                columnGap: '20px',
                gridTemplateAreas: `"avatar text delete"
                "bottom bottom bottom"
                `

                }} disableGutters={true}>

                <Avatar sx={{width: 65, 
                            height: 65, 
                            bgcolor: '#000', 
                            marginRight: '20px',
                            gridArea: 'avatar'}}
                >СД</Avatar>

                <ListItemText primaryTypographyProps={{fontWeight: 700, fontSize:'24px'}} 
                                secondaryTypographyProps={{fontSize:'px'}} 
                                primary={props.fullName} 
                                secondary={props.text} 
                                sx={{gridArea: 'text'}}/>

                <Container sx={{width:'40px', gridArea: 'delete'}} disableGutters={true}>
                    <Tooltip title='Удалить'>
                        <IconButton>
                            <DeleteIcon /> 
                        </IconButton>
                    </Tooltip >
                </Container>
                
                <p style={{gridArea: 'bottom', fontFamily: 'Roboto', fontWeight: 400, color: '#c4c4c4'}}>{props.createdAt}</p>

            </Container>
        </>
    )
}

export default Comments;