"use server";

import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";

type Client = SupabaseClient<Database>;

export const getEmailsByUserId = async (client: Client, id: string) => {
  const { data, error } = await client
    .from("emails")
    .select("*")
    .eq("user", id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Error retrieving email data");
  }

  return data;
};

export const getAllEmailDataById = async (client: Client, id: string) => {
  const { data, error } = await client
    .from("emails")
    .select(
      `id,
        weather (
          id,
          location,
          temperature,
          feels_like,
          icon,
          wind_mph,
          uv_index
        ),
        stocks(
            id,
            name,
            ticker,
            open,
            close,
            date_from
          ),
        users(
            name
        )`
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching email data:", error);
    return null;
  }

  return data;
};
