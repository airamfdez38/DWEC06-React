import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Paso 1.1
class Clock extends React.Component {
  constructor(props) {
    // Paso 2.2
    super(props);
    // Paso 2.1
    this.state = {date: new Date()};
  }

  // Paso 3.1
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // Paso 3.2
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Paso 3.3
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // Paso 1.2 y 1.3
  render() {
    return (
      <div>
        <h1>Reloj digital</h1>
        <h2>Son las {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const element = (
  <div>
    <p>Para evitar que al hacer el reloj, tengamos que renderizar a cada segundo, vamos a añadir estados al componente Reloj, transformando este componente en una clase.</p>
    <p>Los pasos a seguir son:</p>
    <ol>
      <li>Crear la clase</li>
      <ol>
        <li>Crear una clase con el mismo nombre que herede de <i>React.Component</i></li>
        <li>Agregar e implementar el método <i>render()</i></li>
        <li>Las propiedades de entrada se sustituyen por <i>this.props</i> en el método <i>render()</i></li>
      </ol>
      <li>Agregar estado a la clase</li>
      <ol>
        <li>Reemplazar <i>this.props.date</i> por <i>this.state.date</i></li>
        <li>Añadir constructor a la clase donde se cree el estado y utilice el constructor base</li>
        <li>Eliminar la propiedad del componente</li>
      </ol>
      <li>Ciclo de vida</li>
      <ol>
        <li>Implementar un método para que renderice el reloj (montaje) - <i>componentDidMount()</i> -</li>
        <li>Implementar un método para que elimine el código anterior (desmontaje) - <i>componentWillUnmount()</i> -</li>
        <li>Implementar el método que se ejecutará en cada actualización - <i>tick()</i> - con actualizaciones del estado setState()</li>
      </ol>
    </ol>
    <Clock />
    <hr/>
    <div>
      A tener en cuenta del método setState()
      <ul>
        <li>this.state no renderizará el componente, debemos utilizar this.setState()</li>
        <li>Las actualizaciones pueden ser asíncronas</li>
        <li>Las actualizaciones de estado se fusionan</li>
      </ul>
    </div>
  </div>
);

function tick() {
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);