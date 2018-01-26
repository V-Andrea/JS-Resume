export const addProSkills = data =>
    `
    <ui class="pro-skills">
      ${data.professional.forEach(skill => `<li>${skill}</li>`)}
    </ui>
    `
