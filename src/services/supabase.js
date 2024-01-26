import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yydbkzmjvasbpacjmukd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5ZGJrem1qdmFzYnBhY2ptdWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDUxNTIsImV4cCI6MjAyMDg4MTE1Mn0.YBahkEMSW_H8a0ZGJ5WMFaa_xKfhtSxhr4wmF0IBBYQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
