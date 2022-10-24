import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function RouteTransition({ children }: Props) {
  const { pathname } = useRouter();

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="routeTransition"
        key={pathname}
        initial={{ opacity: 0, translateY: 7 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 7 }}
        transition={{ duration: 0.18 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
