"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export function NavHeader({ items }: { items: NavItem[] }) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-white/10 bg-white/5 backdrop-blur-xl p-1 shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {items.map((item, idx) => (
        <Tab key={idx} setPosition={setPosition} href={item.href}>
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary-foreground md:px-6 md:py-2.5 md:text-base"
    >
      <Link to={href} className="flex items-center">
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-9 rounded-full bg-primary md:h-11"
    />
  );
};

export default NavHeader;
