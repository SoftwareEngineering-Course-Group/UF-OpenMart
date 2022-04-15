const SERVER_ORIGIN = "http://localhost:12345";;
 
const loginUrl = `${SERVER_ORIGIN}/auth`;

const registerUrl = `${SERVER_ORIGIN}/sign-up`;



const getFavorite = '';

// const getRandom = `${SERVER_ORIGIN}/getRandom`;
export const getName = (data: string) =>{
  let inforUrl = `${SERVER_ORIGIN}/user/${data}`
  return fetch(inforUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
    },
  }).then((response) => {
    if (response.status !== 200) {
      console.log("false to get infor");
      console.log(localStorage.getItem('jwtToken'))
      throw Error('Fail get infor');
    }
    return response.json();
  })
}

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
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credential)
  }).then((response) => {
    if (response.status !== 200) {
      console.log("false to login");
      throw Error('Fail to log in');
    }
    return response.json();
  })
}

export const deleteItem = (idNum: any) => {
  
  let myId = localStorage.getItem('myId');
  let id = {"id":Number(myId)}
  console.log(id);
  const deleteItemUrl = `${SERVER_ORIGIN}/user/${myId}/item/${idNum}/update`;
  return fetch(deleteItemUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
    },
    body: JSON.stringify(id)
  }).then((response) => {
    if (response.status !== 200) {
      console.log("false to delete");
      throw Error('Fail to delete');
    }
    return response.json();
  })
}

export const getInfo = () => {
  let myidd = localStorage.getItem('myId');
  let inforUrl = `${SERVER_ORIGIN}/user/${myidd}`
  return fetch(inforUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
    },
  }).then((response) => {
    if (response.status !== 200) {
      console.log("false to get infor");
      console.log(localStorage.getItem('jwtToken'))
      throw Error('Fail get infor');
    }
    return response.json();
  })
  }

  export const getPost = () => {
    let myidd = localStorage.getItem('myId');
    let getPostedUrl = `${SERVER_ORIGIN}/user/${myidd}/item/list`;
    let idNum = Number(myidd)
    let id = {"id":idNum}
    console.log(id)
    return fetch(getPostedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
      },
      body: JSON.stringify(id)
    }).then((response) => {
      if (response.status !== 200) {
        console.log("false to get posted items");
        throw Error('Fail to get posted items');
      }
      return response.json();
    })
    }

    export const getRandom = () => {
      let getPostedUrl = `${SERVER_ORIGIN}/home/list`;
      return fetch(getPostedUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
        },
      }).then((response) => {
        if (response.status !== 200) {
          console.log("false to get posted items");
          throw Error('Fail to get posted items');
        }
        return response.json();
      })
      }

      export const getCategory = (cate:string) => {
        let myidd = localStorage.getItem('myId');
        let getPostedUrl = `${SERVER_ORIGIN}/user/${myidd}/item/category/${cate}`;
        return fetch(getPostedUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
          },
        }).then((response) => {
          if (response.status !== 200) {
            console.log("false to get posted items");
            throw Error('Fail to get posted items');
          }
          return response.json();
        })
        }

    export const getItembyId = (ID:any) => {
      let myidd = localStorage.getItem('myId');
      let getItemUrl = `${SERVER_ORIGIN}/user/${myidd}/item/${ID}`;
      let idNum = Number(ID)
      let id = {"id":idNum}
      // console.log(getItemUrl)
      return fetch(getItemUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
        },
        body: JSON.stringify(id)
      }).then((response) => {
        if (response.status !== 200) {
          console.log("false to get posted items");
          throw Error('Fail to get posted items');
        }
        return response.json();
      })
      }

      export const getCommentsbyId = (ID:any) => {
        let myidd = localStorage.getItem('myId');
        let getItemUrl = `${SERVER_ORIGIN}/user/${myidd}/item/${ID}/comment/itemList`;
        console.log(getItemUrl);
        return fetch(getItemUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
          },
        }).then((response) => {
          if (response.status !== 200) {
            console.log("false to get comments");
            throw Error('Fail to get comments');
          }
          return response.json();
        })
        }

        export const postComment = (data: any) => {
          let myidd = localStorage.getItem('myId');
          let postUrl = `${SERVER_ORIGIN}/user/${myidd}/item/${data.item_id}/comment/save`;
          console.log(data)
          return fetch(postUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
            },
            body: JSON.stringify(data)
          }).then((response) => {
            console.log(response);
            if (response.status !== 201) {
              throw Error('Fail to post');
            }
            return response;
          })
        }
    
export const postItem = (data: any,pid: string) => {
  let myidd = localStorage.getItem('myId');
  let postUrl = `${SERVER_ORIGIN}/user/${myidd}/item/`;
  console.log(data)
  return fetch(postUrl+pid+'/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
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
  console.log(localStorage.getItem('jwtToken'));
  console.log(data);
  let myidd = localStorage.getItem('myId');
  let postImagesUrl = `${SERVER_ORIGIN}/user/${myidd}/item/save`;
  return fetch(postImagesUrl,{
    method: 'POST',
    headers: { 
      'Authorization': ('Bearer ' + localStorage.getItem('jwtToken')) || ''
    },
    body: data
  }).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to post img');
    }
    return response.json();
  })
}