import styles from './Profile.module.css';


const Profile = () => {
  	return (
    		<div className={styles.profile}>
      			<img className={styles.groupIcon} alt="" src="Group.png" />
      			<div className={styles.welcomeMinions}>Welcome Minions</div>
      			<div className={styles.profileChild} />
      			<div className={styles.conpasswordSignup}>
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
      			<div className={styles.passwordSignup}>
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
      			<div className={styles.emailSignup}>
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
      			<div className={styles.usernameSignup}>
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
      			<div className={styles.name}> Name</div>
      			<div className={styles.league}>League</div>
      			<div className={styles.exp}>Exp</div>
      			<div className={styles.userId}>User Id</div>
      			<img className={styles.minionsIcon} alt="" src="minions.png" />
      			<div className={styles.profile1}>Profile</div>
      			<div className={styles.profile1Home}>
        				<div className={styles.stateLayer8}>
          					<div className={styles.labelText}>Home</div>
        				</div>
      			</div>
    		</div>);
};

export default Profile;
