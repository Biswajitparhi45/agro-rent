import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { UserSessionPayload, getCurrentUserServerFn, logoutServerFn } from "./server";

interface AuthContextType {
  user: UserSessionPayload | null;
  loading: boolean;
  setUser: (user: UserSessionPayload | null) => void;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const STORAGE_KEY = "agrirent_user_session";

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  setUser: () => {},
  logout: async () => {},
  refreshUser: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<UserSessionPayload | null>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : null;
      } catch {
        return null;
      }
    }
    return null;
  });
  const [loading, setLoading] = useState(true);

  const setUser = (u: UserSessionPayload | null) => {
    setUserState(u);
    if (typeof window !== "undefined") {
      if (u) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  };

  const refreshUser = async () => {
    try {
      setLoading(true);
      const res = await getCurrentUserServerFn();
      if (res?.user) {
        setUser(res.user);
      }
    } catch (e) {
      console.warn("Server session check notice:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const logout = async () => {
    try {
      await logoutServerFn();
    } catch (e) {
      console.warn("Server logout notice:", e);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
