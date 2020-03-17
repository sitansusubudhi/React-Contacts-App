const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

let contacts = [
    {
      id: 'richard',
      name: 'Richard Kalehoff',
      handle: '@richardkalehoff',
      avatarURL: './images/richard.jpg'
    },
    {
      id: 'karen',
      name: 'Karen Isgrigg',
      handle: '@karen_isgrigg',
      avatarURL: './images/karen.jpg'
    },
    {
      id: 'tyler',
      name: 'Tyler McGinnis',
      handle: '@tylermcginnis',
      avatarURL: './images/tyler.jpg'
    },
    { avatarURL:
      'data:image/jpeg;base64,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',
     name: 'Sitansu Subudhi',
     handle: '@sksubudhi',
     id: 'sksubudhi' }
  ];


export const getAll = () =>
  fetch(`${api}/contacts`, { headers })
    .then(res => res.json())
    .then(data => data.contacts)

export function getAllContacts () {
  return new Promise((res, rej) => {
    setTimeout(() => res(contacts), 1000);
  })
}

export const remove = (contact) =>
  fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.contact)

export const create = (contact) => {

  // fetch(`${api}/contacts`, {
  //   method: 'POST',
  //   headers: {
  //     ...headers,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(body)
  // }).then(res => res.json())

  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  return new Promise((res, rej) => {
    setTimeout(() => res(contact), 1000);
  })
}
