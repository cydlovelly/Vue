<template>
  <div id="app">
   
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    //fetch  
  //   fetch("/apis/test/testToken.php"),{
  //     method:"post",
  //     headers:{
  //       "Content-type":"application/json",
  //       token:"f4c902c9ae5a2a9d8f84868ad064e706",
  //     },
  //     body:JSON.stringify({username:"lly",password:"521424"})
  //   .then(result =>{
  //     // console.log(result)
  //     return result.json()
  //   })
  //   .then(data =>{
  //     console.log(data)
  //   })
  // }
  fetch(".....",{
    method:"post",
    header:{
      "Content-type":"application/json",  //请求头
      token:"..........."  //API接口
    },
    body:JSON.stringify({username:"cyd", password:"5562141"})
    .then(result =>{
      return result.json()
    })
    .then(data =>{
       console.log(data)
    })
  })

  // axios 
  // this.$axios.post('/apis/test/testToken.php',{username:"lly" , password:"5425"})
  // .then(data =>{
  //   cosole.log(data)
  // })

  this.$axios.post("...",{username:"lly",password:"4545"})
  .then(data =>{
    console.log(data)
  })
}
}
 
</script>

<style>

</style>
