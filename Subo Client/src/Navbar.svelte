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
        height: 5%;
        width: 100%;
        text-align: center;
        display: block;
        border: 1px solid black;
        .navbtns {
            padding-top: .8%;
            padding-bottom: .8%;
            .navbtn {
                color: white;
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                background-color: $color-a;
                display: inline-block;
                margin-right: 10%;
                width: 200px;
                
                height: 25px;
            }
        }
    }
</style>