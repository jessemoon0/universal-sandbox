// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // Firebase serve
  // translocoUrl: 'http://localhost:5000',
  translocoUrl: 'http://localhost:4000',
  production: false,
  firebase: {
    apiKey: 'AIzaSyBbRTxKfgXFTjginlXpUhIp94oFSyNhNak',
    authDomain: 'dev-testing-1d2c7.firebaseapp.com',
    databaseURL: 'https://dev-testing-1d2c7.firebaseio.com',
    projectId: 'dev-testing-1d2c7',
    storageBucket: 'dev-testing-1d2c7.appspot.com',
    messagingSenderId: '98127711276',
    appId: '1:98127711276:web:be8d65b118d710a54f5589',
    measurementId: 'G-K6E0K01Q44'
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
