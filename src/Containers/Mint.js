import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'

import ReceiptImage from '../assets/ReceiptImage.png'

import EthereumImg from '../assets/EthereumImg.png'
import RandomizeImg from '../assets/RandomizeImg.png'

import ConnectWalletModal from '../components/ConnectWalletModal'
import AccessDeniedModal from '../components/AccessDeniedModal'
import MintingErrorModal from '../components/MintingErrorModal'
import MintLoading from '../components/MintLoading'

const Mint = () => {
	const Traits = [
		{
			id: 0,
			title: 'HONEST',
			text: '“Being honest may not get you a lot of friends but it’ll always get you the right ones.” — John Lennon',
			value: '100',
		},
		{
			id: 1,
			title: 'SENSITIVE',
			text: '“To awaken human emotion is the highest level of art.” — Isadora Duncan',
			value: '201',
		},
		{
			id: 2,
			title: 'LOUD',
			text: '“Loud is a way of life” — Steve Adler',
			value: '159',
		},
		{
			id: 3,
			title: 'CHILL',
			text: '“Dont worry about a thing, every little thing is gonna be alright.” — Bob Marley',
			value: '119',
		},

		{
			id: 4,
			title: 'AWARE',
			text: 'To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else. — Dalai Lama XIV',
			value: '89',
		},
		{
			id: 5,
			title: 'AMBITIOUS',
			text: '“A man’s worth is no greater than his ambitions.” — Marcus Aurelius',
			value: '193',
		},
	]

	const navigate = useNavigate()

	const [progressWidth, setProgressWidth] = useState(true)

	const [showConnectModal, setShowConnectModal] = useState(true)
	const [accessGranted, setAccessGranted] = useState(false)
	const [accessDeniedModal, setAccessDeniedModal] = useState(false)
	const [mintingErrorModal, setMintingErrorModal] = useState(false)

	const [mintLoading, setMintLoading] = useState(false)

	useEffect(() => {
		if (showConnectModal || accessDeniedModal || mintingErrorModal || mintLoading) {
			window.scroll(0, 0)
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflowY = 'scroll'
		}
	}, [accessGranted, accessDeniedModal, showConnectModal, mintingErrorModal, mintLoading])

	const startMinting = () => {
		setMintLoading(true)

		setTimeout(() => {
			setMintLoading(false)

			navigate('/mint-success')
		}, 3000)
	}

	return (
		<div className="mint">
			<Navbar accessGranted={accessGranted} />

			<div className="content">
				<div className="container">
					<div className="row gx-lg-5 heading_row">
						<div className="col-lg-7 col-12 left">
							<h1>
								PLAYTIME
								<br />
								IS OVER
							</h1>
						</div>

						<div className="col-lg-5 col-12 right">
							<p>
								YOU WILL SOON BE A HOLDER OF A KID CALED BEAST. THERE ARE 20 BEASTHOODS, EACH 500 STRONG. SELECT 3 OPTIONS BELOW AND A
								RECEIPT WILL BE MINTED. THIS RECEIPT WILL TRANSFORM INTO YOUR BEAST ON LAUNCH.
							</p>

							<div className="price">
								<span>Price</span> <img src={EthereumImg} alt="EthereumImg.png" /> <span>O.2 ETH</span>
							</div>
						</div>
					</div>

					<div className="traits_row gx-lg-5 row-flex  row">
						<div className="col-lg-7 col-12 order-1 order-lg-1 left">
							<ul className="traits_nav">
								<li>WHAT DEFINES YOU?</li>
								<li>
									<img src={RandomizeImg} alt="RandomizeImg" /> RANDOMIZE
								</li>
							</ul>
						</div>

						<div className="col-lg-5 col-12 order-3 order-lg-2 right">
							<ul className="traits_nav">
								<li>RECEIPT</li>
							</ul>
						</div>

						<div className="left col-lg-7 order-2 order-lg-3 col-12 traits">
							<div className="trait_cards">
								{Traits.map((trait) => (
									<div className="trait_card" key={trait.id} onClick={() => setProgressWidth(`${(trait.value / 500) * 100}%`)}>
										<div className="title">{trait.title}</div>
										<div className="text">{trait.text}</div>
									</div>
								))}
							</div>
							<div className="remaining_card_bar">
								<div className="title">BRAINS</div>

								<div className="remaining">0 / 500 REMAINING</div>

								<div className="progress_overlay" style={{ width: progressWidth }}></div>
							</div>

							{/* <div className="buttons_row">
									<button onClick={() => setAccessDeniedModal(true)}>Access Denied</button>
									<button onClick={() => setMintingErrorModal(true)}>Minting Error</button>
								</div> */}
						</div>

						<div className="col-lg-5 col-12 order-4 order-lg-4  right recipient_img">
							<div className="img_container">
								<button onClick={startMinting}>Mint</button>

								<img src={ReceiptImage} alt="ReceiptImage" />
							</div>
						</div>
					</div>

					<div className="buttons_row">
						<button onClick={() => setAccessDeniedModal(true)}>Access Denied</button>
						<button onClick={() => setMintingErrorModal(true)}>Minting Error</button>
					</div>
				</div>
			</div>

			{showConnectModal && (
				<div className="page_overlay">
					<ConnectWalletModal setShowConnectModal={setShowConnectModal} setAccessGranted={setAccessGranted} />
				</div>
			)}

			{accessDeniedModal && (
				<div className="page_overlay">
					<AccessDeniedModal setAccessDeniedModal={setAccessDeniedModal} />
				</div>
			)}

			{mintingErrorModal && (
				<div className="page_overlay" onClick={() => setMintingErrorModal(false)}>
					<MintingErrorModal />
				</div>
			)}

			{mintLoading && (
				<div className="page_overlay">
					<MintLoading />
				</div>
			)}
		</div>
	)
}

export default Mint
