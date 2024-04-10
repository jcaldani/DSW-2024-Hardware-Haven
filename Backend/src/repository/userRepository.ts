import { User } from "../Model/userEntity.js";
import { Repositoy } from "../shared/repository.js";

 const users: User[] = [new User('Nacho', '555')]; 

export class UserRepository implements Repositoy<User> {

    
    public findAll(): User[] {
        return users; 
    }

    public findOne(item: { id: string }): User | undefined {
        return users.find(user => user.id === item.id); 
    }

    public add(item: User): User {
        users.push(item); 
        return item; 
    }

    public update(item: User): User | undefined {
    const user_id = users.findIndex((u)=> u.id === item.id)    
        if(user_id !== -1){  users[user_id] = { ...users[user_id], ...item} }
        return users[user_id]
    }

    public delete(item: { id: string; }): User | undefined {
    const user_id = users.findIndex((u)=> u.id === item.id)   
    if(user_id !== -1){  
        const deletedUsers = users[user_id]
        users.splice(user_id, 1)
        return deletedUsers
    }
    }
    
    public findName(item: { name: string }): User | undefined {
        return users.find(user => user.name === item.name); 
    }

    public updatePassword(item: User, newPassword:string): User | undefined {
        const user_id = users.findIndex((u)=> u.id === item.id)    
            if(user_id !== -1){  users[user_id].password = newPassword}
            return users[user_id]
        }

    public updateUserName(item: User, newUserName:string): User | undefined {
       const user_id = users.findIndex((u)=> u.id === item.id)    
            if(user_id !== -1){  users[user_id].name = newUserName}
            return users[user_id]
        }


}
