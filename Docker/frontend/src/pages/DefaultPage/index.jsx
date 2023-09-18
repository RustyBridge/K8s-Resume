import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import {Header, WorkExperience, Education, Skills, Interests, Projects} from './components'
import './styles.css'

const DefaultPage = () => {

	return (
		<div className="default-page">
			<Header/>
			<TabView activeIndex={4}>
				<TabPanel header="Work Experience">
					<WorkExperience/>
				</TabPanel>
				<TabPanel header="Education">
					<Education/>
				</TabPanel>
				<TabPanel header="Skills">
					<Skills/>
				</TabPanel>
				<TabPanel header="Interests">
					<Interests/>
				</TabPanel>
				<TabPanel header="This Project">
					<Projects/>
				</TabPanel>
			</TabView>
			<div className='p-card' style={{padding:"12px"}}>
				<p id="made-by">Frontend created by <a href={'https://www.linkedin.com/in/nickvasilopoulos/'} target="_blank" rel="noopener noreferrer">Nick Vasilopoulos</a></p>
			</div>
		</div>
	)
}

export default DefaultPage
