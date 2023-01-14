import axios from "axios"
import _ from "lodash" // Returns eror by defualt because lodash does not come with built in type declarations ----> "Could not find a declaration file for module 'lodash'. '/Users/roy/Desktop/dev/ts_type_declarations/node_modules/lodash/lodash.js' implicitly has an 'any' type.""

// ----------------
// 1) Axios example
// ----------------
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string
      geo: { 
        lat: string,
        lng:string
        }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }

axios
    .get<User>("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
        const { data  } = res
        printUser(res.data) 
        /*
        Leanne Graham
        Sincere@april.biz
        1-770-736-8031 x56442
        */
    })
    .catch((e) => {
        console.log("Error!", e)
    })

axios
    .get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        const { data  } = res
        res.data.forEach(printUser)
        /*
        Leanne Graham
        Sincere@april.biz
        1-770-736-8031 x56442
        Ervin Howell
        Shanna@melissa.tv
        010-692-6593 x09125
        Clementine Bauch
        Nathan@yesenia.net
        1-463-123-4447
        Patricia Lebsack
        Julianne.OConner@kory.org
        493-170-9623 x156
        Chelsey Dietrich
        Lucio_Hettinger@annie.ca
        (254)954-1289
        Mrs. Dennis Schulist
        Karley_Dach@jasper.info
        1-477-935-8478 x6430
        Kurtis Weissnat
        Telly.Hoeger@billy.biz
        210.067.6132
        Nicholas Runolfsdottir V
        Sherwood@rosamond.me
        586.493.6943 x140
        Glenna Reichert
        Chaim_McDermott@dana.io
        (775)976-6794 x41206
        Clementina DuBuque
        Rey.Padberg@karina.biz
        024-648-3804
        */
    })
    .catch((e) => {
        console.log("Error!", e)
    })

const printUser = (user: User) => {
    console.log(user.name)
    console.log(user.email)
    console.log(user.phone)
}

// -----------------------------------------
// 2) Lodash example. We install with npm ->
// npm install --save-dev @types/lodash
// -----------------------------------------
_.sample([1, 2, 3])
