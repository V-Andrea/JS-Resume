export const addProjects = data =>
    `
    <div class="project-entry">
      <img src="${data.image}">
      <h6>${data.title}</h6>
      <a href="Github">${data.github}</a>
      <div class="date-text">${data.dates}</div>
      <p>${data.description}</p>
    </div>
    `
