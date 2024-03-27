<style lang="scss">
  body{
    @apply flex flex-auto items-center justify-center h-screen text-center
  }



</style>
<script>
    import Information from './components/information.svelte'
    import Footer from './components/footer.svelte'
    import Navbar from './components/navbar.svelte'
</script>


<body>
    <div>
        <Navbar />
        <br>
        <Information />
        <br>
        <Footer />
    </div>
</body>
