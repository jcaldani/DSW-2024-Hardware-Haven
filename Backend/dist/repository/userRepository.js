import { User } from "../Model/userEntity.js";
const users = [new User('Nacho', '555')];
export class UserRepository {
    findAll() {
        return users;
    }
    findOne(item) {
        return users.find(user => user.id === item.id);
    }
    add(item) {
        users.push(item);
        return item;
    }
    update(item) {
        const user_id = users.findIndex((u) => u.id === item.id);
        if (user_id !== -1) {
            users[user_id] = { ...users[user_id], ...item };
        }
        return users[user_id];
    }
    delete(item) {
        const user_id = users.findIndex((u) => u.id === item.id);
        if (user_id !== -1) {
            const deletedUsers = users[user_id];
            users.splice(user_id, 1);
            return deletedUsers;
        }
    }
}
//# sourceMappingURL=userRepository.js.map