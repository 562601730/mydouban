<template>
<div class="nofound">
    nofound
    <button class="gohome" @click="gohome">点击回到首页</button>
</div>
</template>
<script>
import bus from "../../../modules/bus"
export default {
    methods: {
        gohome(){
            this.$router.push("/home");
            bus.$emit("change","home")
        }
    }
}
</script>
<style lang="scss" scoped>
    .home{
        width: 3.75rem;
        background-color: red;
    }
</style>
