import {
    Entity,
    Property,
    ManyToOne, 
    PrimaryKey,
    Rel,
  } from '@mikro-orm/core'
  

import{Componente} from './componente.entity.js'
import { Compra } from './compra.entity.js';



  
@Entity()
export class LineaCompra{
    @PrimaryKey()
    nroLinea?: number

    @Property({nullable:false})
    cantidad!: number;
    
    @Property({ type: 'decimal', precision: 9, scale: 3, nullable: true })
    subTotal!: number;

    @ManyToOne(() => Compra,{primary:true, nullable:false})
    compra!: Rel<Compra>;

    @ManyToOne(() => Componente ,{nullable:false})
    componente!: Componente;

    constructor(cantidad:number, compra:Rel<Compra>, componente:Componente)
     {
      this.cantidad = cantidad;
      this.compra = compra;
      this.componente = componente;
  }
  setSubTotal(subTotal:number)
  {
    this.subTotal = subTotal
  }

}
