<script lang="ts">
    export let lines: string[];
</script>

<div class="ubio">
    {#each lines as line}
        <p>{line}</p>
    {/each}
</div>

<style>
    .ubio {
        
    }
</style>