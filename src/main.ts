import './styles/main.scss'
import App from './App.svelte'
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics'

const app = new App({
  target: document.getElementById('app')!,
})
injectSpeedInsights();
inject();
export default app;


