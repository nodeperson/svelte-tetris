<script lang="ts">
  import Controller from "./components/Controller.svelte";

  function handleControllerEvent(eventName: string) {
    console.log(eventName)
  }
</script>

<main>
  <Controller
    on:left={() => handleControllerEvent('left')}
    on:right={() => handleControllerEvent('right')}
    on:down={() => handleControllerEvent('down')}
    on:drop={() => handleControllerEvent('drop')}
    on:turn={() => handleControllerEvent('turn')}
    on:pause={() => handleControllerEvent('pause')}
  />
</main>

<style>
</style>
