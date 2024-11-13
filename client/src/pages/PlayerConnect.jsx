import styles from './PlayerConnect.module.css';


const PlayerConnect = () => {
  	return (
    		<div className={styles.playerConnect}>
      			<img className={styles.groupIcon} alt="" src="Group.png" />
      			<div className={styles.twoPlayers}>Two Players</div>
      			<div className={styles.playerConnectChild} />
      			<div className={styles.showusername}>
        				<div className={styles.textarea}>
          					<div className={styles.value} />
          					<img className={styles.dragIcon} alt="" src="Drag.svg" />
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
      			<div className={styles.profile}>profile</div>
      			<img className={styles.minionsIcon} alt="" src="minions.png" />
      			<div className={styles.player1}>Player 1</div>
      			<div className={styles.player2}>player 2</div>
      			<div className={styles.playButton}>
        				<div className={styles.stateLayer2}>
          					<div className={styles.labelText}>Play</div>
        				</div>
      			</div>
      			<div className={styles.playerHomeButton}>
        				<div className={styles.stateLayer2}>
          					<div className={styles.labelText}>Home</div>
        				</div>
      			</div>
      			<div className={styles.playerProfileButton}>
        				<div className={styles.stateLayer2}>
          					<div className={styles.labelText}>Profile</div>
        				</div>
      			</div>
    		</div>);
};

export default PlayerConnect;
