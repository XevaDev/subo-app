<script lang="ts">
  import { onMount } from "svelte";

  import { tooltip } from "./tooltip";

  export let src: string;
  export let profileLink: string;
  export let username: string;
  export let from: string | undefined;

  function redirect() {
    document.location = profileLink;
  }
  function onClick() {
    onMount(() => {
      if (!(from === "navbar")) {
        redirect();
      }
    });
  }
</script>

<div class="icon" on:click={onClick}>
  <img title={username} {src} alt="" use:tooltip />
</div>

<style lang="scss">
  .icon {
    img {
      border-radius: 50%;
      height: 60px;
      width: 60x;
    }
  }
</style>
