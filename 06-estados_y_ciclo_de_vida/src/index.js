import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './index.css';

// Paso 1.1
// Aquí tenemos un componente clase, el cual ya tiene incorporada la función useState
/*class Clock extends React.Component {
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


ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
// Si queremos utilizar el useState FUERA de una clase, necesitamos utilizar el HOOK useState. Recordar importarlo con -import React, { useState } from "react";-
/*const Item = ({label}) => {
  const [checked, setChecked] = useState(true);
  return (
    <p onClick={() => setChecked(!checked)}>
      {checked ? 'Seleccionado' : 'Sin seleccionar'} {label}
    </p>
  );
}

const element = (
  <div>
    <h1>¿Qué es el <i>estado</i> en React?</h1>
    <dl>
      <dt><strong>Estado</strong></dt>
      <dd>Es un conjunto de datos que definen al componente <u>internamente</u>. Cada vez que su estado cambia (al igual que ocurre con las props, el componente se renderiza.<br/>
      ¿Cómo puedo manejar el estado?
      <ol>
        <li>A través de los Hooks (React 16.8+ <sub>2018</sub>): permite usar el estado y otras características sin escribir una clase.</li>
        <li>useState() &rarr; es uno de los primeros Hooks que se implementaron. <i>[value, setValue] = useState(defaultValue)</i></li>
      </ol>
      </dd>
    </dl>
    <center>
      <Item />
    </center>
    <hr />
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
        <li><b>Hooks</b>: Para resolver este ejemplo con componentes funcionales en lugar de clases, tendremos que:</li>
        <ul>
          <li>Crear los componentes funcionales</li>
          <li>Utilizar el Hook useState para definir el estado del componente</li>
          <li>Utilizar el Hook useEffect para controlar el ciclo de vida del componente</li>
        </ul>
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

setInterval(tick, 1000);*/

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  function refresh(){
    setClock(new Date())
  }

  useEffect(() => {
    const interval = setInterval(refresh,1000);
    return () => clearInterval(interval);
  });
  return <h2>Son las {clock.toLocaleTimeString()}</h2>
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
