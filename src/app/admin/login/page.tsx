import type { Metadata } from "next";
import { loginAction } from "./actions";

export const metadata: Metadata = {
  title: "관리자 로그인",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-sm px-4 pb-16 pt-28 md:px-6 md:pt-32">
      <h1 className="text-2xl font-bold">관리자 로그인</h1>

      <form
        action={loginAction}
        className="mt-8 space-y-4 rounded-lg border border-line bg-surface p-6"
      >
        {error ? (
          <p className="text-sm text-red-600">아이디 또는 비밀번호가 올바르지 않습니다.</p>
        ) : null}
        <div>
          <label className="block text-sm text-muted" htmlFor="username">
            아이디
          </label>
          <input
            id="username"
            name="username"
            required
            autoComplete="username"
            className="mt-1 w-full rounded border border-line px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-muted" htmlFor="password">
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="mt-1 w-full rounded border border-line px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-accent px-4 py-2 font-semibold text-white"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
