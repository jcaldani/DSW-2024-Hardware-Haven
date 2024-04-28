import { Comp } from "../model/componente.entity.js";
import { orm } from '../shared/db/orm.js';
const em = orm.em;
export class CompRepository {
    async findAll() {
        try {
            const comps = await em.find(Comp, {});
            return comps;
        }
        catch (error) {
            return undefined;
        }
    }
    async findOne(item) {
        try {
            const comp = await em.findOneOrFail(Comp, { id: item.id });
            return comp;
        }
        catch (error) {
            return undefined;
        }
    }
    async add(item) {
        try {
            const new_comp = em.create(Comp, item);
            await em.flush();
            return new_comp;
        }
        catch (error) {
            return undefined;
        }
    }
    async update(item) {
        try {
            const id = item.id;
            const compToUpdate = await em.findOneOrFail(Comp, { id });
            em.assign(compToUpdate, item);
            await em.flush();
            return compToUpdate;
        }
        catch (error) {
            return;
        }
    }
    async delete(item) {
        try {
            const id = item.id;
            const comp = em.getReference(Comp, id);
            await em.removeAndFlush(comp);
            return comp;
        }
        catch (error) {
            return undefined;
        }
    }
    async findName(item) {
        try {
            const comp = await em.findOneOrFail(Comp, { name: item.name });
            return comp;
        }
        catch (error) {
            return undefined;
        }
    }
    async updateDescription(item, newDescription) {
        try {
            const id = item.id;
            const compToUpdate = await em.findOneOrFail(Comp, { id });
            compToUpdate.description = newDescription;
            await em.persistAndFlush(compToUpdate);
            return compToUpdate;
        }
        catch (error) {
            return undefined;
        }
    }
    async updateCompName(item, newCompName) {
        try {
            const id = item.id;
            const compToUpdate = await em.findOneOrFail(Comp, { id });
            compToUpdate.name = newCompName;
            await em.persistAndFlush(compToUpdate);
            return compToUpdate;
        }
        catch (error) {
            return undefined;
        }
    }
}
//# sourceMappingURL=compRepository.js.map