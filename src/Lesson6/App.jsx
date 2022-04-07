import './App.css';
import React from 'react';

import {Head} from './components/head';
import {MainPage} from './pages/mainPage';
import {Article} from './pages/article'

import {Routes, Route} from "react-router-dom";


 
function App () {
    
    return(
        <>
            <Head></Head>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/main' element={<MainPage/>}></Route>
                <Route path='/article/:id' element={<Article/>}></Route>
                <Route path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                            </main>
                        }></Route>
            </Routes>
        </>
    )
}

export default App;
