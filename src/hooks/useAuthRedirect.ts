import { useUserStore } from "../store/useUserStore";
import { useState } from "react";

export function useAuthRedirect() {
  const { user } = useUserStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);

  const requireAuth = (next: string) => {
    if (!user) {
      setNextPath(next);
      setShowAuthModal(true);
      return false;
    }

    if (!user.nome || !user.telefone) {
      setNextPath(next);
      setShowAuthModal(true);
      return false;
    }

    return true;
  };

  return { user, requireAuth, showAuthModal, setShowAuthModal, nextPath };
}
