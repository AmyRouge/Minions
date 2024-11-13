import styles from './Menu.css';


const Menu = () => {
  	return (
    		<div className={styles.menu}>
      			<img className={styles.groupIcon} alt="" src="Group.png" />
      			<div className={styles.welcomeMinions}>Welcome Minions</div>
      			<div className={styles.menuChild} />
      			<div className={styles.profile}>profile</div>
      			<img className={styles.minionsIcon} alt="" src="minions.png" />
      			<div className={styles.progressBar}>
        				<div className={styles.track}>
          					<div className={styles.filled} />
        				</div>
      			</div>
      			<div className={styles.userName}>User Name</div>
      			<div className={styles.exp}>Exp</div>
      			<div className={styles.logoutButton}>
        				<div className={styles.stateLayer}>
          					<div className={styles.labelText}>Log Out</div>
        				</div>
      			</div>
      			<div className={styles.showusername}>
        				<div className={styles.label} />
        				<div className={styles.textarea}>
          					<div className={styles.value} />
          					<img className={styles.dragIcon} alt="" src="Drag.svg" />
        				</div>
      			</div>
      			<div className={styles.profileHomeButton}>
        				<div className={styles.stateLayer}>
          					<div className={styles.labelText}>Back</div>
        				</div>
      			</div>
    		</div>);
};

export default Menu;
