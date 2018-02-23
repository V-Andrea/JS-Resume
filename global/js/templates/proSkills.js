export const addProSkills = data =>
    `
    <div class="col-40 text-area">
      <h2>Professional Skills</h2>
      <ul class="pro-skills">
        ${data.professional.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
    <div class="col-60 hidden-md">
      <img
        class="slide-in slide-in_right"
        srcset="${require('../../img/autri-taheri_1800.jpg')} 1800w,
                ${require('../../img/autri-taheri_1200.jpg')} 1200w,
                ${require('../../img/autri-taheri_900.jpg')} 900w,
                ${require('../../img/autri-taheri_600.jpg')} 600w"
        sizes="60vw"
        src="${require('../../img/autri-taheri_900.jpg')}" alt="Raw sugar on spoon">
    </div>

    `
    ;
