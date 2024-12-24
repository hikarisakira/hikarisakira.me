<svelte:options runes={true} />

<script>
    import Navbar from './components/navbar.svelte'
    import Information from './components/information.svelte'
    import Footer from './components/footer.svelte'
</script>

<style>
  .container {
    @apply flex flex-auto items-center justify-center h-screen text-center
  }
  main {
    @apply flex-1 w-full flex items-center justify-center
  }
</style>

<div class="container">
  <Navbar />
  <br>
  <main>
    <Information />
  </main>
  <br>
  <Footer />
</div>
