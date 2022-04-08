import { useEffect, useState } from 'react'
import EthereumImg from '../assets/EthereumImg.png'
import RandomizeImg from '../assets/RandomizeImg.png'
import ReceiptImg from '../assets/ReceiptImg.jpg'
import ConnectWalletModal from '../components/ConnectWalletModal'
import Navbar from './../components/Navbar'

const Mint = () => {
	const Traits = [
		{
			id: 0,
			title: 'HONEST',
			text: '“Being honest may not get you a lot of friends but it’ll always get you the right ones.” — John Lennon',
		},
		{
			id: 1,
			title: 'SENSITIVE',
			text: '“To awaken human emotion is the highest level of art.” — Isadora Duncan',
		},
		{
			id: 2,
			title: 'LOUD',
			text: '“Loud is a way of life” — Steve Adler',
		},
		{
			id: 3,
			title: 'CHILL',
			text: '“Dont worry about a thing, every little thing is gonna be alright.” — Bob Marley',
		},
		{
			id: 4,
			title: 'AWARE',
			text: 'To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else. — Dalai Lama XIV',
		},
		{
			id: 5,
			title: 'AMBITIOUS',
			text: '“A man’s worth is no greater than his ambitions.” — Marcus Aurelius',
		},
	]

	const [showConnectModal, setShowConnectModal] = useState(true)
	const [accessGranted, setAccessGranted] = useState(false)

	useEffect(() => {
		console.log(accessGranted)
	}, [accessGranted])

	return (
		<div className="mint">
			<Navbar accessGranted={accessGranted} />

			<div className="content_container">
				<div className="row heading">
					<div className="col_left">
						<h1>
							PLAYTIME
							<br />
							IS OVER
						</h1>
					</div>
					<div className="col_right">
						<p>
							YOU WILL SOON BE A HOLDER OF A KID CALED BEAST. THERE ARE 20 BEASTHOODS, EACH 500 STRONG. SELECT 3 OPTIONS BELOW AND A RECEIPT
							WILL BE MINTED. THIS RECEIPT WILL TRANSFORM INTO YOUR BEAST ON LAUNCH.
						</p>

						<div className="price">
							<span>Price</span> <img src={EthereumImg} alt="EthereumImg.png" /> <span>O.2 ETH</span>
						</div>
					</div>
				</div>

				<div className="row traits_row">
					<div className="col_left">
						<ul className="nav">
							<li>WHAT DEFINES YOU?</li>
							<li>
								<img src={RandomizeImg} alt="RandomizeImg" /> RANDOMIZE
							</li>
						</ul>

						<div className="">
							<div className="trait_cards">
								{Traits.map((trait) => (
									<div className="card" key={trait.id}>
										<div className="title">{trait.title}</div>
										<div className="text">{trait.text}</div>
									</div>
								))}
							</div>
							<div className="remaining_card_bar">
								<div className="title">BRAINS</div>

								<div className="remaining">0 / 500 REMAINING</div>
							</div>
						</div>
					</div>

					<div className="col_right">
						<ul className="nav">
							<li>RECEIPT</li>
						</ul>

						<div className="receipt_card">
							<img src={ReceiptImg} alt="ReceiptImg" />

							<button>Mint</button>
						</div>
					</div>
				</div>
			</div>

			{showConnectModal && (
				<div className="page_overlay">
					<ConnectWalletModal setShowConnectModal={setShowConnectModal} setAccessGranted={setAccessGranted} />
				</div>
			)}
		</div>
	)
}

export default Mint
