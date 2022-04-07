import React from 'react';
import styles from './navBar.module.css';

import classNames from 'classnames';

import { Link } from "react-router-dom";

export const NavBar = (props) => {

    let [indicatorPosition, setIndicatorPosition] = React.useState([0,0]);

    let linksContainer = React.useRef();

    React.useEffect(() => { //ставим индикатор меню на раздел "Главынй" при mount
        let firstChild = linksContainer.current.firstChild;
        let positionAndWidth = [firstChild.offsetLeft, Math.round(firstChild.getBoundingClientRect().width)];
        setIndicatorPosition(positionAndWidth);
    },[]);

    function menuItemClick(e){
      let positionAndWidthOfMenuItem = [e.currentTarget.offsetLeft, e.currentTarget.getBoundingClientRect().width];
      setIndicatorPosition(positionAndWidthOfMenuItem);
    }

    return (
        <nav>
            <div className={styles.links}ref={linksContainer}>
                {props.namesAndPaths.map((nameAndPath)  => {
                    return <Link className={styles.link} onClick={menuItemClick} to={nameAndPath.path} key={nameAndPath.name}>{nameAndPath.name}</Link>
                })}
            </div>
            <div className={styles.indicatorContainer}>
                <div className={classNames(styles.indicator, {[styles.indicatorReady]: indicatorPosition[1] > 0})} style={{left: `${indicatorPosition[0]}px`, width: `${indicatorPosition[1]}px`}}>
                </div>
            </div>
        </nav>
    )
}