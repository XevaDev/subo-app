<script lang="ts">
import {
    onMount
} from "svelte";

import CategoryPage from "./CategoryPage.svelte";

import Navbar from "./Navbar.svelte";
import UserProfile from "./UserProfile.svelte";

onMount(() => {
    document.title = "Subo App"
})

</script>

<main>
    <Navbar></Navbar>
    <div>
        <h1>Hello World!</h1>
        <p>This is the start of the Subo Client</p>

        <br>
        <UserProfile
            id={1}
            username="Xevaltan"
            bio = {{lines:["Video Games","League Of Legends","Drawing"]}}
            icon={{profileLink:"/",username:"Zerty4321",src:"https://spng.pngfind.com/pngs/s/676-6764065_default-profile-picture-transparent-hd-png-download.png"}}>
        </UserProfile>
    </div>
</main>

<style lang="scss">
    main {
        div {
            margin-left: 45px;
        }
    }
</style>
