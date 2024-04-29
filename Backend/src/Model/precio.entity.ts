import {
    Entity,
    OneToMany,
    Property,
    Cascade,
    Collection,
    ManyToOne,
    PrimaryKey,
    Rel,
  } from '@mikro-orm/core'
  

import {Componente}  from './componente.entity.js'

@Entity()
export class Precio {

    @PrimaryKey({nullable:false})
    fechaDesde!: Date;
    
    @Property({ type: 'decimal', precision: 9, scale: 3 })
    valor!: number;

    @ManyToOne(() => Componente,{primary:true, nullable:false})
    componente!: Rel<Componente>;;

    

    

    constructor(fechaDesde:Date, valor:number,componente:Rel<Componente>) {
   
      this.fechaDesde = fechaDesde;
      this.valor = valor;
      this.componente = componente;
  }

}
