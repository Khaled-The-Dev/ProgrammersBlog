// importing variables etc...
import { Supabase, SignInButton } from './app.js'


// listening for a click event a signing in the user 
SignInButton.onclick = async () => {
  let { data, error } = await Supabase.auth.signInWithOAuth({
  provider: 'google'
  })
}