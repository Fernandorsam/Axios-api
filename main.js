const url = "http://localhost:5500/api";

//GET com Axios-API buscando varios usuarios
function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.log(error));
}

// POST com Axios adicionando usuarios
function addUsers(newUser){
    axios.post(url,newUser)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

// GET com Axios buscando um usuario pelo ID
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {

        userName.textContent = response.data.name
        userCity.textContent = response.data.city;
        userAvatar.src = response.data.avatar;   
    })
    .catch(error => console.log(error))
}


// PUT com Axios alterando dados do usuario
function updateUser(id,setUser){
    axios.put(`${url}/${id}`,setUser)
    .then((response) => console.log(response))    
    .catch((err) => console.error(error));
}

//DELETE com Axios 
function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then((response) =>console.log(response))
    .catch((err) => console.error(err));
}


const newUser = {//adicionando novo usuario com POST
    name: "Fulano de Tal",
    avatar : "https://picsum.photos/200/300",
    city : "Sao-Sp"
}
const setUser = {// alterando usuario com metodo PUT
    name:"Alguem Por Ai",
    city: "BSB-DF",
    avatar: "https://picsum.photos/200/300"
}

getUsers();
//addUsers(newUser);
getUser(3);
updateUser(3,setUser);
deleteUser(1)

