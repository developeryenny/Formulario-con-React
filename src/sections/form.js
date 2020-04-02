import React, {Component } from 'react'


export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            inputName: '',
            inputEdad: '',
            inputCond: true
        }
    }
    handleClick = (e)=> {
        e.preventDefault()
        console.log(this.state)
    }
    handleChange= (e) => {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({inputCond: e.target.checked})
    }

    render(){
        return(
        <div>
          <h4>Datos Personales</h4>
         <form onSubmit={this.handleClick}>
             <p>
                 <label htmlFor='name'> Nombre:</label>
                 <input 
                 id='name'
                 name= 'userName'
                 onChange={e => this.setState({inputName: e.target.value})}
                 placeholder= 'Introduce el nombre'
                 value={this.state.inputName}
                />
            </p>
            <p>
                <label htmlFor='edad'> Edad: </label>
                <input
                id='edad'
                name='edad'
                onChange={e => this.setState({inputEdad: e.target.value})}
                placeholder='Introduce tu edad'
                value={this.state.inputEdad}
               >
                </input>
            </p>
            <p>
                <label>
                    <input
                    checked={this.state.inputCond} 
                    onChange={this.handleChange} 
                    type='checkbox' />
                    ¡Aceptas las condiciones!
                </label>
            </p>
            <p>
                <button>Enviar</button>
            </p>
               
         </form>
        </div>
        );
    }
}

