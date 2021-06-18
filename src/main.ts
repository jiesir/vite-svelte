import App from './App.svelte';
import '@/utils/loader';
import { setupConsole } from '@/utils/console';

setupConsole();

const app = new App({
  target: document.getElementById('app')
})

export default app