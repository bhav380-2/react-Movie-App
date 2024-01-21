import React from "react";

import styles from './navbar.module.css';

export default class Navbar extends React.Component {

    render() {
        return (
            <>
                <div className={styles.nav}>
                    <div className={styles.title}>Movie-app</div>
                    <div className={styles.cartIconContainer}>
                        <img className={styles.cartIcon} alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
                        <span className={styles.cartCount}>0</span>
                    </div>
                </div>

            </>
        )
    }
}
