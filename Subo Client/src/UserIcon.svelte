<script lang="ts">
  import { tooltip } from "./tooltip";

  export let src: string;
  export let profileLink: string;
  export let username: string;
  export let from: string | undefined = undefined;

  function c() {
    if (from === "navbar") {
      document.location = "/?page=6";
    } else {
      document.location = profileLink;
    }
  }
</script>

<img title={username} {src} alt="" use:tooltip on:click={() => c()} />

<style lang="scss">
  img {
    border-radius: 50%;
    height: 60px;
    width: 60x;
  }
</style>
