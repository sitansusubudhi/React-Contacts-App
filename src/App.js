import React, { useState, useEffect } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

const LOCAL_STORAGE_KEY = "contactsApp.contacts"

function App() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    // localStorage.clear()

    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedContacts) {
      setContacts(storedContacts)
    } else {
      ContactsAPI.getAllContacts()
        .then((contacts) => {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
          setContacts(contacts)
        })
    }

  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  function removeContact(contact) {
    const newContacts = contacts.filter((c) => {
      return c.id !== contact.id
    })

    setContacts(newContacts)

    // ContactsAPI.remove(contact)
  }
  function createContact(contact) {
    ContactsAPI.create(contact)
      .then((contact) => {
        // console.log(contact);
        setContacts(prevContacts =>
          [...prevContacts, contact]
        )
      })
  }

  return (
    <div>
      <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (
        <ListContacts
          contacts={contacts}
          onDeleteContact={removeContact}
        />
      )} />
      <Route path={process.env.PUBLIC_URL + '/create'} render={({ history }) => (
        <CreateContact
          onCreateContact={(contact) => {
            createContact(contact)
            history.push(process.env.PUBLIC_URL + '/')
          }}
        />
      )} />
    </div>
  )
}

export default App
