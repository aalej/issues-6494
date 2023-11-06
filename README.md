# Repro for Firebase Tools issue 6494

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
>  beforesignin: {"uid":"i96B1AFuo5oxQGbr2FpfWOZC2erq","email":"otter.chicken.994@example.com","emailVerified":true,"displayName":"Otter Chicken","disabled":false,"metadata":{"creationTime":"Thu, 18 Dec 55817 18:31:58 GMT","lastSignInTime":"Thu, 18 Dec 55817 18:31:58 GMT"},"providerData":[{"uid":"9261709563690481253687327006614821084506","displayName":"Otter Chicken","email":"otter.chicken.994@example.com","providerId":"google.com"}],"customClaims":{},"tokensValidAfterTime":null,"multiFactor":null}
```