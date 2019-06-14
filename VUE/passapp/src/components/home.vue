<template>
    <div class="container">
        <div class="row">
            <div id="background" class="col-sm-15 col-md-30 text-center">
                <h1>欢迎你光临本店!</h1>
                <h1>选取你想吃的pizza</h1>
                <button @click="mehome">切换</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
        methods:{
            mehome(){
                //点击切换到上一次的浏览的位置
                // this.$router.go(-1)


                //点击切换到指定的位置
                // this.$router.replace("/menv")
                //通过名字跳转
                // this.$router.replace({name:'aboutLink'})

                //通过push跳转
                // this.$router.push("/about")
                this.$router.push({name:'loginLink'})
            }
        }
}
</script>

<style scoped>
    #background{
        width: 100vw;
        height: 84vh;
        padding-top:100px;
        background: url(../assets/bg.png) no-repeat;
        background-size: cover;
        -webkit-text-shadow:2px 2px 0px #fff;
        text-shadow:2px 2px 0px #fff;
    }
    #background h1{
        margin: 30px;
    }
    #background button{
        border:none;
        background:palegreen;
        padding: 5px 20px;
        border-radius: 5px;
    }
</style>