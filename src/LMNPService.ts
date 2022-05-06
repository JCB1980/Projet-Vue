import { watch, watchEffect, reactive } from 'vue';
import { LMNP } from '@/LMNPModel';
import { ValeurImmobilisable } from './ValeurImmobilisableModel';

const lmnp = reactive(new LMNP())

watch(lmnp, () => { 
    lmnp.valeurAmortissable = calculeValeurAmortissable(lmnp.valeurImmobilisable);
 }, { immediate: true })


function calculeValeurAmortissable(valeurImmobilisable : ValeurImmobilisable) : number {
    let valeurAmortissable = lmnp.valeurImmobilisable.prixDuBien +
        lmnp.valeurImmobilisable.honorairesAgence +
        lmnp.valeurImmobilisable.fraisNotaire +
        lmnp.valeurImmobilisable.fraisBancaire +
        lmnp.valeurImmobilisable.valeurMobilier
    return valeurAmortissable;
}

export function useLmnpService() {

    return {
        lmnp
    };
}