import { initializeApp } from "firebase/app"
import { getAuth, connectAuthEmulator, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

initializeApp({
    projectId: "demo-test",
    apiKey: "useless",
    authDomain: "demo-test.firebaseapp.com",
    databaseURL: "https://demo-test.firebaseio.com",
})

const auth = getAuth()
connectAuthEmulator(auth, "http://127.0.0.1:9099")
auth.settings.appVerificationDisabledForTesting = true


export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider)
    return res
}