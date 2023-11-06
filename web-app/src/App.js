import './App.css';
import { signInWithGoogle } from './firebase';

function App() {
  async function signIn() {
    console.log(" ----- signIn ----- ")
    const res = await signInWithGoogle()
    console.log(res)
  }


  return (
    <div className="App">
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}

export default App;
