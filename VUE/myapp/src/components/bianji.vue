<template>
  <div class="addtitle">
    <form>
      <textarea placeholder="专治不开心" v-model="list.conent"></textarea>
      <label>选择你感兴趣的话题:</label>
      <select class="btn-group" v-model="list.topic">
        <option v-for="(listc,index) in topic" :key="index" v-bind:value="listc.value">{{listc.value}}</option>
      </select>
      <label>选择图片风格:</label>
      <select v-model="list.picture">
        <option v-for="(listb,index) in picture" :key="index" v-bind:value="listb.value">{{listb.text}}</option>
      </select>
      <label>选择头像:</label>
      <select v-model="list.headportrait">
        <option v-for="(lista,index) in headportrait" :key="index" v-bind:value="lista.value">{{lista.con}}</option>
      </select>
      <label>输入你的昵称:</label>
      <input type="text" placeholder="留下你的代号!"  class="input-group input-group-sm" v-model="list.name"/>
      <input type="button" class="btn btn-success" value="更改" v-on:click="addlist" />
      <p>现在能力有限,头像和附加图片还做不到.<br />技术正在加紧研发中!<br />敬请期待!</p>
    </form>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'addtitle',
  data () {
    return {
      list:{},
       topic:[ {value:"动漫"},{value:"人文"},{value:"历史"},{value:"感情"},{value:"二次元"},{value:"cosplay"},{value:"自定义"}],
       headportrait:[
            {con:"阳光",value:"@/assets/yangguang.jpg"},
            {con:"彭于晏",value:"@/assets/pengyuyan.jpg"},
            {con:"沙雕",value:"@/assets/shadiao.jpg"},
            {con:"杀马特",value:"@/assets/shamate.jpg"},
            {con:"黄色",value:"@/assets/huangse.jpg"}
          ],
           picture:[
            {text:"帅气",value:"@/assets/suaiqi.jpg"},
            {text:"炫酷",value:"@/assets/xuanku.jpg"},
            {text:"伤感",value:"@/assets/shanggan.jpg"},
            {text:"非主流",value:"@/assets/feizhuliu2.jpg"},
            {text:"福利",value:"@/assets/fuli.jpg"}
          ],
    }
  },
  methods:{
    addlist(e){
      if(!this.list.name || !this.list.conent){
        alert("请填写必要信息!")
      }else{
        let datalist = {
          name:this.list.name,
          conent:this.list.conent,
          topic:this.list.topic,
          picture:this.list.picture,
          headportrait:this.list.headportrait
        }
        this.$http.put("http://localhost:3000/users/"+this.$route.params.id,datalist)
        .then(function(response){
            this.$router.push({path:"/"},alert("段子编辑成功!"))
        })
      }   
    },
    //自动获取数据
    updata(id){
         this.$http.get("http://localhost:3000/users/" + id)
      .then(function(response){
        this.list = response.body
      })
    }
  },
  created(){
      this.updata(this.$route.params.id)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .kong{
      width: 100%;
      height:70px;
    }
    textarea{
      width:100%;
      height:200px;
      border:none;
      outline: none;
    }
    label,input{
      display: block;
      margin:10px 0;
    }
    select,input{
      width:100%;
      height:40px;
    }
</style>
