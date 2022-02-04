export const userReducers = (state, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return {
                users: [...state.users, action.newUser]
            };
        }
        case 'DELETE_USER': {
            return {
                users: state.users.filter(({ name }) => name !== action.nameToDelete)
            };
        }
    }
};
