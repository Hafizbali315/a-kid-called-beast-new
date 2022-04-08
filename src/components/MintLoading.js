import ProgressImg from '../assets/Progress.gif'

const MintLoading = () => {
	return (
		<div className="modal_container">
			<div className="loading_modal">
				<div className="bg_img">
					<img src={ProgressImg} alt="ProgressImg" />
				</div>
				<h6>MINTING IN PROGRESS...</h6>
			</div>
		</div>
	)
}

export default MintLoading
