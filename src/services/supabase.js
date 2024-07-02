import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://akicdrpcwntyvzmsclev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFraWNkcnBjd250eXZ6bXNjbGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5ODg4MTUsImV4cCI6MjAyODU2NDgxNX0.9YdS6mP3Fptrahqm2C_MDL-yG0iAc-hDI7LNZQNEC54";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
