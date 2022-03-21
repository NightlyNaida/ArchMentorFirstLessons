export default (props) => {
    console.log(props);
    return (
        <div className="phrase-item">
            <p className="first">{props.first}</p>
            <p className="second">{props.second}</p>
        </div>
    )
}