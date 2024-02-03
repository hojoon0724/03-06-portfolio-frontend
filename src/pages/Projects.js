import { useLoaderData } from 'react-router-dom'

function Projects(props) {
  const projects = useLoaderData()
  return projects.map(project => (
    <div>
      <h2>{project.name}</h2>
      <img src={project.img} alt="project" />
      <a href={project.git}>
        <button>GitHub</button>
      </a>
      <a href={project.live}>
        <button>Live Site</button>
      </a>
    </div>
  ))
}

export default Projects
