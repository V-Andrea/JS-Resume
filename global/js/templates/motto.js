export const addMotto = data =>
    `
    <div class="col-67  hidden-md">
      <img
        class="slide-in slide-in_left"
        srcset="${require('../../img/tim-mossholder_1800.jpg')} 1500vw, ${require('../../img/tim-mossholder_1200.jpg')}, 900vw ${require('../../img/tim-mossholder_900.jpg')} 600vw"
        src="${require('../../img/tim-mossholder_600.jpg')}"
        alt="Vivid green plant with magenta background">
    </div>
    <div class="col-33 text-area">
      <h2 class="h2 text-center">Motto</h2>
      <blockquote class="text-center">${data.motto.text}</blockquote>
      <p class="text-center">${data.motto.author}</p>
    </div>
    `
