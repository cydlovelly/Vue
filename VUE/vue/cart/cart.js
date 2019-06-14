window.onload=function(){
    new Vue({
            el:"#app",
            data:{
                title:"购物神器",
                shooplist:[],  //渲染的数据列表
                checkallflag:false,  //判断
                totalpice:0,
                alertshade:true,
                curproduct:""
            },
            filters:{
                formatMoney:function(value){   
                    return "$" + value.toFixed(2)  //两位小数
                }
            },
            //开始加载数据
            mounted(){
                this.autoshoop();
            },
            // updated() {
            //     this.autoshoop();
            // },
            methods: {
                autoshoop(){
                    this.$http.get("http://localhost:3000/list",{'id':123})
                    .then((response) =>{
                        // console.log(response)
                    this.shooplist = response.body
                    })
                },
                //增加件数
                updata(i,way){
                    if(way < 0){
                            i.quentity --;    
                    }else if(way > 0 ){
                        i.quentity++;
                    }
                    this.total();
                },
                //单个选择
                selects(item){
                    if(typeof item.checked == "undefined"){
                        // Vue.set(item,"checked",true)
                        this.$set(item,"checked",true)
                    }else{
                        item.checked =! item.checked ;
                    }
                    this.total();
                },
                //全选
                checkall(flag){
                    if(this.checkallflag == true ){
                        this.checkallflag  = false;
                        this.shooplist.forEach((item,index) =>{
                            if(typeof item.checked == "undefined"){
                                // Vue.set(item,"checked",true)
                                this.$set(item,"checked", this.checkallflag)
                            }else{
                                item.checked = false;
                            }
                        })
                        this.total();
                    }else{
                        this.checkallflag =  flag;   //选矿的状态为flag   为true 
                        this.shooplist.forEach((item,index) =>{   //遍历我们商品数组   传递俩个参数
                            if(typeof item.checked == "undefined"){
                                // Vue.set(item,"checked",true)
                                this.$set(item,"checked",this.checkallflag)
                            }else{
                                item.checked = this.checkallflag;
                            }
                        })
                        this.total();
                    }
                   
                },
                // 计算价格
                total(){
                    this.totalpice = 0;
                    this.shooplist.forEach((item,index) =>{   //遍历我们商品数组   传递俩个参数
                       if(item.checked){
                           this.totalpice += item.price*item.quentity
                       }
                    })
                },
                //删除事件
                deletedata(id){
                    this. alertshade = false;
                    this.curproduct = id;
                },
                //确定删除
                deleteproduct(){
                    this.$http.delete("http://localhost:3000/list/"+this.curproduct)
                    .then(function(){
                        // alert("删除成功!");
                        this. alertshade = true;
                    })
                }

            },
    });
    Vue.filter("money" ,function(value,type){   //全局过滤器
        return "$" + value.toFixed(2) + type;
    })
}




