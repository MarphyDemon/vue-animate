<template>
    <div id="bar" ref="barChart">
        <div class="line" v-bind:style="{paddingTop: TopNum+'px',paddingBottom: BotNum+'px'}" v-for="(ele,index) in xaxis">
            <span>{{ele.name}}</span>
            <anmate 
                :widthnum="lineW[index]"
                ></anmate>
        </div>
    </div>
</template>

<script>
import Anmate from './animate'
export default {
    name: 'demo',
    components:{
        Anmate
    },
    data() {
        return {
            lineW: [],
            TopNum: 0,
            lineMax: 0,
            BotNum: 0,
        }
    },
    props:['xaxis','chartW','chartH','bgcolor','margin'],
    created(){
        window.vm = this;
    },
    mounted(){
        var that = this;
        that.init();
    },
    methods:{
        init(){
            var self = this;
            self.handle();
        },
        handle(){
            var that = this;
            that.lineMax = that.chartW - 100-that.margin[0]*2;
            var M = that.xaxis[0].num;
            for(let i = 1; i < that.xaxis.length; i++){
                if(M<that.xaxis[i].num){
                    M = that.xaxis[i].num;
                }
            }
            var avg = that.lineMax/M;
            for(let i = 0; i < that.xaxis.length; i++){
                that.lineW.push(parseInt(that.xaxis[i].num*avg));
            }
            var len = that.xaxis.length;
            that.TopNum = (that.chartH-(26*len))/len/2;
            that.BotNum = (that.chartH-(26*len))/len/2;
            var top = (that.chartH-(((that.TopNum + that.BotNum + 20)*len)))/2;
            var bottom = (that.chartH-(((that.TopNum + that.BotNum + 20)*len)))/2;
            that.$refs.barChart.style['paddingTop'] = top + 'px';
            that.$refs.barChart.style['paddingBottom'] = bottom + 'px';
            
            that.$refs.barChart.style['width'] = that.chartW + 'px';
            that.$refs.barChart.style['height'] = that.chartH-top-bottom + 'px';
            that.$refs.barChart.style['background'] = that.bgcolor;
            (that.margin.length&&that.margin.length == 1)?(that.$refs.barChart.style['paddingLeft'] = that.margin[0]+"px",that.$refs.barChart.style['paddingRight'] = that.margin[0]+"px"):(that.margin.length&&that.margin.length == 2)?(that.$refs.barChart.style['paddingLeft'] = that.margin[0]+"px",that.$refs.barChart.style['paddingRight'] = that.margin[0]+"px"):'';
        
        }
    }
}
</script>

<style lang="scss">
    #bar{
        .line{
            &:hover{
                background: #eee;
            }
            span{
                width: 80px;   
                padding: 0 5px;
                overflow: hidden;
                line-height: 20px;
                text-overflow:ellipsis;
                white-space: nowrap;
                margin-right: 10px;
                float: left;
            }
        }
    }
</style>
