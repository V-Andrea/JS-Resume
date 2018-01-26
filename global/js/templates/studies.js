export const addStudies = data =>
    `
    <ul class="courses">
      ${data.onlineCourses.map(course => `<li>
        <h6 class="class-title">${course.title}</h6>
        <p>${course.school}</p>
        <div class="date-text">${course.dates}</div>
        <a class="class-link" href="${course.url}">${course.url}</a>
      </li>`)}
    </ul>
    `
