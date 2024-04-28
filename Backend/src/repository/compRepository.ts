import { Request, Response, NextFunction } from 'express'
import { Comp } from "../Model/component.entity.js";
import { orm } from '../shared/db/orm.js'

const em = orm.em;

export class CompRepository  {

    async findAll(): Promise<Comp[] | undefined> { 
        try {
            const comps = await em.find(
                Comp,
                {}
            
            );
            return comps;
        } catch (error: any) {
            return undefined;
        }
    }
    

    async findOne(item: { id: number }): Promise<Comp | undefined> {
        try {
            
            const comp = await em.findOneOrFail(
                Comp,
                { id: item.id }
            );
            return comp;
        } catch (error: any) {
            return undefined;
        }
    }

    

    async add(item: Comp): Promise<Comp | undefined> {
        try {
            const new_comp = em.create(Comp, item)
            await em.flush()
            return new_comp;
          } catch (error: any) {
           return undefined;
          }
    }

    async update(item: Comp): Promise<Comp | undefined>{
        try {            
            const id = item.id;
            const compToUpdate = await em.findOneOrFail(Comp, { id })
            em.assign(compToUpdate, item)
            await em.flush()
            return compToUpdate;
            
          } catch (error: any) {
            return
          }
    }

    async delete(item: { id: number; }): Promise<Comp | undefined> {
        try {
            const id = item.id;
            const  comp = em.getReference(Comp, id)
            await em.removeAndFlush(comp);
            return comp;
          } catch (error: any) {
            return undefined;
          }


    }
    
    async findName(item: { name: string }): Promise<Comp | undefined> {
        try {
            const comp = await em.findOneOrFail(
                Comp,
                { name: item.name }
            );
            return comp;
        } catch (error: any) {
            return undefined;
        }
    }

    async updateDescription(item: Comp, newDescription:string): Promise<Comp | undefined> {
        try {
            const id = item.id;
            const compToUpdate = await em.findOneOrFail(Comp, { id });
            compToUpdate.description = newDescription;
            await em.persistAndFlush(compToUpdate);
            return compToUpdate;
        } catch (error: any) {
            return undefined;
        }
        }

    async updateCompName(item: Comp, newCompName:string): Promise<Comp | undefined>{
        try {
            const id = item.id;
            const compToUpdate = await em.findOneOrFail(Comp, { id });
            compToUpdate.name = newCompName;
            await em.persistAndFlush(compToUpdate);
            return compToUpdate;
        } catch (error: any) {
            return undefined;
        }


}
}