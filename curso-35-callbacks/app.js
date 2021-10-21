// Los  callbacks son funciones que se ejecutan dentro de otras funciones

// Los callbacks son asincronos (Que solo se leen dentro de una linea)

const users = [
    {
        id: 1,
        name: 'Dorian'

    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'dorian@gmail.com'
    },
    {
        id: 2,
        email: 'laura@gmail.com'
    }
]

const getUser = (id) => {
    const user = users.find(user => user.id == id)
    return promesa = new Promise((resolve, reject) => {
        if (!user) reject(`No existe el usuario con el id ${id}`)
        else resolve(user)
    })
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)

    return promesa = new Promise((resolve, reject) => {
        if (!email) reject(`${user.name} no tiene registrado un email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}

getUser(3)
    .then(user => {
        return getEmail(user)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

// Una "promesa", es un objeto que dentro de el tiene dos callbacks
// En una promesa, si se usan las llaves, se debe utilizar "return"
/*
    if (err) return console.log(err)

        getEmail(user, (err, res) => {
            if (err) return console.log(err)
            console.log(res)
        })

*/