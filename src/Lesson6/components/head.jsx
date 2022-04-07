import './head.css';


import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import {ThemeToggler} from './themeToggler';
import {NavBar} from './navBar';

let logoPath = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/521fed5a-e731-420e-98ca-290f0d0035fb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220402T153502Z&X-Amz-Expires=86400&X-Amz-Signature=e82417ac74bc12f58d7de04571f7ca125fb71b50e601eac078f482605d9db744&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject';
let menu = [{name: 'Главная', path: '/main'},
            {name: 'Футбол', path: '/football'},
            {name: 'Баскетбол', path: '/basketball'},
            {name: 'Хоккей', path: '/hockey'}]


export const Head = () => {
    return(
        <header>
            <div className="logo-container">
                <img className='logo-image' src={logoPath} alt="sports.ru" />
            </div>
            <NavBar namesAndPaths={menu}></NavBar>
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