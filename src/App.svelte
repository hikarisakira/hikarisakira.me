<style lang="scss">
  body{
    @apply flex flex-auto items-center justify-center h-screen text-center
  }

  button{
    @apply btn
  }

</style>
<script lang="ts">
    import Information from './components/infomation.svelte'
    import Contact from './components/contact.svelte'
</script>


<body>
    <div>
        <Information />
        <br>
        <Contact />

    </div>
</body>
