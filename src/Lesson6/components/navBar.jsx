import React from 'react';
import './navBar.css';

import classNames from 'classnames';


export const NavBar = (props) => {
    let [indicatorPosition, setIndicatorPosition] = React.useState([0,0]);

    let ul = React.useRef();

    React.useEffect(() => {
        let firstChild = ul.current.firstChild;
        let positionAndWidth = [firstChild.offsetLeft, Math.round(firstChild.getBoundingClientRect().width)];
        setIndicatorPosition(positionAndWidth);
    },[]);

    function menuItemClick(e){
      let positionAndWidth = [e.currentTarget.offsetLeft, e.currentTarget.getBoundingClientRect().width];
      setIndicatorPosition(positionAndWidth);
    }

    return (
        <nav>
            <ul ref={ul}>
                {props.items.map((item)  => {
                    return <li onClick={menuItemClick} key={item}>{item}</li>
                })}
            </ul>
            <div className="indicator-container">
                <div className={classNames('indicator', {'indicator-ready': indicatorPosition[1] > 0})} style={{left: `${indicatorPosition[0]}px`, width: `${indicatorPosition[1]}px`}}>
                </div>
            </div>
        </nav>
    )
}