<script lang="ts">
  import { onMount } from "svelte";
  import { checkExist } from "./checkExist";

  import UserIcon from "./UserIcon.svelte";
  type settingsType =
    | {
        username: string;
        profileLink: string;
        imageSource: string;
      }
    | undefined;
  export let settings: settingsType;

  let h = () => {};

  onMount(() => {});
</script>

<div class="knav">
  {#if checkExist()}
    <UserIcon
      from={"navbar"}
      username={settings.username}
      profileLink={settings.profileLink}
      src={settings.imageSource}
      on:click={h}
    />
  {/if}
  {#if !checkExist()}
    <div>
      <h6>Aren't you connected ?</h6>
      <a href="http://localhost:2000/reg">Register</a>
      <a href="http://localhost:2000/nect">Connect</a>
    </div>
  {/if}
</div>

<style>
  .knav {
    margin-right: 50px;
  }
</style>
