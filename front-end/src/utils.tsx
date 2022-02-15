const SERVER_ORIGIN = "http://localhost:12345";
const myId = localStorage.getItem('myId');
 
const loginUrl = `${SERVER_ORIGIN}/auth`;

const postImagesUrl = `${SERVER_ORIGIN}/user/${myId}/item/save`;

const registerUrl = `${SERVER_ORIGIN}/sign-up`;

const postUrl = `${SERVER_ORIGIN}/user/${myId}/item/`;

// const getRandom = `${SERVER_ORIGIN}/getRandom`;

export const registe = (data: any) => {
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

export const login = (credential: any) => {
  // const token = localStorage.getItem('token')
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
export const postItem = (data: any,pid: string) => {
  
  return fetch(postUrl+pid+'/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to post');
    }
    return response;
  })
}
export const postImages = (data: any) => {
    
  return fetch(postImagesUrl,{
    method: 'POST',
    body: data
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to post img');
    }
    return response.json();
  })
}

export const getRandomPictures = () =>{
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
    
  }).then((response) => {
    
    if (response.status !== 200) {
      return defaultItems;
      // throw Error('Fail to get resourse');
    }
    return defaultItems;
  })
}