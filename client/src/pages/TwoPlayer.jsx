import styles from './TwoPlayer.module.css';


const TwoPlayer = () => {
  	return (
    		<div className={styles.twoPlayer}>
      			<img className={styles.groupIcon} alt="" src="Group.png" />
      			<div className={styles.twoPlayer1}>Two Player</div>
      			<img className={styles.twoPlayerChild} alt="" src="Rectangle 4.svg" />
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
      			<img className={styles.twoPlayerItem} alt="" src="Rectangle 5.svg" />
      			<div className={styles.inputplayer21}>
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
      			<div className={styles.whoIsThe1}>Who is the Minion :</div>
      			<div className={styles.homeButton}>
        				<div className={styles.stateLayer4}>
          					<div className={styles.labelText}>Home</div>
        				</div>
      			</div>
      			<div className={styles.profileButton}>
        				<div className={styles.stateLayer4}>
          					<div className={styles.labelText}>Profile</div>
        				</div>
      			</div>
    		</div>);
};

export default TwoPlayer;
