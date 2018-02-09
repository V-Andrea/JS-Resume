export const addStudies = data =>
  `
  <div class="card-group">
    <img
      class="card-group-bg-img"
      srcset="${require('../../img/artem-sapegin_1800.jpg')} 1500vw, ${require('../../img/artem-sapegin_1200.jpg')}, 900vw ${require('../../img/artem-sapegin_900.jpg')} 600vw"
      src="${require('../../img/artem-sapegin_600.jpg')}"
      alt="Laptop and coffeemug on a table">
    <h2 class="text-center">Studies</h2>
    <ul class="container">
      ${data.onlineCourses.map(course => `<li class="card">
        <div class="card-body">
          <h6 class="card-title">${course.title}</h6>
          <p>${course.school}</p>
          <div class="date-text">${course.dates}</div>
        </div>
        <div class="card-footer">
          <a class="class-link" target="_blank" href="${course.url}">Course page</a>
        </div>
      </li>`).join('')}
    </ul>
  </div>
  `
