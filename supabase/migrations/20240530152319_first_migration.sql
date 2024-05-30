create table "public"."emails" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "user" uuid,
    "weather" bigint,
    "stocks" bigint,
    "sent_at" timestamp with time zone default now(),
    "subject" text
);


alter table "public"."emails" enable row level security;

create table "public"."stocks" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "name" text,
    "ticker" text,
    "open" double precision,
    "close" double precision,
    "date_from" text
);


alter table "public"."stocks" enable row level security;

create table "public"."users" (
    "id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "name" text,
    "email" text,
    "active" boolean default true
);


alter table "public"."users" enable row level security;

create table "public"."weather" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "location" text,
    "temperature" real,
    "feels_like" real,
    "condition" text,
    "icon" text,
    "wind_mph" real,
    "uv_index" smallint
);


alter table "public"."weather" enable row level security;

CREATE UNIQUE INDEX emails_pkey ON public.emails USING btree (id);

CREATE UNIQUE INDEX stocks_pkey ON public.stocks USING btree (id);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

CREATE UNIQUE INDEX weather_pkey ON public.weather USING btree (id);

alter table "public"."emails" add constraint "emails_pkey" PRIMARY KEY using index "emails_pkey";

alter table "public"."stocks" add constraint "stocks_pkey" PRIMARY KEY using index "stocks_pkey";

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."weather" add constraint "weather_pkey" PRIMARY KEY using index "weather_pkey";

alter table "public"."emails" add constraint "public_emails_stocks_fkey" FOREIGN KEY (stocks) REFERENCES stocks(id) ON UPDATE RESTRICT ON DELETE SET NULL not valid;

alter table "public"."emails" validate constraint "public_emails_stocks_fkey";

alter table "public"."emails" add constraint "public_emails_user_fkey" FOREIGN KEY ("user") REFERENCES users(id) not valid;

alter table "public"."emails" validate constraint "public_emails_user_fkey";

alter table "public"."emails" add constraint "public_emails_weather_fkey" FOREIGN KEY (weather) REFERENCES weather(id) ON UPDATE RESTRICT ON DELETE SET NULL not valid;

alter table "public"."emails" validate constraint "public_emails_weather_fkey";

alter table "public"."users" add constraint "public_users_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."users" validate constraint "public_users_id_fkey";

grant delete on table "public"."emails" to "anon";

grant insert on table "public"."emails" to "anon";

grant references on table "public"."emails" to "anon";

grant select on table "public"."emails" to "anon";

grant trigger on table "public"."emails" to "anon";

grant truncate on table "public"."emails" to "anon";

grant update on table "public"."emails" to "anon";

grant delete on table "public"."emails" to "authenticated";

grant insert on table "public"."emails" to "authenticated";

grant references on table "public"."emails" to "authenticated";

grant select on table "public"."emails" to "authenticated";

grant trigger on table "public"."emails" to "authenticated";

grant truncate on table "public"."emails" to "authenticated";

grant update on table "public"."emails" to "authenticated";

grant delete on table "public"."emails" to "service_role";

grant insert on table "public"."emails" to "service_role";

grant references on table "public"."emails" to "service_role";

grant select on table "public"."emails" to "service_role";

grant trigger on table "public"."emails" to "service_role";

grant truncate on table "public"."emails" to "service_role";

grant update on table "public"."emails" to "service_role";

grant delete on table "public"."stocks" to "anon";

grant insert on table "public"."stocks" to "anon";

grant references on table "public"."stocks" to "anon";

grant select on table "public"."stocks" to "anon";

grant trigger on table "public"."stocks" to "anon";

grant truncate on table "public"."stocks" to "anon";

grant update on table "public"."stocks" to "anon";

grant delete on table "public"."stocks" to "authenticated";

grant insert on table "public"."stocks" to "authenticated";

grant references on table "public"."stocks" to "authenticated";

grant select on table "public"."stocks" to "authenticated";

grant trigger on table "public"."stocks" to "authenticated";

grant truncate on table "public"."stocks" to "authenticated";

grant update on table "public"."stocks" to "authenticated";

grant delete on table "public"."stocks" to "service_role";

grant insert on table "public"."stocks" to "service_role";

grant references on table "public"."stocks" to "service_role";

grant select on table "public"."stocks" to "service_role";

grant trigger on table "public"."stocks" to "service_role";

grant truncate on table "public"."stocks" to "service_role";

grant update on table "public"."stocks" to "service_role";

grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";

grant delete on table "public"."weather" to "anon";

grant insert on table "public"."weather" to "anon";

grant references on table "public"."weather" to "anon";

grant select on table "public"."weather" to "anon";

grant trigger on table "public"."weather" to "anon";

grant truncate on table "public"."weather" to "anon";

grant update on table "public"."weather" to "anon";

grant delete on table "public"."weather" to "authenticated";

grant insert on table "public"."weather" to "authenticated";

grant references on table "public"."weather" to "authenticated";

grant select on table "public"."weather" to "authenticated";

grant trigger on table "public"."weather" to "authenticated";

grant truncate on table "public"."weather" to "authenticated";

grant update on table "public"."weather" to "authenticated";

grant delete on table "public"."weather" to "service_role";

grant insert on table "public"."weather" to "service_role";

grant references on table "public"."weather" to "service_role";

grant select on table "public"."weather" to "service_role";

grant trigger on table "public"."weather" to "service_role";

grant truncate on table "public"."weather" to "service_role";

grant update on table "public"."weather" to "service_role";

create policy "Allow Select"
on "public"."emails"
as permissive
for select
to public
using (true);


create policy "Allow Select"
on "public"."stocks"
as permissive
for select
to public
using (true);


create policy "Insert Policy"
on "public"."users"
as permissive
for insert
to public
with check (true);


create policy "Select Policy"
on "public"."users"
as permissive
for select
to public
using (true);


create policy "Allow Select"
on "public"."weather"
as permissive
for select
to public
using (true);


