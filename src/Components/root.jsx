import logo from "../assets/images/FirstPageAlienLOGO.svg"
import '../assets/images.css'
export default function Root (){
	return (
		<>
		<div className="container sky-background">
			<div className="content">
				<img className="logo" src= {logo} alt="Logo" />
			</div>
			<div className="btn__box">
				<div className="btn__layer-1">
					<div className="btn__layer-2">
						<div className="btn__layer-3">
			  				<button type='button' className='btn'>Start</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}