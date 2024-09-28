import {createClient} from "@supabase/supabase-js";

const supabase = createClient('https://uareivwawzfqnczdwurd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcmVpdndhd3pmcW5jemR3dXJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0NDM0NDYsImV4cCI6MjA0MzAxOTQ0Nn0.6E60At-ZXxTDgWyn1MiFwM_NyIs5TSx0zbpH6N-SnYM')

export default supabase