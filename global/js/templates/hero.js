export const createHero = data =>
    `
    <h1 class="h1">${data.firstName} ${data.lastName}</h1>
    <p>Hi, I'm ${data.firstName},</p>
    <strong>${data.role},</strong>
    <p>${data.profile}</p>
    <p>${data.welcomeMessage}</p>
    `
