<script lang="ts">
    import UserBio from "./UserBio.svelte";
    import UserIcon from "./UserIcon.svelte";

    export let username: string;
    export let id: number;
    export let icon: {username:string,profileLink:string,src:string};
    export let bio: {lines:string[]};

</script>

<div class={"uprofile "+id+""}>
    <div>
        <UserIcon username={icon.username} profileLink={icon.profileLink} src={icon.src} />
        <h3>{username}</h3>
    </div>
    <UserBio lines = {bio.lines} />
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