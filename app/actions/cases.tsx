"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createCase(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return { error: "Please log in before creating a case." };
  }

  const chiefComplaint = String(formData.get("chief_complaint") ?? "").trim();

  const specialty = String(formData.get("specialty") ?? "").trim();

  const rawAge = String(formData.get("age") ?? "").trim();
  const age = rawAge === "" ? null : Number(rawAge);

  const sexValue = String(formData.get("sex") ?? "").trim();
  const sex = sexValue === "" ? null : sexValue.toLowerCase();

  const allowedSpecialties = [
    "Internal Medicine",
    "Pediatrics",
    "Surgery",
    "Obstetrics & Gynecology",
  ];

  if (!chiefComplaint || chiefComplaint.length > 200) {
    return { error: "Enter a chief complaint (up to 200 characters)." };
  }

  if (!allowedSpecialties.includes(specialty)) {
    return { error: "Please select a valid specialty." };
  }

  if (age !== null && (!Number.isInteger(age) || age < 0 || age > 120)) {
    return { error: "Enter a valid age between 0 and 120." };
  }

  if (sex !== null && !["male", "female"].includes(sex)) {
    return { error: "Please select a valid sex option." };
  }
  const { data, error } = await supabase
    .from("cases")
    .insert({
      user_id: user.id,
      chief_complaint: chiefComplaint,
      specialty,
      age,
      sex,
      current_step: 0,
    })
    .select("id")
    .single();

  if (error) {
    console.error("Create case failed:", error.message);
    return { error: "Could not save the case. Please try again." };
  }

  revalidatePath("/dashboard");
  redirect(`/cases/${data.id}`);
}
