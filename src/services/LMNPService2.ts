import { watch, watchEffect, reactive } from 'vue';
import { LMNP } from '../models/LMNPModel2';
import {ChargesExternes} from '../models/ChargesExternes';
import{Impots}from '../models/Impots';
import { Mobilier } from '@/models/AmortissementMobilier';

const lmnp = reactive(new LMNP())
const TX_AMORT_MOBILIER = 0.1;

/*var date = document.getElementById("start_date").value;
var dateBegin = moment(date);

var dateEnd = moment().endOf("year");

var duration = moment.duration(dateEnd.diff(dateBegin));
var days = Math.round(duration.asDays());

var daysYear = 365;*/

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
    let annuite =lmnp.mobilier.Mobilier * TX_AMORT_MOBILIER;
    let vnc = lmnp.mobilier.Mobilier-annuite;
    return annuite;
    return vnc
    
}

/*function calculDates(annees: Annees): Annees {
  let prorataJours = annees.dateDebut;

  return { dateFin };
}*/

export function useLmnpService() {

    return {
        lmnp
    };
}



