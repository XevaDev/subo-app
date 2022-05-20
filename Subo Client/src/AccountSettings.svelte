<script lang="ts">
  import { onMount } from "svelte";
  import UserIcon from "./UserIcon.svelte";
  import UserProfile from "./UserProfile.svelte";

  export let settings: {
    username: string;
    profileLink: string;
    imageSource: string;
  };

  onMount(() => {});
</script>

<div>
  <h1>Settings</h1>
  <h2>Logged in as {settings.username}</h2>
</div>
