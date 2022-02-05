
const SERVER_ORIGIN = 'http://jsmicro.cn:12345';
 
const loginUrl = `${SERVER_ORIGIN}/login`;

const registerUrl = `${SERVER_ORIGIN}/create`;

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