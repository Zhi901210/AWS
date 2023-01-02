<template>
  <div class="courses-header">
    <div class="d-flex">
      <div class="welcome-message">
        <h1>AWS Certified Cloud Practitioner</h1>
        <div class="member-since">
          <p>
            氣安公容力，冷孩指的高計爸自產書你教公北組少就客學變，上來通吃問好念家為……覺營寫、信習指統你知調！自國容近位海招爾老的合,氣安公容力，冷孩指的高計爸自產書你教公北組少就客學變，上來通吃問好念家為……覺營寫、信習指統你知調！自國容近位海招爾老的合？
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- 課程列表 -->
  <div v-for="title in titles" :key="title">
    <div class="lt">{{title.title}}</div>
    <div class="list">
      <div class="title btn-group" v-for="data in datas" :key="data">
        <button class=" title-ul   text-start" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
          {{ data.name }}
        </button>
        <button class="btn  text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="border-width: 0px;">
          <i class="icon dropdown-toggle"></i>
        </button>
        
        <ul class="title-li dropdown-menu" >
          <li v-for="i in data.list" :key="i"><a class="dropdown-item" href="#">{{ i}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import data from "../data/data.json";

const datas = ref(data.ccp)
const titles = ref(data.titles)
</script>

<style scoped>
.courses-header {
  background-color: brown;
  width: 100%;
  height: 400px;
  margin: 0px auto;
  padding: 0px 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.member-since {
  margin: 50px 0px;
}

/*課程列表*/
.lt {
  max-width: 80%;
  margin: 60px auto 30px auto;
  padding: 1rem;
  font-size: 1.5rem;
}
.list{
  max-width: 75%;
  margin: 5px auto;
}
.title{
  width: 100%;
  height: 70px;
  margin: 5px 0px;
}
.title-ul{
  background-color: #ffffff;
  color: #000;
  font-size: 18px;
  border-width: 0px;
  width: 90%;
}
.icon{
  border-width: 0px;
}
.title-li{
  width: 100%;
  font-size: 18px;
  background-color: #d5d4d4;
}

@media (min-width: 415px) {
  .lt {
      font-size: 2rem;
    }
    .list {
      margin: 10px auto;
    }
    .title-ul {
      font-size: 30px;
    }
    .icon {
      font-size: 1.5rem;
    }
    .title-li {
      font-size: 20px;
    }
}

@media (min-width: 895px) {
  .lt {
    font-size: 3rem;
  }
  .list {
    margin: 10px auto;
  }
  .title-ul {
    font-size: 35px;
  }
  .icon {
    font-size: 1.5rem;
  }
  .title-li {
    font-size: 25px;
  }
}
</style>