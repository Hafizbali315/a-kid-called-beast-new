import MetamaskImg from '../assets/MetamaskImg.png'

const AccessDeniedModal = ({ setAccessDeniedModal }) => {
	return (
		<div className="modal_container">
			<div className="access_denied_modal">
				<h6>ACCESS DENIED</h6>
				<p>
					UNFORTUNATELY YOUR WALLET IS NOT WHITELISTED. YOU CAN EITHER APPLY FOR AN INVITATION or SEEK A WHITELIST POSITION THROUGH OUR
					COMMUNITY.
				</p>

				<hr />

				<button>
					0x17710B2A4d0C5af....dFab <img src={MetamaskImg} alt="MetamaskImg" />{' '}
				</button>

				<div className="buttons">
					<button onClick={() => setAccessDeniedModal(false)}>Back Home</button>
					<button onClick={() => setAccessDeniedModal(false)}>Discord</button>
				</div>
			</div>
		</div>
	)
}

export default AccessDeniedModal
