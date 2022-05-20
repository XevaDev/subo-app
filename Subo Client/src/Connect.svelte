<script lang="ts">
  import { onMount } from "svelte";

  let baseServe = "http://localhost:2000";
  let bad: boolean = false;
  let errServ = false;

  function co() {
    let emailx: HTMLInputElement = document.querySelector("#inputEmail");
    let pw: HTMLInputElement = document.querySelector("#inputPassword");

    let form = {
      email: emailx.value,
      pw: pw.value,
    };

    fetch(`${baseServe}/exclog/?email=${form.email}&pw=${form.pw}`)
      .then((res) => {
        res.json().then((json) => {
          if (json) {
            console.log(json);
            if (json.bad === true) {
              bad = true;
            } else {
              localStorage.token = json.token;
            }
          } else {
            console.error("Can't receive data.");
          }
        });
      })
      .catch((e) => {
        console.log(e);
        errServ = true;
      });
  }

  onMount(() => {
    let btn = document.querySelector(".submi1");
    btn.addEventListener("click", (ev) => {
      co();
    });
  });
</script>

<div>
  <h1>Connect</h1>
  <br />
  <div class="mb-3 row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input
        name="email"
        type="email"
        class="form-control"
        id="inputEmail"
        placeholder="name@domain.com"
        required
      />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input
        name="pw"
        type="password"
        class="form-control"
        id="inputPassword"
        placeholder="password"
        required
      />
    </div>
  </div>
  <div class="btn mb-3">
    <input
      class="submi1 btn-primary mb-3"
      type="button"
      value="Confirm Identity"
    />
  </div>
  <br />

  {#if bad === true}
    <div class="alert alert-warning" role="alert">
      Incorrect e-mail or password.
    </div>
    <br />
  {/if}
  {#if errServ === true}
    <div class="alert alert-danger" role="alert">
      Couldn't connect to the server.
    </div>
    <br />
  {/if}
  <div />
</div>

<style lang="scss">
  form {
    .submit {
      margin-left: 210px;
    }
  }
</style>
