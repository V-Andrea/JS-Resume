export const addProSkills = data =>
    `
    <h2>Professional Skills</h2>
    <ul class="pro-skills">
      ${data.professional.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
    `
