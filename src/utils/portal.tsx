import { ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";

export type RootId = "modalRoot"

export type PortalProps= {
  children: ReactNode,
  rootId: RootId
}

const Portal = ({ children, rootId }:PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])
  
  return mounted
    ? createPortal(children, document.getElementById(rootId) as HTMLElement)
    : null;
};

export default Portal;