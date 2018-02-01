export const addProSkills = data =>
    `
    <div class="col-33 text-area">
      <h2>Professional Skills</h2>
      <ul class="pro-skills">
        ${data.professional.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
    <div class="col-67">
      <img src="/img/autri-taheri-435297.jpg">
    </div>

    `
