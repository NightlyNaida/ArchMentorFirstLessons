import {useParams} from "react-router-dom";


export const Article = (props) => {
    let params = useParams();
    return (
        <>
            <h1>{params.id}</h1>
        </>
    )
}