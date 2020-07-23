export const environment = {
  production: true,
  serverUrl: process.env.NODE_ENV === 'production' ? `${window.location.origin}/` : 'http://localhost:8080',
  firebase: {
    apiKey: 'AIzaSyBx-clRxjAtjniw1bxBG_p7-4DtnhKQX6g',
    authDomain: 'todos-angular-app.firebaseapp.com',
    databaseURL: 'https://todos-angular-app.firebaseio.com',
    projectId: 'todos-angular-app',
    storageBucket: 'todos-angular-app.appspot.com',
    messagingSenderId: '676540201517',
    appId: '1:676540201517:web:5792196cf1eb157b98d6a4'
  }
};


// export const baseUrl = 'http://localhost:3001/';

const url = (process.env.NODE_ENV === "production") ?
  `${window.location.origin}/`
  :
  'http://localhost:3001/' ;

console.log(url);
export const baseUrl = url;
