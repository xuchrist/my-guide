<template>
    <yd-layout>
        请用手机访问
        <span>{{timecount1}}</span>
    </yd-layout>
</template>
 
<script>
    export default {
        data() {
            return {
                timecount: this.$moment().set('minute', 30).set('second', 1),
                timecount1: ""
            }
        },
        
        created() {
            var self = this;
            self.$moment(self.timecount).format("mm:ss")
            self.timer = setInterval(function() {
                self.timecount = self.$moment(self.timecount).subtract(1, 's').format("YYYY-MM-DD hh:mm:ss")
                self.timecount1 = self.$moment(self.timecount).format("mm:ss") 
                if(self.timecount1=="29:50"){
                      clearInterval(self.timer); //关闭 
                }
            }, 1000);
        },
        beforeDestroy() {
            if (this.timer) { //如果定时器还在运行 或者直接关闭，不用判断
                clearInterval(this.timer); //关闭
            }
        }
    }
</script>
 
<style scoped>

</style>