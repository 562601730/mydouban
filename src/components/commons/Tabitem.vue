<template>
    <div class="tabitem" @click="clickitem">
        <span v-show="flag"><slot name="activeimg"></slot></span>
        <span v-show="!flag"><slot name="normalimg"></slot></span>
        <span :class="{'active': flag}">{{txt}}</span>
    </div>
</template>
<script>
export default {
    props: ["txt","mark","sel"],
  /*   data(){
        return {
            flag: !true
        }
         
    } */
    methods:{
        clickitem(){
            this.$emit("change",this.mark)
            this.$router.push("/" + this.mark)
        }
    },
    computed: {
        flag(){
            if(this.mark == this.sel){
                return true
            }else{
                return false
            }
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .tabitem{
 
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        span{
            text-align: center;
        }
        img{
            width: 40px;
        }
        .active{
            color: green;
        }
    }
</style>


