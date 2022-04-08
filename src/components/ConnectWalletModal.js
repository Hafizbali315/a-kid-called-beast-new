const ConnectWalletModal = ({ setShowConnectModal, setAccessGranted }) => {
	return (
		<div className="modal_container">
			<div className="connect_wallet_modal">
				<h6>MINT ENGINE ACCESS</h6>
				<p>
					TO SECURE A POSITION IN THE BEASTHOOD, YOUR WALLET MUST BE WHITELISTED. EITHER YOU MUST BE GRANTED AN INVITATION OR HAVE
					SUCCESSFULLY AQUIRED A WHITELIST POSITION THROUGH OUR COMMUNITY.
				</p>
				<p> IF YOUR WALLET IS NOT WHITELISTED, THE ENGINE SHALL REMAIN LOCKED.</p>

				<hr />

				<button
					onClick={() => {
						setShowConnectModal(false)
						setAccessGranted(true)
					}}
				>
					Connect Wallet
				</button>
				<a href="#dont-wallet">Don’t have a wallet?</a>
			</div>
		</div>
	)
}

export default ConnectWalletModal
