import { ADMIN } from "@/constants/constants";
import createSupabaseServerClient from "@/supabase/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error || !data) {
      console.log("Error fetching user data", error);
      return;
    }

    if (data.type === ADMIN) {
      return redirect("/admin");
    }
  }

  return <>{children}</>;
};

export default AuthLayout;
