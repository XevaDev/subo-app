<script>
import AccountSettings from "./AccountSettings.svelte";

    
    export let page = 1;
    // 1 = Home
    // 2 = Communities (Categories) discovering
    // 3 = Trends
    // 4 = Community Forum
    // 5 = User content
    // 6 = Account Settings
    // 7 = Communities content discovering
    
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

    {:else if page === 6}
        <div>
            <AccountSettings/>
        </div>
    {/if}
</div>