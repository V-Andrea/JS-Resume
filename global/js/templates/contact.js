export const addContacts = data =>
    `
    <h2>Contact</h2>
    <ul class="container">
      <li>
        <a class="class-link" target="_blank" href="mailto:${data.contacts.email}">E-mail</a>
      </li>
      <li>
        <a class="class-link" target="_blank" href="${data.contacts.github}">Github</a>
      </li>
      <li>
        <a class="class-link" target="_blank" href="${data.contacts.linkedin}">LinkedIn</a>
      </li>
    </ul>
    `