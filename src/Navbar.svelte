<script>
  import Logbar from "./Logbar.svelte";

  export let homeLink = "/";
</script>

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href={homeLink}>Subo</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href={homeLink}>Home</a>
        <a class="nav-link" href="/">Trends</a>
        <a class="nav-link" href="/">Categories</a>
      </div>
    </div>

    <Logbar />
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-danger" type="submit">Search</button>
    </form>
  </div>
</nav>
