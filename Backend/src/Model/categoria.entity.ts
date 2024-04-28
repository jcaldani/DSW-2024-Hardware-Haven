import {
    Entity,
    Property
  } from '@mikro-orm/core'
  import { BaseEntity } from '../shared/db/baseEntity.entity.js'

//import {Componenete}  from './Componente.entity.js'

@Entity()
export class Categoria extends BaseEntity {
    
    @Property({nullable:false})
    descripcion!: string;

    /*@ManyToOne(() => Componente,{nullable:false})
    componente!: Componente;*/


    constructor(descripcion:string
      //,componente:Componente
     ) {
      super(); 
      this.descripcion = descripcion;
      //this.componente = componente;
  }

}
