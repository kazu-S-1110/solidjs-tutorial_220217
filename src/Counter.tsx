import { createSignal, createEffect } from 'solid-js';

export const Counter = () => {
  const [count, setCount] = createSignal<number>(0);
  setInterval(() => setCount(count() + 1), 1000);
  const doubleCount = () => count() * 2;

  createEffect(() => {
    console.log(`The count is now ${doubleCount()}`);
  });

  return (
    <>
      <div>Count : {doubleCount()}</div>
      <button onclick={() => setCount(count() + 1)}>plus me</button>
    </>
  );
};
