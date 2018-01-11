<template>
    <chart-bar
        :xaxis = "xAxis"
        :chartW = "width"
        :chartH = "height"
        :bgcolor = "bgcolor"
        :margin= "margin"
        ></chart-bar>
</template>

<script>
import ChartBar from '../components/chart-bar'
export default {
    name: 'chartdemo',
    components:{
        ChartBar
    },
    data(){
        return {
            width: 1000,
            height: 400,
            margin: [40,40],
            bgcolor: "rgba(246, 230, 225, 0.3)",
            xAxis: [{name: 'abc',num: 232},{name: 'abc',num: 323},{name: 'abc',num: 432},{name: 'abc',num: 522},{name: 'abc',num: 243},{name: 'abc',num: 342}],
        } 
    }
}
</script>

<style>

</style>
