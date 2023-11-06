# Repro for Firebase Tools issue 6494

firebase-tools: v12.8.0<br>
firebase-js-sdk: v10.5.2<br>

### Steps to reproduce

1. Run `firebase emulators:start --project demo-test`
1. In a different terminal, run `cd web-app`
1. Run `npm run start`
1. Open "http://127.0.0.1:3000"
1. Click the "Sign in with Google" button
   - Sign in as expected
1. Logs in the terminal running the Firebase emulator should show that `beforeUserSignedIn` was triggered.
```shell
i  functions: Beginning execution of "us-central1-beforesignin"
>   ------------- beforeUserSignedIn --------------- 
>  beforesignin: {"uid":"JK75ynwWReVROYsEd3sTlu6VLv4N","email":"chicken.olive.386@example.com","emailVerified":true,"displayName":"Chicken Olive","disabled":false,"metadata":{"creationTime":"Mon, 19 Jan 55818 16:58:17 GMT","lastSignInTime":"Mon, 19 Jan 55818 16:58:17 GMT"},"providerData":[{"uid":"3410642192363621136445921929571185356542","displayName":"Chicken Olive","email":"chicken.olive.386@example.com","providerId":"google.com"}],"customClaims":{},"tokensValidAfterTime":null,"multiFactor":null}
i  functions: Finished "us-central1-beforesignin" in 21.108289ms
```