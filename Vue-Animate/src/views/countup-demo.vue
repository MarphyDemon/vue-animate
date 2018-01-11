<template>
    <div>
        <count 
            :countN = "countN"
            :speed = "speed"
            ></count>
    </div>
</template>

<script>
import Count from '../components/count-Animate'
export default {
    name: 'countdemo',
    components:{
        Count
    },
    data() {
        return {
            countN: 323454,
            speed: 123
        }
    }

}
</script>

<style>

</style>
