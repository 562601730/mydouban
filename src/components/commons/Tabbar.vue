<template>
    <div class="tabbar">
        <Tabitem txt="首页" mark="home" :sel="selected" @change="setSelected">
            <img slot="activeimg" src="../../assets/ic_tab_home_active.png" alt="">
            <img slot="normalimg" src="../../assets/ic_tab_group_normal.png" alt="">
        </Tabitem>
        <Tabitem txt="书影音" mark="audio" :sel="selected" @change="setSelected">
            <img slot="activeimg" src="../../assets/ic_tab_audio_active.png" alt="">
            <img slot="normalimg" src="../../assets/ic_tab_audio_normal.png" alt="">
        </Tabitem>
        <Tabitem txt="广播" mark="broadcast" :sel="selected" @change="setSelected">
            <img slot="activeimg" src="../../assets/ic_tab_broadcast_active.png" alt="">
            <img slot="normalimg" src="../../assets/ic_tab_broadcast_normal.png" alt="">
        </Tabitem>
        <Tabitem txt="分组" mark="group" :sel="selected" @change="setSelected">
            <img slot="activeimg" src="../../assets/ic_tab_group_active.png" alt="">
            <img slot="normalimg" src="../../assets/ic_tab_group_normal.png" alt="">
        </Tabitem>
        <Tabitem txt="我的" mark="mine" :sel="selected" @change="setSelected">
            <img slot="activeimg" src="../../assets/ic_tab_mine_active.png" alt="">
            <img slot="normalimg" src="../../assets/ic_tab_mine_normal.png" alt="">
        </Tabitem>
    </div>
</template>
<script>
import Tabitem from "./Tabitem";
import bus from "../../modules/bus";
export default {
    components: {
        Tabitem
    },
    data(){
        return {
            selected: this.$route.name,
        }
    },
    methods: {
        setSelected(val){
            this.selected = val
        }
    },
    created(){
        bus.$on("change",this.setSelected)
    }

}
</script>
<style lang="scss" scoped>
    .tabbar{
        display: flex;
        background:white;
        position: fixed;
        bottom:0;
        width: 100%;
        justify-content:space-around;
        //         position:fixed;
        // bottom:0;
        // left:0;
        // width:100%;
        // height:60px;
        // background: rgba(0,0,0,0.1);
        // display: flex;
        
    }
</style>


