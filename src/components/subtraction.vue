<template>
  <div>
      <h3>subtraction组件 当前最新的count值为:{{count}}</h3>
      <button @click = "btnHandler"> -1</button>
      <button @click = "btnHandlerN"> -n</button>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['count'])
    },
    methods:{
        ...mapMutations(['sub','subN']),
        btnHandler(){
            this.sub()
        },
        btnHandlerN(){
            this.subN(3)
        }
    }
}
</script>

<style>

</style>