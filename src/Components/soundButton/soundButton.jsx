import React,{useState, useRef} from 'react'
import soundOn from '../../assets/icons/Sound-ON-icon.svg'
import soundOff from '../../assets/icons/Sound-OFF-icon.svg'

const SoundButton = ({startMusic}) =>{
	const [musicOn, setMusicOn] = useState(false)
	const audioRef = useRef(null)
	
	const switchMusic = () =>{
		setMusicOn((play) => !play)
		if(audioRef.current){
			if(audioRef.current.paused){
				audioRef.current.play() 
			} 
			else{
				audioRef.current.pause()
			}
		}
	}
	const handleToPlay = () =>{
		if(musicOn && audioRef.current){
			audioRef.current.play()
		}
	}
	return(
		<div className='music-button'>
			<button onClick={switchMusic}><img src={musicOn ? soundOn : soundOff} alt={musicOn ? 'soundOn' : 'soundOff'} /></button>
			{<audio
			ref={audioRef}
			autoPlay
			loop
			src={startMusic}
			onCanPlayThrough={handleToPlay}/>} 
		</div>
	)
}

export default SoundButton