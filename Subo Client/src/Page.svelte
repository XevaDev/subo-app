<script>
    export let page = 1;
</script>
<div class="container-fluid">
    {#if page === 1}
    <div>
        <h1>Subo App</h1>
        <p>Welcome to the universe of animated communities</p>
        
        <br>
    </div>

    {:else if page === 2}
        <div>Page 2</div>
    {/if}
</div>