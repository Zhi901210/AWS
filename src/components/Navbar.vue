<template>
  <header>
        <div class="container-fluid">
            <!-- title -->
            <div class="header-title-text">
              <RouterLink to="/" class="navbar-brand" style="font-size: 30px; color: #F7F5ED ;text-decoration: none;">AWS</RouterLink>
            </div>
        </div>
  </header>
</template>


<style scoped>
header {
  background-color: #1e1c1b;
  height:80px;
  z-index: 1;
}
.container-fluid {
  background-color: #1e1c1b;
  height: 80px;
  width: 100%;
  top: 0px;
  margin: 0px auto;
  display: flex;
  justify-content:center;
  align-items: center;
  text-align: center;
}
.header-title-text {
  line-height: 80px;
  text-align: center;
}
</style>