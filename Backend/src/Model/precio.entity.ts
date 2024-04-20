import {
    Entity,
    OneToMany,
    Property,
    Cascade,
    Collection,
    ManyToOne,
    PrimaryKey,
  } from '@mikro-orm/core'
  

//import {Componenete}  from './Componente.entity.js'

@Entity()
export class Precio {

    @PrimaryKey({nullable:false})
    fechaDesde!: Date;
    
    @Property({ type: 'decimal', precision: 9, scale: 3 })
    precio!: number;

    /*@ManyToOne(() => Componente,{primary:true, nullable:false})
    componente!: Componente;*/

}
