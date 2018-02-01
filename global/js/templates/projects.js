export const addProjects = data =>
  `
  <h2>Projects</h2>
  <ul class="container">
    ${data.projects.map(project => `
    <li class="card">
      <img class="card-img" src="${project.image}">
      <div class="card-body">
        <h6 class="card-title">${project.title}</h6>
        <div class="date-text">${project.dates}</div>
        <p>${project.description}</p>
      </div>
      <div class="card-footer">
        <a target="_blank" href="Github">${project.github}</a>
      </div>
    </li>
    `).join('')}
  </ul>
  `
