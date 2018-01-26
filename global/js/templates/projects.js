export const addProjects = data =>
    `
    <h2>Projects</h2>
    ${data.projects.map(project => `
    <div class="project-entry">
      <img src="${project.image}">
      <h6>${project.title}</h6>
      <a href="Github">${project.github}</a>
      <div class="date-text">${project.dates}</div>
      <p>${project.description}</p>
    </div>
    `).join('')}`
