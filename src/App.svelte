<svelte:options runes={true} />

<script>
    import Navbar from './components/navbar.svelte'
    import Information from './components/information.svelte'
    import Footer from './components/footer.svelte'
</script>

<style>
  .root {
    @apply min-h-screen relative flex flex-col;
  }

  main {
    @apply absolute inset-0 flex items-center justify-center;
    /* 為了避免遮擋導航欄和頁尾，添加上下 margin */
    margin: 64px 0;  /* 根據實際的導航欄和頁尾高度調整這個值 */
  }
</style>

<div class="root">
  <Navbar />
  <br>
  <main>
    <Information />
  </main>
  <br>
  <Footer />
</div>
