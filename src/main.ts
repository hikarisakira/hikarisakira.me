import { mount } from 'svelte'
import './styles/main.css'
import App from './App.svelte'
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics'

const app = mount(App, {
  target: document.getElementById('app')!,
})
injectSpeedInsights();
inject();
export default app
