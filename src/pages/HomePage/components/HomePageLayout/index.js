import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../../routes/routeNames.js';
import style from './style.module.scss'

const HomePageLayout = () => {
    return (
        <section className={style.body}>
        <div className={style.menuButt}>
            {Object.entries(ROUTES).map(([routeName, path]) => (
                <Link to={path} key={path}>
                    <button className={style.button}>{routeName}</button>
                </Link>
            ))}
        </div>
{        <div className={style.infoBlock}>
            This is HOME_PAGE 
            <p>To go to COUNTER_PAGE, click menu)</p>
        </div>}
        </section>
    );
};

export default HomePageLayout;