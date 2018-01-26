export const addProSkills = data =>
    `
    <ul class="pro-skills">
      ${data.professional.forEach(skill => `<li>${skill}</li>`)}
    </ul>
    `
