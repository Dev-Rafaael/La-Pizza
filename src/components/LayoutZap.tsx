import type { ReactNode } from "react";
import WhatsappIcon from "./whatsappIcon.tsx";
type LayoutZapProps = {
  children: ReactNode;
};
function LayoutZap({ children }: LayoutZapProps) {
  return (
    <>
      {children}

      <WhatsappIcon />
    </>
  );
}

export default LayoutZap;
