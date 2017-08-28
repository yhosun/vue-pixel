import Vue from 'vue';
import NCanvas from 'canvas';

new Vue({
    components: {NCanvas},
    el: '#main-canvas',
    template: '<n-canvas :pixel-data="pixelData" :colors="colors" ></n-canvas>',
    data() {
        return {
            pixelData: null,
            colors: null
        }
    },
    created() {
        const C = "C";        //Hat & Shirt
        const B = "B";     //Brown Hair & Boots
        const S = "S";  //Skin Tone
        const O = "O";      //Blue Overalls
        const Y = "Y";    //Yellow Buckles
        const W = "W";  //White Gloves
        const _ = "_";
        this.pixelData = [
            [_, _, _, _, _, _, _, _, _, _, _, _, _, _],
            [_, _, _, _, C, C, C, C, C, _, _, _, _, _],
            [_, _, _, C, C, C, C, C, C, C, C, C, _, _],
            [_, _, _, B, B, B, S, S, B, S, _, _, _, _],
            [_, _, B, S, B, S, S, S, B, S, S, S, _, _],
            [_, _, B, S, B, B, S, S, S, B, S, S, B, _],
            [_, _, B, B, S, S, S, S, B, B, B, B, _, _],
            [_, _, _, _, S, S, S, S, S, S, S, _, _, _],
            [_, _, _, C, C, O, C, C, C, C, _, _, _, _],
            [_, _, C, C, C, O, C, C, O, C, C, C, _, _],
            [_, C, C, C, C, O, O, O, O, C, C, C, C, _],
            [_, W, W, C, O, Y, O, O, Y, O, C, W, W, _],
            [_, W, W, W, O, O, O, O, O, O, W, W, W, _],
            [_, W, W, O, O, O, O, O, O, O, O, W, W, _],
            [_, _, _, O, O, O, _, _, O, O, O, _, _, _],
            [_, _, B, B, B, _, _, _, _, B, B, B, _, _],
            [_, B, B, B, B, _, _, _, _, B, B, B, B, _]];

        this.colors = {
            [C]: "229, 230, 232",
            [B]: "229, 230, 232",
            [S]: "229, 230, 232",
            [O]: "229, 230, 232",
            [Y]: "229, 230, 232",
            [W]: "229, 230, 232",
            [_]: "255, 255, 255"};
    }
});
