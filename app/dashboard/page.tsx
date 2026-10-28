
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Dashboard } from "@/components/dashboard/dashboard";
import { createCase } from "@/app/actions/cases";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/"); // Replace with your login route if needed
  }

  const { data: cases, error: casesError } = await supabase
    .from("cases")
    .select(
      "id, chief_complaint, age, sex, specialty, current_step, created_at, updated_at"
    )
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  if (casesError) {
    console.error("Failed to fetch cases:", casesError.message);
  }

  return (
    <Dashboard
      cases={cases ?? []}
      userEmail={user.email ?? ""}
    />
  );
}
