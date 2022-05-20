<script lang="ts">
  import { checkExist } from "./checkExist";
  import { getClientInfo } from "./getClientInfo";

  import UserIcon from "./UserIcon.svelte";

  let h = () => {
    document.location = "http://localhost:8080/?page=6";
  };

  let vars = async function () {
    let t = await checkExist();
    let settings: {
      imageSource: string;
      username: string;
      profileLink: string;
    };

    if (t === true) {
      let g = await getClientInfo(localStorage.token, "http://localhost:2000");

      settings = {
        imageSource: g.avatar,
        username: g.username,
        profileLink: "/",
      };
    }

    return { settings: settings, t: t };
  };
</script>

<div class="knav">
  {#await vars() then v}
    {#if v.t === true}
      <UserIcon
        from={"navbar"}
        username={v.settings.username}
        profileLink={v.settings.profileLink}
        src={v.settings.imageSource}
      />
    {/if}
    {#if !v.t}
      <div>
        <h6>Aren't you connected ?</h6>
        <a href="http://localhost:2000/pages/reg">Register</a>
        <a href="http://localhost:2000/pages/nect">Connect</a>
      </div>
    {/if}
  {/await}
</div>

<style>
  .knav {
    margin-right: 50px;
  }
</style>
