import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const SESSION_COOKIE_NAME = "admin_session";

export function verifyCredentials(username: string, password: string) {
  const expectedUsername = process.env.ADMIN_USERNAME ?? "";
  const expectedPassword = process.env.ADMIN_PASSWORD ?? "";
  const given = createHash("sha256").update(`${username}:${password}`).digest();
  const expected = createHash("sha256")
    .update(`${expectedUsername}:${expectedPassword}`)
    .digest();
  return timingSafeEqual(given, expected);
}

export function getSessionToken() {
  const secret = process.env.SESSION_SECRET ?? "";
  return createHmac("sha256", secret).update("admin-session").digest("hex");
}

export function isValidSessionToken(token: string | undefined) {
  if (!token) return false;
  const given = Buffer.from(token);
  const expected = Buffer.from(getSessionToken());
  if (given.length !== expected.length) return false;
  return timingSafeEqual(given, expected);
}

export async function requireAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!isValidSessionToken(token)) {
    redirect("/admin/login");
  }
}
