import {MainPage} from '../pages/mainPage' 

export const Main = () => {
    let pn = window.location.pathname

    return(
        <>
        {pn === '/main' && <MainPage></MainPage>}
        </>
    )
}