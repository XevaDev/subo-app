<script lang="ts">
    import UserContent from "./UserContent.svelte";

    export let category: string;
    type contentype = {
        id:number
    }

    let content: contentype[];

    let testList = [
        {
            category: "animal",
            id: 1,
            mediaLink:"",
            title:"Hello Animals",
            desc: []
        }
    ]
</script>

<div>
    <h1>Category: {category}</h1>
    <div class="contents">
        {#each content as c}
            <UserContent id={c.id}/>
        {/each}
    </div>
</div>