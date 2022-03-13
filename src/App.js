import React from 'react'
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas'}
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
    console.log(event.target)
    event.preventDefault()
    const result = this.state.persons.find(elem => elem.name === this.state.newName)
    if(result===undefined){
      const personObject = {name: this.state.newName}
      const persons = this.state.persons.concat(personObject)
      this.setState({
        persons: persons,
        newName: '' 
      })
    }else{
      alert("Cannot have the same name twice!")
    }
  }

  handlePersonChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input 
                    value={this.state.newName} 
                    onChange={this.handlePersonChange}
                  />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <p key={person.name}>{person.name}</p>)}
        
        {/*
        MIKSI EI TOIMI SEURAAVALLA KOODIRIVILLÄ JA ERILLISELLÄ PERSON-KOMPONENTILLA? 
        <Person key={person.id} name={person.name} /> 
        TULEE VIRHE: TARVITAAN UNIQUE KEY */} 
        
      </div>
    )
  }
}

export default App