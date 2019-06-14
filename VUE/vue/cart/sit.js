window.onload=function(){
    
    new Vue({
        el:"#sit",
        data:{
            modelist:[],
            limitNum:3,
            modeindex:0,
            indexdata:1
        },
        mounted(){
            this.automaticLoading();
        },
        updated() {
            this.automaticLoading();
        },
        computed:{
            filteredModelist:function(){
                return this.modelist.slice(0,this.limitNum);
            }
        },
        methods:{
            automaticLoading(){
                this.$http.get("http://localhost:3000/result")
                .then((response) =>{
                    this.modelist = response.body;
                })
            },
            moredata(){
                if(this.limitNum > 3){
                    this.limitNum = 3;
                }else{
                    this.limitNum = this.modelist.length;
                }
               
            },
            defaulta(id){
                this.modelist.forEach((item,index) =>{
                    if(item.id == id){
                        item.isdefault = true;
                    }else{
                        item.isdefault = false;
                    }
                })
            },
            deletea(id){
                this.$http.delete("http://localhost:3000/result/"+id)
                .then(function(response){
                    console.log(response);
                })
            }
        }
   
    })
}
