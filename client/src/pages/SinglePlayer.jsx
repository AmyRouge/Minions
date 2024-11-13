import styles from './SinglePlayer.module.css';


const SinglePlayer = () => {
  	return (
    		<div className={styles.singlePlayer}>
      			<img className={styles.groupIcon} alt="" src="Group.png" />
      			<div className={styles.singlePlayer1}>Single Player</div>
      			<img className={styles.singlePlayerChild} alt="" src="Rectangle 4.svg" />
      			<div className={styles.div}>1:50</div>
      			<div className={styles.progressBar}>
        				<div className={styles.track}>
          					<div className={styles.filled} />
        				</div>
      			</div>
      			<div className={styles.inputplayer2}>
        				<div className={styles.textField}>
          					<div className={styles.stateLayer}>
            						<div className={styles.content}>
              							<div className={styles.inputTextContainer}>
                								<div className={styles.inputText} />
              							</div>
            						</div>
            						<div className={styles.trailingIcon}>
              							<div className={styles.container}>
                								<div className={styles.stateLayer1}>
                  									<img className={styles.icon} alt="" src="Icon.svg" />
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.activeIndicator} />
      			</div>
      			<div className={styles.whoIsThe}>Who is the Minion :</div>
      			<div className={styles.singleplayerHomeButton}>
        				<div className={styles.stateLayer2}>
          					<div className={styles.labelText}>Home</div>
        				</div>
      			</div>
      			<div className={styles.singleplayerProfileButton}>
        				<div className={styles.stateLayer2}>
          					<div className={styles.labelText}>Profile</div>
        				</div>
      			</div>
    		</div>);
};

export default SinglePlayer;
