<template>
    <div class="page-homes">
       <header class="index-header">
    <a href="mine.html?cpid=0">
       <div class="header-user">
             <div class="user-btn"></div>

       </div>
    </a>
    <div class="header-logo"></div>
    <a href="search.html?cpid=0">
       <div class="header-search"></div>
    </a>
</header>
    </div>
</template>
<script>
export default {
  name: 'Homes'
}
</script>
<style lang="scss" scoped>
.index-header {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 10rem;
    height: 1.2rem;
    margin: auto;
    padding: 0 .4rem;
    background-color: #fff;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
}

</style>
