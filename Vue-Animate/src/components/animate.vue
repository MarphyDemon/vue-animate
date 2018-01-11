<template>
    <div class="chartline">
        <transition 
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"
            
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled">
            <div class="strip" v-if="show" ref="mychart"></div> 
        </transition>
    </div>
</template>

<script>
export default {
  name: "anmate",
  props: ['widthnum'],
  data() {
    return {
      show: false,
      start: 0
    };
  },
  created() {},
  mounted() {
        const that = this;
        that.init();
        that.show=true;
  },
  methods: {
    init() {
        var that = this;
        window.onresize=function() {
            if (document.body.offsetWidth<=that.widthnum) {
                that.$refs.mychart.style['width']=document.body.offsetWidth * 0.9+'px';
            }else{
                that.$refs.mychart.style['width']=that.widthnum+'px';
            }
        };
    },
    beforeEnter() {},
    animate(obj, css, interval, speedFactor, func) {
        var timer;
        clearInterval(timer);
        function getStyle(obj, prop) {
            if (obj.currentStyle)
                return obj.currentStyle[prop];
            else
                return document.defaultView.getComputedStyle(obj, null)[prop];
        }
        timer = setInterval(function() {
            for (var prop in css) {
                var cur = 0;
                if (prop == "opacity"){
                        cur = Math.round(parseFloat(getStyle(obj, prop)) * 100);
                    }
                else{ 
                        cur = parseInt(getStyle(obj, prop));
                    }
                var speed = speedFactor;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (cur == css[prop]){
                    clearInterval(timer);
                    if (func) func();
                }
                if (prop == "opacity") {
                    obj.style.filter = "alpha(opacity : '+(cur + speed)+' )";
                    obj.style.opacity = (cur + speed) / 100;
                    if (cur == css[prop]){
                        clearInterval(timer);
                        if (func) func();
                    }
                }
                if (prop == "width" && cur != css[prop]) {
                    obj.style[prop] = cur + speed + "px";
                    if (cur >= css[prop]){
                        clearInterval(timer);
                        if (func) func();
                    }
                }
            }
        }, interval);
    },
    enter() {
            this.animate(this.$refs.mychart, { width: this.widthnum, opacity: 1 }, 1, 2);
    },
    afterEnter() {},
    enterCancelled() {},
    beforeLeave() {},
    leave() {},
    afterLeave() {},
    leaveCancelled() {}
  }
};
</script>

<style>
@import "../assets/css/animate.css";
.strip {
  width: 0;
  height: 20px;
  background: #a4b873;
  color: #fff;
  opacity: 0;
  margin: 0;
}
.chartline{
    /* display: inline-block; */
    display: -webkit-box;
}
</style>
