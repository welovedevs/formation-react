import {createContext} from "react";
import {ListUser} from "../../types/users";

export const UsersContext = createContext<{users: Array<ListUser>}>({users :[]})