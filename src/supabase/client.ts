import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./types";

const createSupabaseClient = () => {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
};

export default createSupabaseClient;
