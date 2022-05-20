import { watch, watchEffect, reactive } from 'vue';
import { LMNP } from '../models/LMNPModel2';
import {ChargesExternes} from '../models/ChargesExternes';
import{Impots}from '../models/Impots';
import { Mobilier } from '@/models/AmortissementMobilier';

const lmnp = reactive(new LMNP())
const TX_AMORT_MOBILIER = 0.1;

watch(lmnp, () => { 
    lmnp.totalChargesExternes = calculeTotalChargesExternes(lmnp.chargesExternes);
    lmnp.totalImpots = calculeTotalImpots(lmnp.impots);
    lmnp.annuite= calculeAmorMobilier(lmnp.mobilier);
 }, 
 { immediate: true })


function calculeTotalChargesExternes(chargesExternes : ChargesExternes) : number {
    let totalChargesExternes = lmnp.chargesExternes.fraisAdministration +lmnp.chargesExternes.fraisLocal+lmnp.chargesExternes.indemnitésEviction+lmnp.chargesExternes.chargesLocatives+lmnp.chargesExternes.primesAssurances+lmnp.chargesExternes.provisionsChargesCopro
        
    return totalChargesExternes;
}

function calculeTotalImpots (impots:Impots): number{
    let totalImpots = lmnp.impots.Impots

    return totalImpots;
}

function calculeAmorMobilier (mobilier:Mobilier): number{
    let annuite =lmnp.mobilier.Mobilier * TX_AMORT_MOBILIER
    return annuite;
}

export function useLmnpService() {

    return {
        lmnp
    };
}



