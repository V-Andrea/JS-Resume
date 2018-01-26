export const addContacts = data =>
    `
    <ul>
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