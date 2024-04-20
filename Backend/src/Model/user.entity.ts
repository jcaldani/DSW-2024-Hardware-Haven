import {
    Entity,
    OneToMany,
    Property,
    Cascade,
    Collection,
  } from '@mikro-orm/core'
  import { BaseEntity } from '../shared/db/baseEntity.entity.js'
  import { Compra } from './compra.entity.js';
@Entity()
export class User extends BaseEntity {

    @Property({nullable:false})
    name!: string;

    @Property({nullable:false})
    password!: string;

    @OneToMany(() => Compra, c => c.user, { cascade: [Cascade.ALL] })
    compras = new Collection<Compra>(this);

}

