export const addStudies = data =>
  `
  <div class="card-group">

  <img class="card-group-bg-img" src="/img/artem-sapegin-180146.jpg">
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
