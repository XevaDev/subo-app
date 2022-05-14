<script lang="ts">
import {
    onMount
} from "svelte";

import CategoryPage from "./CategoryPage.svelte";

import Navbar from "./Navbar.svelte";
import Page from "./Page.svelte";
import UserProfile from "./UserProfile.svelte";

onMount(() => {
    document.title = "Subo App"
    document.body.style.backgroundColor = "#E6D4D0";
})

</script>

<main>
    <Navbar></Navbar>
    <br>
    <Page page={1}/>
</main>

<style lang="scss">
   

    $color: #C17363;
    
    main {
        background-color: $color;
        div {
            margin-left: 45px;
        }
    }
</style>
