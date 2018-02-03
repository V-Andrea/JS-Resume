export const addSoftSkills = data =>
    `
    <h2 class="text-center">Personal Skills</h2>
    <ul class="container">
      ${data.personal.map(skill => `<li>
        <svg class="circular-chart" viewbox="0 0 36 36">
            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path class="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke-dasharray="${skill[1]}, 100" />
        </svg>
        <h6 class="text-center">${skill[0]}</h6>
      </li>`).join('')}
    </ul>
    `
