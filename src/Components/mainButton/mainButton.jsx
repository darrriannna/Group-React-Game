
export default function MainButton({name}){
	const btnClass = 'btn'
	let btnName = ''
	let btnBoxName = ''

// you can write in name of button 'Start', 'Yes', 'Play' and it will change the style automatically for this word
switch (name) {
	case 'Start':
		btnName = 'start'
		break;
	case 'Yes':
		btnName = 'yes'
		btnBoxName = 'yes'
		break;
	default:
		btnName = ''	
	}	

	return (
		<>
			<div className={`btn__box ${btnBoxName}`}>
				<div className="btn__layer-1">
					<div className="btn__layer-2">
						<div className="btn__layer-3">
							<button type='button' className={`${btnClass} ${btnName}`} >{name}</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}