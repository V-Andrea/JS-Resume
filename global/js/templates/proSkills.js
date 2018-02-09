export const addProSkills = data =>
    `
    <div class="col-33 text-area">
      <h2>Professional Skills</h2>
      <ul class="pro-skills">
        ${data.professional.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
    <div class="col-67 hidden-md">
      <img
        class="slide-in slide-in_right"
        srcset="${require('../../img/autri-taheri_1800.jpg')} 1500vw, ${require('../../img/autri-taheri_1200.jpg')}, 900vw ${require('../../img/autri-taheri_900.jpg')} 600vw"
        src="${require('../../img/autri-taheri_600.jpg')}" alt="Raw sugar on spoon">
    </div>

    `
    ;
