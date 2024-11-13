import styles from './GameSelection.module.css';


const GameSelection = () => {
  	return (
    		<div className={styles.gameSelection}>
      			<img className={styles.groupIcon} alt="" src="Group.png" />
      			<div className={styles.welcomeMinions}>Welcome Minions</div>
      			<div className={styles.gameSelectionChild} />
      			<div className={styles.selectPlayer}>Select Player</div>
      			<img className={styles.minionsIcon} alt="" src="minions.png" />
      			<div className={styles.multiplayerButton}>
        				<div className={styles.stateLayer}>
          					<div className={styles.labelText}>Two Player</div>
        				</div>
      			</div>
      			<div className={styles.singlePlayerButton}>
        				<div className={styles.stateLayer}>
          					<div className={styles.labelText}>Single Player</div>
        				</div>
      			</div>
      			<div className={styles.gameHomeButton}>
        				<div className={styles.stateLayer}>
          					<div className={styles.labelText}>Home</div>
        				</div>
      			</div>
      			<div className={styles.gameProfileButton}>
        				<div className={styles.stateLayer}>
          					<div className={styles.labelText}>Profile</div>
        				</div>
      			</div>
    		</div>);
};

export default GameSelection;
