// src/pages/Home.js
import React from 'react';
import styles from './Home.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.groupIcon} alt="" src="/assets/images/Group.png" />
      <div className={styles.welcomeMinions}>Welcome Minions</div>
      <img
        className={styles.minionsIcon}
        alt=""
        src="/assets/images/minions.png"
      />
      <p className={styles.illuminationUniversalAndG}>
        Illumination, Universal, and Gameloft bring you Minion Rush, an endless
        running game that can be enjoyed offline, anytime! Run through lots of
        cool locations, dodging devious traps, battling vile villains, and
        collecting loads of bright, beautiful Bananas!
      </p>
      <button className={styles.homeSignupButton}>
        Sign Up
      </button>
      <button className={styles.homeGuestButton}>
        Guest
      </button>
    </div>
  );
};

export default Home;
