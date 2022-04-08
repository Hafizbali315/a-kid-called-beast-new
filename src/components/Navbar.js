import Logo from '../assets/Logo.png'
import MetamaskImg from '../assets/MetamaskImg.png'

const Navbar = ({ accessGranted }) => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>

			<div className="wallet">
				{accessGranted ? (
					<button className="metamask">
						0x123...4874
						<img src={MetamaskImg} alt="MetamaskImg" />
					</button>
				) : (
					<button className="connect">CONNECT WALLET</button>
				)}
			</div>
		</div>
	)
}

export default Navbar
