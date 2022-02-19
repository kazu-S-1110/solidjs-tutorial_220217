import { createSignal, createEffect, createMemo } from 'solid-js';

const fibonacci: any = (num: number) => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

export const Counter = () => {
  const [count, setCount] = createSignal<number>(0);
  // const timer = setInterval(() => {
  //   setCount(count() + 1);
  //   if (count() === 5) {
  //     clearInterval(timer);
  //   }
  // }, 1000);

  // const doubleCount = () => count() * 2;
  const fib = createMemo(() => fibonacci(count()));

  return (
    <>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>
      <div>Count : {fib()}</div>

      <button onclick={() => setCount(count() + 1)}>plus me {count()}</button>
    </>
  );
};
