<template>
    <div class="card text-dark bg-light mb-3" >
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <p class="card-text">45424214@qq.com</p>
            <a> <router-link :to="{name:'phoneLink'}">联系人</router-link></a>
             <a> <router-link :to="{name:'personnameLink'}">联系电话</router-link> </a>
             <router-view></router-view>
        </div>
          
    </div>
</template>
