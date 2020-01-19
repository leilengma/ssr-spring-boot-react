
import React from 'react'
import style from'./app.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: this.props.persons
        }
    }

    updateMsg = () => {
        fetch('/persons').then(
            res => {
                res.json().then(
                    content => this.setState({
                        persons: content
                    })
                );
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Persons: </h1>
                <table>
                    <thead>
                        <th className="header">Firstname</th>
                        <th>lastname</th>
                        <th>age</th>
                    </thead>
                    <tbody>
                    {
                        this.state.persons.map(person => {
                            return <tr>
                                <td>{person.firstName}</td> 
                                <td>{person.lastName}</td>
                                <td>{person.age}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>

                <button onClick={this.updateMsg}>refresh</button>
            </div>
        );
    }
}

export default App;