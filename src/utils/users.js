const users = []

const addUser = ({id,username,room})=>{
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // validate the data
    if (!username || !room) {
        return {
            error: 'Username and room must be provided'
        }
    }

    // check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    if(existingUser){
        return{
            error: 'Username is already in use!'
        }
    }

    // store the user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user)=>user.id===id) //findIndex finds the position of array

    if(index !== -1) {
        return users.splice(index, 1)[0] // this returns array so [0] is for suppose if we remove many users we can hardcode to see which users got removed 
    }
}

const getUser = (id) => {
    return users.find((user)=>user.id === id)
}

const getUsersInRoom = (room)=>{
    room = room.trim().toLowerCase()
    return users.filter((user)=>user.room===room)
}

// addUser({
//     id: 33,
//     username: 'Vasant',
//     room: 'India'
// })

// addUser({
//     id: 22,
//     username: 'Vasantram',
//     room: 'India'
// })

// addUser({
//     id: 42,
//     username: 'sant',
//     room: 'TN'
// })

// // const removedUser = removeUser(22)
// // console.log(removedUser)
// console.log(users)

// const user = getUser(42)
// const usersInRoom = getUsersInRoom('india')
// //console.log(user)
// console.log(usersInRoom)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}



