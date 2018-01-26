export const addProSkills = data =>
    `
    <ul class="pro-skills">
      ${data.professional.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
    `
