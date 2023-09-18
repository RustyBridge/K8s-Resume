import React from 'react'
import './styles.css'

const Header = () => {

	return (
		<div className="header p-card">
			<h3>GEORGIOS VASILOPOULOS</h3>
			<div className="communication">
				<a href={'https://www.linkedin.com/in/george-vasilopoulos-3757811ab/'} target="_blank" rel="noopener noreferrer">
					<p><strong>LinkedIn</strong></p>
				</a>
				<div className="divider"/>
				<a href = "mailto: giwrgos.vasilop@gmail.com">
					<p><strong>giwrgos.vasilop@gmail.com</strong></p>
				</a>
				<div className="divider"/>
				<p>(+30) 6979630894</p>
				<div className="divider"/>
				<p>Athens, Greece</p>
			</div>
			<div className="websites">
				<a href={'https://github.com/RustyBridge'} target="_blank" rel="noopener noreferrer">
					<p><strong>GitHub (Projects)</strong></p>
				</a>
				<p id="made-by">Military obligations fulfilled</p>
			</div>
		</div>
	)
}

export default Header
