import React from 'react'
import Container from 'react-bootstrap/Container'

export default function About() {
    return (
        <Container className="mt-4">
            <h3>About</h3>
                {/* <p>Simple front-end application with create-react-app to get jobs from GitHub Job API</p>
                <p>This Apps is taking data from GitHub API (https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json)</p>
                <p>In this Apps we can see jobs name, date it was created, the company that post the jobs, jobs location, where to apply, and the jobs description</p>
                <p>We can also search through all the jobs available by searching inside the description or the location that we input</p> */}
            <h5>Simple front-end application create with create-react-app to get jobs list from GitHub Job API</h5>
            <p>
                This App is taking data from GitHub API (https://jobs.github.com/positions.json).  
                In this Apps we can see jobs name, date it was created, the company that post the jobs, jobs location, where to apply, and the jobs description.  
                We can search through all the jobs available by searching inside the description or the location that we can input in the search box and the last search feature is we can search for full time employment only.
            </p>
            <p style={{color: "darkturquoise"}}>
                Made by Samuel Rantung.<br />
                Tutorial by Traversy Media (Collaborating with Web Dev Simplified) on Youtube.
            </p>
        </Container>
    )
}
