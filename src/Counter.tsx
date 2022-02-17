import { createSignal } from 'solid-js';

export const Counter = () => {
  const [count, setCount] = createSignal<number>(0);
  setInterval(() => setCount(count() + 1), 1000);

  return <div>Count : {count()}</div>;
};
