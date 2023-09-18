import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion';

const Skills = () => {

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
				<AccordionTab header={header('Technical')}>
					<div className="content">
						<p id="title">Accustomed:</p>
						<p> Windows (XP-10), Active Directory, Azure MFA, Avaya VoIP system, Lync/Skype for Business, ISM ticketing system, Confluence, SolarWinds, 1E Platform, Networking (TCP/IP, DNS, DHCP, SSH), SCCM, Intune, PXE, Cisco VC equipment, APC UPS</p>
						<p id="title">Familiar:</p>
						<p> AWS, Terraform, Ansible, Jenkins, Docker, Bash, PowerShell, Python, Red Hat/Rocky 8, Apache, Nginx, podman, SELinux, Windows Server 2016/2019, Ubuntu, Kali, Parrot, WSL, VirtualBox, Vagrant, Cisco networking equipment</p>
					</div>
				</AccordionTab>
				<AccordionTab header={header('Languages')}>
					<div className="content">
						<p> Greek (Native), English (C2 - Cambridge Proficiency in English)</p>
					</div>
				</AccordionTab>
				<AccordionTab header={header('Soft')}>
					<div className="content">
						<p> Self-motivated, Efficient, Consistent, Organizational, Analytical, Social, Adaptive, Trustworthy, Effective on an individual and group level</p>
					</div>
				</AccordionTab>
			</Accordion>
		</div>
	)
}

export default Skills
