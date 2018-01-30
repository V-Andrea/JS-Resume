export const createHero = data =>
    `
    <div class="title">
      <h1 class="h1">${data.firstName} ${data.lastName}</h1>
    </div>
    <div class="greeting">
      <p>Hi, I'm ${data.firstName},</p>
      <strong>${data.role},</strong>
      <p>${data.profile}</p>
      <p>${data.welcomeMessage}</p>
    </div>
    `
