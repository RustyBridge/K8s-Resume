import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';
import './styles.css'

const WorkExperience = () => {

	const header = (name, date, place, title) => {
		return (
			<div className="accordion-header">
				<div className="section">
					<p>{name}</p>
					<p id="place">{title}</p>
				</div>
				<div className="section">
					<p>{date}</p>
					<p id="place">{place}</p>
				</div>
			</div>
		)
	}

	return (
		<div className="work-experience p-card">
			<Accordion multiple activeIndex={[0]}>
				<AccordionTab header={header('Trafigura Maritime Ventures LTD', 'Oct. 2020 – Present', 'Athens, Greece', 'Information Technology Support Engineer')}>
					<div className="content">
						<p> - Promoted in recognition of deep-diving, resolving/contributing and sharing information on more complex global issues</p>
						<div className="same-line">
							<p id="title">
								Junior Desktop Support Engineer
							</p>
							<p>Oct. 2020 – Dec. 2022</p>
							</div>
						<p> - Installed, configured and maintained laptops, desktops, phones (VoIP and mobile), peripherals, printers, meeting room and presentation equipment</p>
						<p> - Diagnosed and resolved day to day issues</p>
						<p> - Collaborated with a global operations team to investigate and resolve complex cases</p>
						<p> - Monitored incidents handled by different teams and intervened to offer information and ensure resolution in accordance to SLAs</p>
						<p> - Prepared desks and conducted moves</p>
						<p> - Created and maintained detailed asset inventory</p>
						<p> - Performed and arranged repairs, decommission and recycling</p>
						<p> - Assisted with software and hardware procurement</p>
						<p> - Ensured that the server room and patch panel rooms are in good order</p>
						<p> - Tested and verified Windows and application upgrades, patches and versions before general rollout</p>
						<p> - Performed Active Directory Group and Shared mailbox audits to streamline access provisioning and PoLP compliance </p>
						<p> - Reviewed DHCP reservations and took actions to ensure devices are in the correct VLANs</p>
						<p> - Trained users in existing and new systems and conducted new user Inductions</p>
						<p> - Reviewed, authored and shared multiple troubleshooting manuals</p>
					</div>
				</AccordionTab>
				<AccordionTab header={header('Freelance Computer Technician', 'Apr. 2018 – Sep. 2020', 'Athens, Greece')}>
					<div className="content">
						<p> - OS, Software, Updates, Drivers, Antivirus installations</p>
						<p> - Hardware diagnostics (Disk Health, RAM, CPU, GPU)</p>
						<p> - General optimization for increased performance</p>
						<p> - Online and Local accounts</p>
						<p> - Lost data recovery </p>
					</div>
				</AccordionTab>
				<AccordionTab header={header('University of West Attica', 'Dec. 2019 – Feb. 2020', 'Athens, Greece', 'Internship - Laboratory computers maintenance/ upgrade')}>
					<div className="content">
						<p> - Installed new machines and repaired faulty ones</p>
						<p> - Configured Windows, lab-specific applications and accounts</p>
					</div>
				</AccordionTab>
				<AccordionTab header={header('Germanos SA', 'Apr. 2018 – Nov. 2019', 'Athens, Greece', 'Technical Support')}>
					<div className="content">
						<p> - Identified and resolved mobile and broadband issues for customers either on-site or remotely</p>
						<p> - Identified and resolved mobile and IoT device issues assisting the in-store service department</p>
						<p> - Client-side Citrix application troubleshooting</p>
						<p> - Store computers/printers troubleshooting</p>
						<p> - Collaboration with the Service Desk to escalate issues</p>
					</div>
				</AccordionTab>
				<AccordionTab header={header('Proton SA', 'Sep. 2017 – Dec. 2017', 'Athens, Greece', 'Internship - Biomedical Engineer - Field Support (CT, MRI, Ultrasound, Radiotherapy')}>
					<div className="content">
						{/* <p id="title">Internship - Biomedical Engineer - Field Support (CT, MRI, Ultrasound, Radiotherapy)</p> */}
						<p> - On site diagnostics and service of Biomedical equipment</p>
						<p> - Installation and removal of Biomedical equipment</p>
					</div>
				</AccordionTab>
				{/* <AccordionTab header={header('Hellenic Army (Mandatory)', 'Nov. 2016 – Aug. 2017', 'Didymoteicho, Greece')}>
					<div className="content">
						<p id="title">Cook - OR-1 (Arm/corps insignia only)</p>
					</div>
				</AccordionTab> */}
				<AccordionTab header={header('“Alimanaki” Restaurant ', 'Jun. 2014 – Nov. 2016', 'Athens, Greece', 'Store Manager')}>
					<div className="content">
						{/* <p id="title">Store Manager</p> */}
						<p> - Personnel management (monthly hours, task assignment)</p>
						<p> - Product promotion and sales</p>
						<p> - Supply management</p>
						<p> - Accounting tasks</p>
						<p> - Negotiating and organizing events (e.g. corporate diners, receptions)</p>
						<p> - Reception and customer service</p>
					</div>
				</AccordionTab>
				{/* <AccordionTab header={header('“Feggari” Bar', 'Jun. 2014 – Sep. 2014', 'Syros, Greece')}>
					<div className="content">
						<p id="title">Waiter</p>
					</div>
				</AccordionTab> */}
				{/* <AccordionTab header={header('“Ilektroniki Athinon” Consumer Electronics Store ', 'Jun. 2008 – Aug. 2008', 'Athens, Greece')}>
					<div className="content">
						<p id="title">Retail Salesperson – Electrical appliances and electronic devices - Internship</p>
					</div>
				</AccordionTab> */}
			</Accordion>
		</div>
	)
}

export default WorkExperience
