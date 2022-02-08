
const SERVER_ORIGIN = '';
 
const loginUrl = `${SERVER_ORIGIN}/login`;

const registerUrl = `${SERVER_ORIGIN}/create`;

const getRandom = '${SERVER_ORIGIN}/getRandom';

export const registe = (data) => {
    return fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status !== 201) {
        throw Error('Fail to register');
      }
    })
  }

export const login = (credential) => {
  const token = localStorage.getItem('token')
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization' : 'Bearer '+ token
    },
  //   credentials: 'include',
    body: JSON.stringify(credential)
  }).then((response) => {
    if (response.status !== 200) {
      console.log("false to login");
      throw Error('Fail to log in');
    }
    return response.json();
  })
  }

export const getRandomPictures = (data) =>{
  //   return defaultItems;
  const defaultItems = [
    {
      id:1,
      name: 'goggle',
      image:'../images/20210327_091131389_iOS.jpg',
      price: 3
    },
  ]
  return fetch(registerUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
    
  }).then((response) => {
    
    if (response.status !== 200) {
      return defaultItems;
      throw Error('Fail to get resourse');
    }
    return defaultItems;
  })
}