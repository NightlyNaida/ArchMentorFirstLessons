import './head.css';


import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import {ThemeToggler} from './themeToggler';
import {NavBar} from './navBar';

export const Head = () => {
    return(
        <header>
            <div className="logo-container">
                <img className='logo-image' src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/521fed5a-e731-420e-98ca-290f0d0035fb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220327T153122Z&X-Amz-Expires=86400&X-Amz-Signature=339d869202f12d1b2a56e800ce74833956e721d2406582a40ad2da6286e9e3d5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" alt="sports.ru" />
            </div>
            <NavBar items={['Главаня', 'Футбол', 'Хоккей', 'Баскетбол']}></NavBar>
            <div className="header-tools">
                    <IconButton color='info' sx={{padding: '10px 10px', borderRadius: '10px'}}>
                        <SearchIcon sx={{color: '#fff', margin:0}}></SearchIcon>
                    </IconButton>
                    <ThemeToggler></ThemeToggler>
                    <IconButton color='info' sx={{padding: '10px 10px', borderRadius: '10px'}}>
                        <PersonIcon sx={{color: '#fff', margin:0}}></PersonIcon>
                    </IconButton>
            </div>
        </header>
    )
} 