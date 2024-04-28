import React, {useState} from 'react'
import logo from "../assets/images/FirstPageAlienLOGO.svg"
import MainButton  from "./mainButton/mainButton"

export default function Root() {
	const nameBtn = 'Play';
	return (
		<>
			<div className="container sky-background">
				<div className="content">
					<img className="logo" src={logo} alt="Logo" />
				</div>
				<MainButton name={nameBtn} />
			</div>
		</>
	)
}