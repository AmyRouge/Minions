// src/pages/Menu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Menu.css';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.menu}>
      <img className={styles.groupIcon} alt="" src="/assets/images/Group.png" />
      <div className={styles.welcomeMinions}>Welcome Minions</div>
      <div className={styles.profile}>Profile</div>
      <img className={styles.minionsIcon} alt="" src="/assets/images/minions.png" />
      
      <div className={styles.progressBar}>
        <div className={styles.track}>
          <div className={styles.filled} />
        </div>
      </div>
      
      <div className={styles.userName}>User Name</div>
      <div className={styles.exp}>Exp</div>
      
      <button className={styles.logoutButton} onClick={() => navigate('/login')}>
        Log Out
      </button>
      
      <button className={styles.profileHomeButton} onClick={() => navigate('/')}>
        Back
      </button>
    </div>
  );
};

export default Menu;
