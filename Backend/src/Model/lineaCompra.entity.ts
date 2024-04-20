import {
    Entity,
    Property,
    ManyToOne, 
    PrimaryKey
    
  } from '@mikro-orm/core'
  
import{Compra} from './compra.entity.js'
//import{Componente} from './componente.entity.js'



  
@Entity()
export class LineaCompra{
    @PrimaryKey()
    nroLinea?: number

    @Property({nullable:false})
    cantidad!: number;
    
    @Property({ type: 'decimal', precision: 9, scale: 3 })
    subTotal!: number;

    @ManyToOne(() => Compra,{primary:true, nullable:false})
    compra!: Compra;

    /*@ManyToOne(() => Componente ,{nullable:false})
    componente!: Componente;*/

}
