<script>
    import Contact from './contact.svelte';
</script>

<footer class="footer items-center p-4 fixed inset-x-0 bottom-0">
    <aside class="items-center grid-flow-col md:fixed md:place-self-center md:justify-self-start">
        <p>Copyleft (ɔ) Hikari Sakira, 2024</p>
    </aside>
    <div class="footer-center flex fixed place-self-center justify-center">
        <div class="hidden md:flex md:flex-auto md:text-center md:items-center md:horizontal">
            <p>Made with &emsp14;</p>
            <i class="ci ci-svelte ci-1x"/>
            <i class="ci ci-tailwind ci-1x"/>
            <img src="https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg" alt="daisyui logomark" class="ci-1x"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="vite logomark" class="ci-1x"/>
            <i class="ci ci-vercel ci-1x"/>
            <p>&emsp13; & ❤️</p>
        </div>
    </div>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Contact />
    </nav>
</footer>