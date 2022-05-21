<script lang="ts">
  import { onMount } from "svelte";
  import { _GET } from "./_GET";

  import Navbar from "./Navbar.svelte";
  import Page from "./Page.svelte";
  import { checkExist } from "./checkExist";

  let page: string | null = null;

  onMount(() => {
    page = _GET("page");
  });
</script>

<main>
  <Navbar />
  <br />
  {#if page === null}
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
