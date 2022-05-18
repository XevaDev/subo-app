<script lang="ts">
  import { onMount } from "svelte";
  import { _GET } from "./_GET";

  import Navbar from "./Navbar.svelte";
  import Page from "./Page.svelte";

  let page: string | undefined = undefined;

  onMount(() => {
    page = _GET("page");
    document.title = "Subo App";
    document.body.style.backgroundColor = "#E6D4D0";
  });
</script>

<main>
  <Navbar />
  <br />
  {#if typeof page === "undefined"}
    <Page page={1} />
  {:else}
    <Page page={parseInt(page)} />
  {/if}
</main>

<style lang="scss">
  $color: #c17363;

  main {
    background-color: $color;
    div {
      margin-left: 45px;
    }
  }
</style>
