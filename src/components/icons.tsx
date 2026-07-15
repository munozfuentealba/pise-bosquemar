import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconHome(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M15.5 12.2c2.2.3 3.8 2 3.8 4.3" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15.2 15.2" />
    </svg>
  );
}

export function IconSiren(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 2 20h20L12 2Z" />
      <path d="M12 9v5" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.2l1.3 4.2-2 1.6a12 12 0 0 0 6.7 6.7l1.6-2 4.2 1.3V19a2 2 0 0 1-2.2 2C10.5 20.6 3.4 13.5 3 6.2A2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export function IconCross(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L3 17.5 6.5 21l6.3-6.3a4 4 0 0 0 4.9-5.4l-2.9 2.9-2.1-.5-.5-2.1 2.5-2.3Z" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6.2v5.4c0 4.6-3 8.1-7 9.9-4-1.8-7-5.3-7-9.9V6.2L12 3.5Z" />
      <path d="M9 12.2l2 2 4-4.4" />
    </svg>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c1 2.5-2.5 3.8-2.5 7 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.6-.9-2.4-1.5-3.2.3 1.4-.4 2.2-1 2.2-.9 0-1-1-.6-1.8C15.2 5.5 13.5 4 12 3Z" />
      <path d="M8.5 12.5A5.5 5.5 0 0 0 12 21a5.5 5.5 0 0 0 3.5-9.7" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c8 0 14-6 14-15-9 0-15 6-15 14 0 .3 0 .7.1 1Z" />
      <path d="M9 15c2.5-2.5 5-5 9-9" />
    </svg>
  );
}

export function IconGraduationCap(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" />
      <path d="M7 11.2v4.3c0 1.4 2.3 2.5 5 2.5s5-1.1 5-2.5v-4.3" />
      <path d="M21.5 9v5.5" />
    </svg>
  );
}

export function IconBriefcase(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </svg>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3.5" width="11" height="17" rx="1" />
      <path d="M8 7.5h3M8 11h3M8 14.5h3" />
      <path d="M15 10h5v10.5h-5" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.2A8.5 8.5 0 1 1 9.8 4a7 7 0 0 0 10.2 10.2Z" />
    </svg>
  );
}

export function IconChat(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5h16v11H9.5L5 20.5v-4H4v-11Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

export function IconSend(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12 20 4l-6 16-3-6-7-2Z" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.3.2-.7.2-1.2.1-1.3-.1-.2-.3-.2-.5-.3Z" />
      <path d="M12 2.5A9.5 9.5 0 0 0 3.6 17l-1.1 4 4.2-1.1A9.5 9.5 0 1 0 12 2.5Zm0 17.3a7.7 7.7 0 0 1-4-1.1l-.3-.2-2.5.7.7-2.4-.2-.3a7.8 7.8 0 1 1 6.3 3.3Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBook(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.2c2.4-1 5-1.2 8 0v14c-3-1.2-5.6-1-8 0V5.2Z" />
      <path d="M20 5.2c-2.4-1-5-1.2-8 0v14c3-1.2 5.6-1 8 0V5.2Z" />
    </svg>
  );
}

export function IconScale(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M8 21h8" />
      <path d="M5 7h6M13 7h6" />
      <path d="M5 7 2.5 12.5a2.5 2.5 0 0 0 5 0L5 7ZM19 7l-2.5 5.5a2.5 2.5 0 0 0 5 0L19 7Z" />
    </svg>
  );
}

export const NAV_ICONS = {
  home: IconHome,
  comite: IconUsers,
  diagnostico: IconSearch,
  protocolos: IconSiren,
  directorio: IconPhone,
  primeros: IconCross,
  simulacros: IconCalendar,
  actualizacion: IconWrench,
} as const;
