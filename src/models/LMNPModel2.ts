
import{ChargesExternes} from'./ChargesExternes'
import{Impots} from'./Impots'
import{Mobilier} from './AmortissementMobilier'

export class LMNP {
   
    chargesExternes = new ChargesExternes();
    totalChargesExternes = 0;
    impots=new Impots();
    totalImpots=0;
    mobilier=new Mobilier()
    annuite=0;
}

