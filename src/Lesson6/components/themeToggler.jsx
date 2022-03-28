import React from 'react';

import './themeToggler.css';

import IconButton from '@mui/material/IconButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const ThemeToggler = () => {
    let [isNightTheme, invertIsNightTheme] = React.useState(false);

    function changeTheme(){
        invertIsNightTheme(!isNightTheme);
    }

    return(
        <>
            <IconButton onClick={changeTheme} className='theme-toggler' color='info' sx={{justifyContent: 'flex-start', overflow: 'hidden', maxWidth: '40px', height: '40px'}}>
                <div className="icons" style={isNightTheme ? {transform: 'translateX(-44px)'} : {transform: ''}}>
                    <WbSunnyIcon sx={{color: '#fff'}}></WbSunnyIcon>
                    <DarkModeIcon sx={{color: '#fff'}}></DarkModeIcon>
                </div>
            </IconButton>
        </>
    )
}