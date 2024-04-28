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
    
    @Property({ type: 'decimal', precision: 9, scale: 3, nullable: true })
    subTotal!: number;

    @ManyToOne(() => Compra,{primary:true, nullable:false})
    compra!: Compra;

    /*@ManyToOne(() => Componente ,{nullable:false})
    componente!: Componente;*/

    constructor(cantidad:number, compra:Compra
      //,componente:Componente
    )
     {
      
      this.cantidad = cantidad;
      this.compra = compra;
      //this.componente = componente;
  }
  setSubTotal(subTotal:number)
  {
    this.subTotal = subTotal
  }

}
