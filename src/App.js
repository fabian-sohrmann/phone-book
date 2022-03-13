import React from 'react'
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456'}
      ],
      newName: '',
      newNumber: ''
    }
  }

  addPerson = (event) => {
    console.log(event.target)
    event.preventDefault()
    const result = this.state.persons.find(elem => elem.name === this.state.newName)
    if(result===undefined){
      const personObject = {name: this.state.newName, number: this.state.newNumber}
      const persons = this.state.persons.concat(personObject)
      this.setState({
        persons: persons,
        newName: '', 
        newNumber: ''
      })
    }else{
      alert("Cannot have the same name twice!")
    }
  }

  handlePersonChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handlePersonChange}/>
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>
          <tbody>
            {this.state.persons.map(person => <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App