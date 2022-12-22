// importing the Supabase Client
import { Supabase } from './app.js'


// Importing data from the supabase database

let { data, error } = await Supabase
.from('Posts')
.select('*')

// exporting the data ( array )
export default data