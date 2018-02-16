export const addMotto = data =>
    `
    <h2 class="text-center">Motto</h2>
    <blockquote class="text-center">${data.motto.text}</blockquote>
    <p class="text-center">${data.motto.author}</p>
    `
