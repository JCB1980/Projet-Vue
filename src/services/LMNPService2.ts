import { watch, watchEffect, reactive } from 'vue';
import { LMNP } from '../models/LMNPModel2';
import {ChargesExternes} from '../models/ChargesExternes';

const lmnp = reactive(new LMNP())

watch(lmnp, () => { 
    lmnp.totalChargesExternes = calculeTotalChargesExternes(lmnp.chargesExternes);
 }, { immediate: true })


function calculeTotalChargesExternes(chargesExternes : ChargesExternes) : number {
    let totalChargesExternes = lmnp.chargesExternes.fraisAdministration 
        
    return totalChargesExternes;
}

export function useLmnpService() {

    return {
        lmnp
    };
}



