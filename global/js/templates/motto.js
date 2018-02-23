export const addMotto = data =>
    `
    <div class="col-60  hidden-md">
      <img
        class="slide-in slide-in_left"
        srcset="${require('../../img/tim-mossholder_1800.jpg')} 1800w,
                ${require('../../img/tim-mossholder_1200.jpg')} 1200w,
                ${require('../../img/tim-mossholder_900.jpg')} 900w,
                ${require('../../img/tim-mossholder_600.jpg')} 600w"
        sizes="60vw"
        src="${require('../../img/tim-mossholder_900.jpg')}"
        alt="Vivid green plant with magenta background">
    </div>
    <div class="col-40 text-area">
      <h2 class="h2 text-center">Motto</h2>
      <blockquote class="text-center">${data.motto.text}</blockquote>
      <p class="text-center">${data.motto.author}</p>
    </div>
    `
