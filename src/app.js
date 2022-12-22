// importing API keys etc...
import { Config } from './Config.js'

// initializing and exporting supabase to other files


export const Supabase = supabase.createClient(Config.Urls.Supabase, Config.Keys.Supabase)


// Selecting a few elements and exporting them

export const SignInButton = document.getElementById('SignInButton')