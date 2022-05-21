<script lang="ts">
  import { onMount } from "svelte";
  import { checkExist } from "./checkExist";
  import { getClientInfo } from "./getClientInfo";
  import UserIcon from "./UserIcon.svelte";
  import UserProfile from "./UserProfile.svelte";

  let p: boolean;
  let setUsername = async () => {
    let inp: HTMLInputElement = document.querySelector(".chnameinp");
    let username = inp.value;

    let res = await fetch(
      `http://localhost:2000/users/private/editUsername/${localStorage.getItem(
        "token"
      )}/${username}`
    );
    let json: { statut: string } = await res.json();
    if (json.statut === "success") return true;
    else return false;
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
        <button
          type="button"
          class="btn btn-primary"
          on:click={async () => {
            let t = await setUsername();
            p = t;
          }}>Set</button
        >
        <input
          type="text"
          class="form-control chnameinp"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="new username..."
        />
      </div>
    </div>
    {#if p === true}
      <div class="alert alert-success" role="alert">
        Success! New username set!
      </div>
      <br />
    {/if}
    {#if p === false}
      <div class="alert alert-warning" role="alert">
        Failed to change username!
      </div>
      <br />
    {/if}
  {/await}
  <br />
</div>
