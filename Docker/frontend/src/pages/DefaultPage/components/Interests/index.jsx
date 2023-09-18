import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';

const Interests = () => {

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
			<Accordion multiple activeIndex={[0,1,2]}>
				<AccordionTab header={header('Sports')}>
					<div className="content">
						<p>Snowboard, Wind Surf</p>
					</div>
				</AccordionTab>
				<AccordionTab header={header('Others')}>
					<div className="content">
						<p>Home-Labs, PC Building, DIY LED lighting applications, Smart-Home applications, Games, Reddit, Literature, Art</p>
					</div>
				</AccordionTab>
				<AccordionTab header={header('Volunteering')}>
					<div className="content">
						<p>Scouts of Greece – 7 years of active participation</p>
						<p>(Raising awareness for wild life protection and the risk of human actions)</p>
					</div>
				</AccordionTab>
			</Accordion>
		</div>
	)
}

export default Interests
