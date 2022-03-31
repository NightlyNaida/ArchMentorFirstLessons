import {MainPage} from '../pages/mainPage';
import {Article} from '../pages/article'  

export const Main = () => {
    let pn = window.location.pathname

    return(
        <>
        {(pn === '/main' || pn === '/') && <MainPage></MainPage>}
        {pn.match(/\/page/) && <Article idArticle={pn.slice(5 ,pn.length-1)}></Article>}
        </>
    )
}