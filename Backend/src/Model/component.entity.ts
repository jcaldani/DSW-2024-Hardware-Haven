import {
    Entity,
    OneToMany,
    Property,
    Cascade,
    Collection,
  } from '@mikro-orm/core'
  import { BaseEntity } from '../shared/db/baseEntity.entity.js'
  
@Entity()
export class Comp extends BaseEntity {

    @Property({nullable:false})
    name!: string;

    @Property({nullable:false})
    description!: string;

  
}