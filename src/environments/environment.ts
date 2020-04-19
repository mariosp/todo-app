// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'http://localhost:3000',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
