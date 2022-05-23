import { watch, watchEffect, reactive } from 'vue';
import { LMNP } from '../models/LMNPModel';
<<<<<<< HEAD
import { SommeAmorCopo } from '../models/ValeurImmobilisableModel';

=======
import { ValeurImmobilisable } from '../models/ValeurImmobilisableModel';
>>>>>>> 2ed989d545862893acb4b4d71ebf05c67aa121f7

const lmnp = reactive(new LMNP())

watch(lmnp, () => { 
<<<<<<< HEAD
    lmnp.valeurAmortissable = calculeSommeImmoCorpo(lmnp.sommeAmorCorp);
 }, { immediate: true })


function calculeSommeImmoCorpo(valeurImmobilisable : SommeAmorCopo) : number {
    let SommeAmorCopo = lmnp.sommeAmorCorp.prixDuBien + lmnp.sommeAmorCorp.valeurMobilier
    return SommeAmorCopo;
=======
    lmnp.valeurAmortissable = calculeValeurAmortissable(lmnp.valeurImmobilisable);
 }, { immediate: true })


function calculeValeurAmortissable(valeurImmobilisable : ValeurImmobilisable) : number {
    let valeurAmortissable = lmnp.valeurImmobilisable.prixDuBien +
        lmnp.valeurImmobilisable.honorairesAgence +
        lmnp.valeurImmobilisable.fraisNotaire +
        lmnp.valeurImmobilisable.fraisBancaire +
        lmnp.valeurImmobilisable.valeurMobilier
    return valeurAmortissable;
>>>>>>> 2ed989d545862893acb4b4d71ebf05c67aa121f7
}

export function useLmnpService() {

    return {
        lmnp
    };
}