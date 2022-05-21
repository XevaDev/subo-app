<script lang="ts">
  import UserContent from "./UserContent.svelte";

  export let category: { id: string; name: string };

  let contents: { id: number }[];
</script>

<div>
  <h1>Category: {category.name}</h1>
  <div class="contents">
    {#each contents as c}
      <UserContent id={c.id} />
    {/each}
  </div>
</div>
