import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import './styles.css'

const Education = () => {

	const header = (name, date, place) => {
		return (
			<div className="accordion-header">
				<p>{name}</p>
				<div className="right-section">
					<p>{date}</p>
					<p id="place">{place}</p>
				</div>
			</div>
		)
	}

	return (
		<div className="work-experience p-card">
			<Accordion multiple activeIndex={[0]}>
				<AccordionTab header={header('University of West Attica', '2020', 'Athens, Greece')}>
					<div className="content">
						<p>BS, Biomedical Engineering</p>
						{/* <p> - Thesis subject: “Comparison of the efficacy between different radiotherapy techniques in nasopharyngeal carcinoma”</p> */}
					</div>
				</AccordionTab>
			</Accordion>
		</div>
	)
}

export default Education
