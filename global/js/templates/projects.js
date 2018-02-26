export const addProjects = data =>
  `
  <div class="card-group">
    <h2 class="text-center">Projects</h2>
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
          <a target="_blank" href="${project.github}">${project.github}</a>
        </div>
      </li>
      `).join('')}
    </ul>
  </div>
  `
