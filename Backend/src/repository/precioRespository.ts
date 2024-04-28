
import { Precio } from '../Model/precio.entity.js'; 
import { orm } from '../shared/db/orm.js';

const em = orm.em;

export class PrecioRepository  {

    async findAll(): Promise<Precio[] | undefined> { 
        try {
            const precios = await em.find(
                Precio,
                {}
                ,{ populate: [
                //, 'componente'
            ] }
            );
            return precios;
        } catch (error: any) {
            return undefined;
        }
    }
    

    async findOne(item: { fechaDesde: Date, componenteId:number }): Promise<Precio | undefined> {
        try {
            
            const precio = await em.findOneOrFail(
                Precio,
                { fechaDesde: item.fechaDesde, 
                //    componente:{id: item.componenteId}
                 }
                //,{ populate: ['componente'] }
            );
            return precio;
        } catch (error: any) {
            return undefined;
        }
    }

    

    async add(item: Precio): Promise<Precio | undefined> {
        try {
            const new_precio = em.create(Precio, item)
            await em.flush()
            return new_precio;
          } catch (error: any) {
           return undefined;
          }
    }

    /*
    async update(item: Precio): Promise<Precio | undefined>{
        try {            
            
            const precioToUpdate = await this.findOne({fechaDesde:item.fechaDesde, componenteId:item.componente.id })
            if(precioToUpdate){
            em.assign(precioToUpdate, item)
            await em.flush()
            return precioToUpdate;
            }else {
                console.error('Precio not found');
                return undefined;
            }
            
          } catch (error: any) {
            return undefined;
          }
    }
    */

    async delete(item: { fechaDesde: Date, componenteId:number }): Promise<Precio | undefined> {
        try {
            
              
            const precio = await this.findOne(item);

            if (precio) {
                await em.removeAndFlush(precio);
                return precio;
            } else {
                console.error('Precio not found');
                return undefined;
            }

          } catch (error: any) {
            return undefined;
          }
    }
    
   


 /*
    async updateValor(item: Precio, newValor:number): Promise<Precio | undefined> {
        try {
            
            if (!item.fechaDesde || !item.componente.id) {
                console.error('ERROR');
                return undefined;
            }
            const precioToUpdate = await this.findOne({ fechaDesde: item.fechaDesde, componenteId: item.componente.id });
            if (precioToUpdate) {
            precioToUpdate.valor = newValor;
            await em.persistAndFlush(precioToUpdate);
            return precioToUpdate;
            } 
            else {
            console.error('Precio not found');
            return undefined;
            }

        } catch (error: any) {
            return undefined;
        }
        }
        */

       


}