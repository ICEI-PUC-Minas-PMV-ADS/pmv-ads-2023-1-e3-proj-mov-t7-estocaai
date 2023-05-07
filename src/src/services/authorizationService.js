
let storage = {
    users : [],
    currentUser : {}
}

const checkUserExists = (cnpj) => {
    return storage.users.filter(user => user.cnpj == cnpj)
}

export const getUser = () => {
    return storage.currentUser
}

export const updateUser = (updateUser) => {
    const user = storage.currentUser
    user.cnpj = updateUser.cnpj
    user.name = updateUser.name
    user.email = updateUser.email
    storage = {
        ...storage,
        currentUser : {
            ...storage.currentUser,
            user
        }
    }
    console.log(storage)
}

export const createUser = (createUser) => {
    storage = {
        ...storage,
        users : [
            ...storage.users,
            checkUserExists(createUser.cnpj).length == 0 ? createUser : {}
        ]
    }
}

export const doLogin = (cnpj, pass) => {
    const user = storage.users.filter(user => user.cnpj == cnpj && user.password == pass)
    if(user.length != 0){
        storage.currentUser = user[0]
        console.log(storage)
        return true
    }
    return false
}