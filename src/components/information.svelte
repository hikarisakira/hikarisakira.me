<svelte:options runes={true} />

<style>
  h1 {
    @apply font-extrabold leading-tight text-3xl;
  }
  h2{
    @apply font-normal leading-tight text-xl;
  }
  h6{
    @apply font-light text-xs
  }
</style>
<div class="flex flex-col items-center justify-center min-h-screen w-full">
  <div class="flex flex-col items-center gap-4">
    <div class="avatar">
        <div class="drop-shadow-xl shadow-2xl w-32 rounded-full dark:shadow-white dark:drop-shadow-xl">
            <img src="https://www.gravatar.com/avatar/68ff3955f6a62528adfc59a6f123998920d65ef832d4ef69050608f040091c54" alt="Moi.">
        </div>
    </div>
  
    <div class="flex flex-col items-center">
        <h1>Cheng-Yang, Li</h1>
        <h6>a.k.a Hikari Sakira</h6>
        <h2>@hikarisakira</h2>
    </div>
  
    <div class="flex flex-col items-center gap-4">
        <div class="flex items-center gap-2">
            <h6>Application Developer <br class="lg:hidden"> @ HsinChu MacKay Memorial Hospital &emsp14;</h6>
            <div class="badge badge-secondary">now</div>
        </div>
        <div class="flex items-center gap-2">
            <h6>PM, Unreal Engine Developer, Founder(?) <br class="lg:hidden"> @ Studio Windance (personal studio) &emsp14;</h6>
            <div class="badge badge-warning">pending</div>
        </div>
    </div>
  </div>
</div>