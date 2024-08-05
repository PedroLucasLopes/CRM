import { useLocation } from "react-router-dom";

const usePathEmphasis = (path: string, style?: string) => {
  const { pathname }: { pathname: string } = useLocation();
  return pathname === path ? `opacity-100 ${style}` : `opacity-70 ${style}`;
};

export default usePathEmphasis;
