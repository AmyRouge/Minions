import styles from './Result.css';


const GameOver = () => {
  	return (
    		<div className={styles.gameOver}>
      			<img className={styles.groupIcon} alt="" src="Group.png" />
      			<div className={styles.gameOver1}>{`Game Over `}</div>
      			<div className={styles.gameOverChild} />
      			<div className={styles.textarea}>
        				<div className={styles.text} />
        				<img className={styles.dragIcon} alt="" src="Drag.svg" />
      			</div>
      			<div className={styles.profile}>profile</div>
      			<img className={styles.minionsIcon} alt="" src="minions.png" />
      			<div className={styles.progressBar}>
        				<div className={styles.track}>
          					<div className={styles.filled} />
        				</div>
      			</div>
      			<div className={styles.exp}>Exp</div>
      			<div className={styles.league}>League</div>
      			<div className={styles.logoutButton}>
        				<div className={styles.stateLayer}>
          					<div className={styles.labelText}>{`Play Again `}</div>
        				</div>
      			</div>
    		</div>);
};

export default GameOver;
