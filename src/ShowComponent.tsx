import { createSignal, Show } from 'solid-js';

export const ShowComponent = () => {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn());

  return (
    <Show when={loggedIn()} fallback={<button onclick={toggle}>Login</button>}>
      <button onclick={toggle}>Log out</button>
    </Show>
  );
};
