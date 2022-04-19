<script lang="ts">
    import UserBio from "./UserBio.svelte";
    import UserIcon from "./UserIcon.svelte";

    export let username: string;
    export let id: number;
</script>

<div class={"uprofile "+id+""}>
    <div>
        <UserIcon username={username} profileLink="/" src="https://preview.redd.it/wqw27832zwo71.png?width=640&crop=smart&auto=webp&s=53735ff45b4d7592b1d2004e663b0e875cc03cd4"/>
        <h3>{username}</h3>
    </div>
    <UserBio lines={["One","Two","Three"]}/>
</div>

<style lang="scss">
    .uprofile {
        div {
            border: 1px solid black;
            height: 75px;
            padding-top:5px;
            width: 200px;
            h3 {
                margin-left: 35%;
                transform: translate(0px,-64px);
            }
        }
    }
</style>