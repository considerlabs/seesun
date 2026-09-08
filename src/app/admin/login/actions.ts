"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, getSessionToken, verifyCredentials } from "@/lib/auth";

export async function loginAction(formData: FormData) {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!verifyCredentials(username, password)) {
    redirect("/admin/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, getSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/admin/login");
}
