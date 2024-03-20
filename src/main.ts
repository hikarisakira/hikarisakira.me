import './styles/main.scss'
import App from './App.svelte'
import { injectSpeedInsights } from '@vercel/speed-insights';

const app = new App({
  target: document.getElementById('app')!,
})
injectSpeedInsights();
export default app;


