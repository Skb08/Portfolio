import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Static Page to MERN Stack apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Beginner' ?
            <ToggleButton active value="Beginner" onClick={() => setToggle('Beginner')}>BEGINNER</ToggleButton>
            :
            <ToggleButton value="Beginner" onClick={() => setToggle('Beginner')}>BEGINNER</ToggleButton>
          }
          <Divider />
          {toggle === 'Individual' ?
            <ToggleButton active value="Individual" onClick={() => setToggle('Individual')}>INDIVIDUAL</ToggleButton>
            :
            <ToggleButton value="Individual" onClick={() => setToggle('Individual')}>INDIVIDUAL</ToggleButton>
          }
          <Divider />
          {toggle === 'Team' ?
            <ToggleButton active value="Team" onClick={() => setToggle('Team')}>TEAM</ToggleButton>
            :
            <ToggleButton value="Team" onClick={() => setToggle('Team')}>TEAM</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects