import React from 'react'
import Architecture from '../../../../assets/Architecture.svg'
import './style.css'

const Projects = () => {

	return (
		<div className="projects p-card">
			<div className='header'>
				<h3>Serverless Website on AWS using Terraform </h3>
				<a href={'https://github.com/RustyBridge/Serverless-Website-AWS-Terraform'} target="_blank" rel="noopener noreferrer">
					<p><strong>GitHub Link</strong></p>
				</a>
			</div>
			<p>
				A project where I aimed to host my Resume at
				<a href={'https://gvasilopoulos.xyz'} target="_blank" rel="noopener noreferrer"> https://gvasilopoulos.xyz </a>
				using AWS services, provisioned with Terraform. The inspiration came from The Cloud Resume Challenge
				<a href={'https://cloudresumechallenge.dev/docs/the-challenge/aws/'} target="_blank" rel="noopener noreferrer"> https://cloudresumechallenge.dev/docs/the-challenge/aws</a>
			</p>
			<p id="title">Architecture diagram:</p>
			<img src={Architecture} alt="Architecture"/>
			<p id="title">Description:</p>
			<p> - The frontend was created using React, is hosted on S3 and it contains a JavaScript function for the visitor counter</p>
			<p> - A domain name was registered and Route53 was used to manage its DNS records.</p>
			<p> - Cloudfront is used for security and to distribute the website efficiently</p>
			<p> - Two APIs and a Gateway were created, a custom domain name and the relevant mappings</p>
			<p> - Two Lambda functions were created, one to read the value from the DB and return it and the other to read, increment the value in the DB and return it. Each Lamba is triggered by a different API.</p>
			<p> - The Javascript function:</p>
			<p> • Checks the local storage for the value and if it doesn’t exist it, calls API2, which invokes the Lambda responsible for incrementing the DB value, saves it to local storage and displays it.</p>
			<p> • If the value already exists in local storage (the website has already been visited) calls API1 which invokes the Lambda responsible for reading the updated value from the DB, saves it to the local storage and displays it. </p>
			<p> - A CD Pipeline was created for the frontend, using Jenkins and Docker, which builds the React app and copies the contents of the build folder to the S3 bucket, when changes are pushed to that private repository. The details are described here: <a href={'https://github.com/RustyBridge/Serverless-Website-AWS-Terraform/blob/5f5b5968b9b172ac9e4f5eb932dc14c5defae010/Jenkins_Docker_details/Freestyle_project.md'} target="_blank" rel="noopener noreferrer"> https://github.com/RustyBridge/Serverless-Website-AWS-Terraform/Jenkins_Docker_details/Freestyle_project.md</a></p>
			<p id="title">Disclaimer:</p>
			<p> - The Frontend was not created by me. All credits go to Nick Vasilopoulos</p>
			<p> - The Python script was found online (I edited it to use a variable in the DB table name so it is generated each time the Terraform configuration runs)</p>
			<p> - The SSL certificate, the Route53 CNAME record used for DNS validation as well as the domain’s NS and SOA records were created using the AWS Console and imported to the Terraform configuration.</p>
		</div>
	)
}

export default Projects
