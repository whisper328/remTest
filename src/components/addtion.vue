<template>
    <div>
        <!-- 在template中可以省略this.  原型为this.$store {{$store.state.count}}-->
    <h3>addtion组件 当前最新的count值为:{{$store.state.count}}</h3>
    <button @click="butHandler">+1</button>
    <button @click="butHandler3">+3</button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        butHandler(){
            // 第一种使用方法
            this.$store.commit('add')
        },
        butHandler3(){
            this.$store.commit('addN',3)
        }
    }

}
</script>

<style>

</style>