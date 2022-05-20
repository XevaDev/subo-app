<script lang="ts">
  import { onMount } from "svelte";
  import App from "./App.svelte";
  import { checkExist } from "./checkExist";
  import { getClientInfo } from "./getClientInfo";
  import UserIcon from "./UserIcon.svelte";
  import UserProfile from "./UserProfile.svelte";

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

<div>
  {#await vars() then v}
    <h1>
      <UserIcon
        profileLink={v.settings.profileLink}
        src={v.settings.imageSource}
        username={v.settings.username}
      /> Account Settings: {v.settings.username}
    </h1>
    <h2>Change username:</h2>
    <div class="chname">
      <div class="input-group mb-3">
        <button type="button" class="btn btn-primary">Set</button>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="new username..."
        />
      </div>
    </div>
  {/await}
  <br />
</div>
