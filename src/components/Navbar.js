import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import MetamaskImg from '../assets/MetamaskImg.png'

const Navbar = ({ accessGranted }) => {
	return (
		<div className="container">
			<div className="navbar">
				<div className="logo">
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
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
		</div>
	)
}

export default Navbar
