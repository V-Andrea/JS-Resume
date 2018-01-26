export const addContacts = data =>
    `
    <ul>
      <li>
        <a class="class-link" href="${data.contacts.email}">E-mail</a>
      </li>
      <li>
        <a class="class-link" href="${data.contacts.github}">Github</a>
      </li>
      <li>
        <a class="class-link" href="${data.contacts.linkedin}">LinkedIn</a>
      </li>
    </ul>
    `