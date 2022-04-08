import ReceiptImg from '../assets/ReceiptImg.jpg'
import Navbar from './../components/Navbar'

const MintSuccess = () => {
	return (
		<div className="mint_success">
			<Navbar accessGranted />
			<div className="success">
				<div className="success_row">
					<div className="left_col">
						<h1>
							WELCOME
							<br />
							TO THE <br />
							BEASTHOOD
						</h1>

						<p>
							CONGRATULATIONS, YOU HAVE SECURED YOUR KID CALLED BEAST. <br />
							ON LAUNCH, YOUR RECEIPT WILL TRANSFORM INTO IT’S FINAL FORM
							<br />
							AND YOU WILL HAVE ACCESS TO ALL THE FUNCTIONS AND ARTWORK.
							<br />
							YOU CAN NOW VERIFY AND JOIN THE BEASTHOOD DISCORD CHANNEL.
						</p>

						<div className="buttons">
							<button>VIEW ON OPENSEAS</button>
							<button>JOIN DISCORD</button>
						</div>
					</div>
					<div className="right_col">
						<img src={ReceiptImg} alt="ReceiptImg" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MintSuccess
