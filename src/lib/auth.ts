import type { AuthResponse, AuthUser } from '@/types/auth';

const TOKEN_KEY = 'oralsuite_token';
const USER_KEY = 'oralsuite_user';
const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3100';

export function saveAuth(response: AuthResponse): void {
  if (typeof window === 'undefined') return;

  localStorage.setItem(TOKEN_KEY, response.accessToken);
  localStorage.setItem(USER_KEY, JSON.stringify(response.user));
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser(): AuthUser | null {
  if (typeof window === 'undefined') return null;

  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
}

export function clearAuth(): void {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

export function redirectToDashboard(): void {
  window.location.href = `${DASHBOARD_URL}/dashboard`;
}
