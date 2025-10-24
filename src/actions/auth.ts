"use server";

import createSupabaseServerClient from "@/supabase/server";

const authenticate = async (email: string, password: string) => {
  try {
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  } catch (error) {
    console.error("Authentication error", error);
    throw error;
  }
};

export default authenticate;
