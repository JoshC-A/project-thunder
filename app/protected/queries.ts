"use server";

import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";

type Client = SupabaseClient<Database>;

export const getEmailsByUserId = async (client: Client, id: string) => {
  const { data, error } = await client
    .from("emails")
    .select("*")
    .eq("user", id);

  if (error) {
    console.error(error);
    throw new Error("Error retrieving email data");
  }

  return data;
};
