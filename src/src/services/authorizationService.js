
let storage = {
    users : [],
    currentUser : {}
}

const checkUserExists = (cnpj) => {
    return storage.users.filter(user => user.cnpj == cnpj)
}

export const getUser = () => {
    console.log(storage)
    return storage.currentUser
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