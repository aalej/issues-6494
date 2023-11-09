# Repro for Firebase Tools issue 6494

firebase-tools: v12.8.1<br>
firebase-js-sdk: v10.5.2<br>

### Installing dependencies

Steps to install dependencies and build web app. Alternatively, run
`bash install-dep.bash` to install dependencies and build the web app.

1. Run `npm install` for the ff folders:
   - http-func
   - functions
   - pubsub
   - web-app
1. Run `npm run buid` for the ff:
   - web-app

### Steps to reproduce

1. Run `firebase emulators:start --project demo-test`
1. Open "http://127.0.0.1:5000"
1. Click the "Sign in with Google" button
   - Sign in as expected
1. Logs in the terminal do not show that `beforeUserSignedIn` was triggered

### Notes

http-func - contains a single http function<br>
functions - contains the auth trigger<br>
pubsub - contains the pubsub function<br>
web-app - contains a web application for auth to trigger `beforeUserSignedIn`<br>

Issue seems to be caused by usage of codebases(?) moving the codebase with the
auth trigger to the last index resolves the auth trigger issue.
