import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    // ContactsAPI.getAll()
    ContactsAPI.getAllContacts()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

    // ContactsAPI.remove(contact)
  }
  createContact = (contact) => {
    ContactsAPI.create(contact)
      .then((contact) => {
        console.log(contact);
        this.setState((currentState) => ({
          contacts: currentState.contacts.concat([contact])
        }))
      })
  }
  render() {
    return (
      <div>
        <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
        )} />
        <Route path={process.env.PUBLIC_URL + '/create'} render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push(process.env.PUBLIC_URL + '/')
            }}
          />
        )} />
      </div>
    )
  }
}

export default App
