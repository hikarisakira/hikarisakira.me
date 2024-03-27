<style lang="scss">
  body{
    @apply flex flex-auto items-center justify-center h-screen text-center
  }



</style>
<script lang="ts">
    import Information from './components/information.svelte'
    import Footer from './components/footer.svelte'
</script>


<body>
    <div>
        <Information />
        <br>
        <Footer />
    </div>
</body>
