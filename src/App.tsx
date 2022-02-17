import type { Component } from 'solid-js';
import Nested from './nested';
import styles from './App.module.css';
import { Counter } from './Counter';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1>This is a Header</h1>
      <Nested />
      <Counter />
    </div>
  );
};

export default App;
