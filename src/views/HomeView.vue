<template>
  <div class="courses-header">
    <div class="d-flex">
      <div class="welcome-message">
        <h2>Welcome back!</h2>
        <div class="member-since">
        </div>
      </div>
    </div>
  </div>

  <!-- 課前介紹 -->
  <div class="introduce">
    <div class="introduce-title">
      <p>課前介紹</p>
    </div>
    <div class="introduce-text">
      <p>
        總聽和合司舉在西發學頭在片他我，起方很子看對不寫他竟報不以即雄行的他日排中親間星裡年比五人美紀合人定：處亞況！吃生內一形，跑策案，安內手事居；得長八，動負股保題布文。兒學物臺，千變,總聽和合司舉在西發學頭在片他我，起方很子看對不寫他竟報不以即雄行的他日排中親間星裡年比五人美紀合人定：處亞況！吃生內一形，跑策案，安內手事居；得長八，動負股保題布文。兒學物臺，千變
      </p>
    </div>
  </div>

  <!-- 課程列表 -->
  <div class="lt">課程單元</div>
  <div class="list"  v-for="data in datas" :key="data">
    <div class="list-img">5</div>
    <div class="list-title">
      <p>{{ data.title}}</p>
      <div class="list-progress progress">
        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div >
        <RouterLink :to="data.to" class="list-btn  btn btn-primary stretched-link">進入課程</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const datas = ref([{
  title: 'AWS Certified Cloud Practitioner',
  to:'/ccp'
  },
  {
    title: 'AWS Certified Developer - Associate',
    to: '/cdv'
  }, {
    title: 'AWS Certified Solutions Architect - Associate',
    to: '/saa'
  }, {
    title: 'AWS Certified Database',
    to: '/db'
  }, {
    title: 'AWS Certified Machine Learning - Specialty',
    to: '/ml'
  },
])
</script>

<style scoped>
.courses-header{
  background-color: brown;
  width: 100%;
  height: 600px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*課前介紹*/
.introduce{
  max-width: 80%;
  margin: 0px auto;
  padding: 2rem;
  justify-content: center;
  align-items: center;
}
.introduce-title{
  font-size: 4rem;
  margin: 10px 10px 30px 10px;
}
.introduce-text {
  font-size: 1.3rem;
  margin: 10px;
}

/*課程列表*/
.lt{
  max-width: 80%;
  margin: 0px auto;
  padding: 1rem;
  font-size: 3rem;
  text-align: center;
}
.list{
  border-style: solid;
  border-color: #1e1c1b;
  border-width: 2px;
  max-width: 80%;
  margin: 20px auto;
  padding: 2rem;
  text-align: center;
}
.list-img{
  background-color: blue;
  max-width: 100%;
  height: 200px;
  margin: 0px auto;
}
.list-title{
  font-size: 20px;
  max-width: 100%;
  margin: 15px auto;
}
.list-progress{
  max-width: 100%;
  margin: 10px auto;
}
.list-btn{
  max-width: 80%;
  margin: 5px auto;
  justify-content: center;
  align-items: center;
}

@media (min-width: 415px) {
  .list {
      padding: 1.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  .list-img {
    background-color: rgb(207, 30, 226);
    width: 25%;
    height: 140px;
  }
    .list-title {
      font-size: 20px;
      min-width: 70%;
      margin: 10px auto;
      top: 20px;
    }
  
    .list-progress {
      max-width: 90%;
      margin: 10px auto;
    }
  
    .list-btn {
      min-width: 20%;
      margin: 5px auto;
      justify-content: center;
      align-items: center;
      left: 38%;
      top: 10px;
    }
}

@media (min-width: 895px) {
  .list {
    padding: 2rem;
  }

  .list-img {
    background-color: rgb(1, 1, 17);
    height: 250px;
  }

  .list-title {
    font-size: 2rem;
    margin: 10px auto;
  }
  .list-btn {
      left: 43%;
      top: 40px;
    }
}
</style>