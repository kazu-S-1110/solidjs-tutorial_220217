import { createSignal, createEffect } from 'solid-js';

export const Counter = () => {
  const [count, setCount] = createSignal<number>(0);
  // setInterval(() => setCount(count() + 1), 1000);
  createEffect(() => {
    console.log(`The count is now ${count()}`);
  });

  return (
    <>
      <div>Count : {count()}</div>
      <button onclick={() => setCount(count() + 1)}>plus me</button>
    </>
  );
};
