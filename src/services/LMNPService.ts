import { watch, watchEffect, reactive } from 'vue';
import { LMNP } from '../models/LMNPModel';
import { SommeAmorCopo } from '../models/ValeurImmobilisableModel';


const lmnp = reactive(new LMNP())

watch(lmnp, () => { 
    lmnp.valeurAmortissable = calculeSommeImmoCorpo(lmnp.sommeAmorCorp);
 }, { immediate: true })


function calculeSommeImmoCorpo(valeurImmobilisable : SommeAmorCopo) : number {
    let SommeAmorCopo = lmnp.sommeAmorCorp.prixDuBien + lmnp.sommeAmorCorp.valeurMobilier
    return SommeAmorCopo;
}

export function useLmnpService() {

    return {
        lmnp
    };
}