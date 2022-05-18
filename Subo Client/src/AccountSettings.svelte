<script lang="ts">
  import { onMount } from "svelte";
  import UserIcon from "./UserIcon.svelte";
  type settingsType = {
    username: string;
    profileLink: string;
    imageSource: string;
  };
  export let settings: settingsType;

  onMount(() => {});
</script>

<div>
  <h1>Settings</h1>
  <h2>Logged in as {settings.username}</h2>
</div>
