<template>
    <h1>admin</h1>
</template>

<script>
    export default {
        data(){
            return{
                name:"lly"
            }
        },

        // beforeRouteEnter:(to,form,next) => {   //组件守卫
        //     // alert("你好,需要登录");
        //     // alert("hello" + this.name);
        //     next(vm => {
        //         alert("hello" + vm.name);
        //     })
        // }

        // beforeRouteLeave:(to,form,next) =>{   //组件的厉害守卫
        //     if(confirm("你确定离开吗?") === true){
        //         next();
        //     }
        //     else{
        //         next(false);
        //     }
        // }
    }
</script>

<style>

</style>