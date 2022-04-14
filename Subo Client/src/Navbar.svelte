<script>
</script>

<div class="nav">
    <div class="navbtns">
        <a class="navbtn" type="button" href="/">Menu</a>
        <a class="navbtn" type="button" href="/">Categories</a>
        <a class="navbtn" type="button" href="/">Discover</a>
    </div>
</div>

<style lang="scss">
    $color-a: rgb(161, 23, 23);
    $color-b: rgb(153, 58, 58);
    .nav {
        background-color: $color-b;
        height: 38px;
        width: 100%;
        text-align: center;
        display: block;
        border: 1px solid black;
        .navbtns {
            
            padding-top: 8px;
            .navbtn {
                background-color: $color-a;
                margin: 5px;
                padding: 5px;
                color: white;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                margin-right: 10px;
                border-radius: 20%;
            }
        }
    }
</style>