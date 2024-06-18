import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mt-10 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="space-y-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project key={index} {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
