import type { FC, SVGProps } from 'react';

export const SuitcaseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a4.5 4.5 0 1 0-9 0v2.25M6.75 20.25H3.75a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v11.25a2.25 2.25 0 0 1-2.25 2.25h-3" />
  </svg>
);

export const ListIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5m3-15H4.5A2.25 2.25 0 0 0 2.25 4.5v15A2.25 2.25 0 0 0 4.5 21.75h15a2.25 2.25 0 0 0 2.25-2.25V4.5A2.25 2.25 0 0 0 19.5 2.25Z" />
  </svg>
);

export const SettingsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.424.35.534.954.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.127c-.331.183-.581.495-.644.87l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.995s-.145-.755-.437-.995l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.076-.124.072-.044.146-.087.22-.127.332-.183.582-.495.645-.87l.213-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const RemoveIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const VacuumIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9V4.5M15 9h4.5M15 9l5.25-5.25M15 15v4.5M15 15h4.5M15 15l5.25 5.25" />
    </svg>
);

export const ChevronLeftIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// --- ITEM ICONS ---
export const ShirtIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75l5.25-5.25h4.5l5.25 5.25-7.5 7.5-7.5-7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75H19.5" />
  </svg>
);

export const TrousersIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18M18 3v18M6 6.75h12M9 3h6" />
  </svg>
);

export const JacketIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75l2.25-2.25h10.5l2.25 2.25v13.5H4.5V6.75zM12 4.5v15" />
  </svg>
);

export const ShoesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l3-1.5 4.5 3 6-3.75 3 1.5-3.75 3H2.25v-2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 000 4.5h3.75A2.25 2.25 0 0012 12.75z" />
  </svg>
);

export const LaptopIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
  </svg>
);

export const PhoneIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
  </svg>
);

export const PassportIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h-9" />
  </svg>
);

export const ToothbrushIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 3.75v15a1.5 1.5 0 001.5 1.5h1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5m3-1.5v1.5m3-1.5v1.5m-9 3h12v4.5h-12z" />
  </svg>
);

export const HeadphonesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M4.886 18.364a9 9 0 010-12.728" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75c0-1.023.224-2 .63-2.872L12 12l5.37-3.878A3.75 3.75 0 0118 11.25v1.5a6 6 0 01-6 6h-1.5a3.75 3.75 0 01-3.75-3.75V18a3.75 3.75 0 013.75-3.75H12" />
  </svg>
);

export const UnderwearIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L7.5 3h9l3 7.5-6 6-6-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5h15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5l1.125 9h12.75l1.125-9" />
  </svg>
);

export const SocksIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5V9h3.75v2.25L12 6l5.25 5.25V9H21v7.5L16.5 21H7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 16.5L12 12" />
  </svg>
);

export const PajamasIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

export const SweaterIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM12 9v11.25m-4.5-4.5V11.25l-4.5 2.25v2.25l4.5-1.125m9 3.375V11.25l4.5 2.25v2.25l-4.5-1.125" />
  </svg>
);

export const DressIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75l2.25-2.25h-4.5L12 6.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V9m0 0l-3.75 3L12 21l3.75-9-3.75-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l-2.25-2.25M12 9l2.25-2.25" />
  </svg>
);

export const CoatIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.954a.75.75 0 011.06 0l8.954 8.954M2.25 12l8.954 8.954a.75.75 0 001.06 0l8.954-8.954M2.25 12h18.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
  </svg>
);

export const ScarfIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18m4.5-18v18m4.5-18v18M19.5 3v18M3 6.75h18M3 17.25h18" />
  </svg>
);

export const GlovesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m-4.5 0H21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V12a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25V3.75m6 0h-6m6 0a2.25 2.25 0 00-2.25-2.25h-1.5A2.25 2.25 0 008.25 3.75v1.5" />
  </svg>
);

export const HatIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75v3.75a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25v-3.75" />
  </svg>
);

export const UmbrellaIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75a10.5 10.5 0 0119.5 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v6.75m0 0a2.25 2.25 0 002.25 2.25h.75a2.25 2.25 0 002.25-2.25m-5.25 0a2.25 2.25 0 01-2.25 2.25h-.75a2.25 2.25 0 01-2.25-2.25" />
  </svg>
);

export const BootsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-6.75a3.375 3.375 0 013.375-3.375h5.25a3.375 3.375 0 013.375 3.375V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.875V4.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v6.375" />
  </svg>
);

export const BeltIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5v4.5h-4.5z" />
  </svg>
);

export const SunglassesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM17.25 12a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h1.5m15 0H21m-9-3.75h-1.5" />
  </svg>
);

export const FirstAidIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5v10.5H3.75V9.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.75V6.75a3 3 0 013-3h0a3 3 0 013 3v3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25v3.75m-1.875-1.875h3.75" />
  </svg>
);

export const PillsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75H14.25V7.5H9.75zM3.75 9.75h16.5v4.5H3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.875 14.25v6h2.25v-6" />
  </svg>
);

export const ThermometerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 100 6 3 3 0 000-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25h-7.5" />
  </svg>
);

export const PowerBankIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12h1.5m3 0h1.5m3 0h1.5M20.25 9.75v4.5" />
  </svg>
);

export const AdapterIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5v3m6-3v3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V4.5m0 15v-2.25" />
  </svg>
);

export const BookIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
  </svg>
);

export const WaterBottleIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-3 0V4.5a1.5 1.5 0 011.5-1.5h0a1.5 1.5 0 011.5 1.5V6m-3 0h3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9.75V21h12V9.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9.75a3 3 0 013-3h6a3 3 0 013 3" />
  </svg>
);

export const LaundryBagIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v4.5m0 0l-2.25-2.25M12 14.25l2.25-2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 6.75V9m-6-2.25V9" />
  </svg>
);

export const DeodorantIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75h6v4.5H9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25v12h7.5v-12" />
  </svg>
);

export const FaceWashIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 21.75V8.25a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v13.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75v1.5M15 3.75v1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a3 3 0 00-3 3v0" />
  </svg>
);

export const CreamIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-9.75A3.75 3.75 0 0112 7.5h0a3.75 3.75 0 013.75 3.75V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75h7.5v3.75h-7.5z" />
  </svg>
);

export const SunscreenIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 21v-8.25a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5V4.5a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.375V12m2.652.652l.53-.53m1.414 2.829h.75m-3.848 2.651l.53.53M12 19.125v.75m-2.652-.652l-.53.53m-1.414-2.829h-.75m3.848-2.651l-.53-.53" />
  </svg>
);

export const AfterSunIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 21v-8.25a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5V4.5a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a4.5 4.5 0 004.5-4.5c0-3.5-2.25-4.5-4.5-8.25-2.25 3.75-4.5 4.75-4.5 8.25a4.5 4.5 0 004.5 4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75V12" />
  </svg>
);

export const LipBalmIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v3.75m4.5-3.75v3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.75h4.5v13.5h-4.5z" />
  </svg>
);

export const CombIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25h16.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 8.25V20.25m3-12v12m3-12v12m3-12v12m3-12v12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25A2.25 2.25 0 016 6h12a2.25 2.25 0 012.25 2.25" />
  </svg>
);

export const RazorIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75h6v4.5H9zM12 8.25V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12h7.5" />
  </svg>
);

export const ToothpasteIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125V21h4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
  </svg>
);

export const FaceClothIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.25v7.5m4.5-7.5v7.5" />
  </svg>
);
export const HandCreamIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5v8.25a3.75 3.75 0 007.5 0V10.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v-1.5" />
  </svg>
);
export const ShampooIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21V9.75a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5V5.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75V7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5h6" />
  </svg>
);
export const ConditionerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 21v-8.25a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25V21" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5V4.5a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v6" />
  </svg>
);
export const ShowerGelIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 21v-4.5a3.75 3.75 0 00-7.5 0v4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a2.25 2.25 0 012.25 2.25v0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a2.25 2.25 0 00-2.25 2.25v0" />
  </svg>
);
export const HairBrushIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 6a3 3 0 013-3h10.5a3 3 0 013 3v1.5a3 3 0 01-3 3h-1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5v9.75a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25V10.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 6v1.5m3-1.5v1.5m3-1.5v1.5m3-1.5v1.5" />
  </svg>
);
export const ThermalSocksIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5V9h3.75v2.25L12 6l5.25 5.25V9H21v7.5L16.5 21H7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-1.875 1.875m1.875-1.875l1.875 1.875m-1.875-1.875V9m-1.875 4.875l1.875-1.875" />
  </svg>
);
export const LeggingsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21V9h3v12m3-12v12h3V9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9l4.5-6 4.5 6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9h9" />
  </svg>
);
export const HoodieIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75A2.25 2.25 0 018.25 6v3.75h7.5V6A2.25 2.25 0 0118 3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75v10.5H15.75V9.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15h4.5m7.5 0h4.5" />
  </svg>
);
export const DrivingLicenseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 9h6m-6 3h6" />
  </svg>
);
export const TicketsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V21h-9V3.75h9zM12 3.75v-1.5m-3 1.5V2.25m6 0V3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25h.008v.008H12z" />
  </svg>
);
export const CreditCardIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v10.5z" />
  </svg>
);
export const KeysIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m-3-3a3 3 0 00-3 3m3 0h-3m-2.25-3.375a3 3 0 11-6 0 3 3 0 016 0zM21 15.75l-3.75-3.75M8.25 12l-3.75 3.75" />
  </svg>
);
export const CameraIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h.008v.008H16.5V7.5z" />
  </svg>
);
export const ChargerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9V3.75A2.25 2.25 0 019.75 1.5h4.5A2.25 2.25 0 0116.5 3.75V9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9v11.25A2.25 2.25 0 009.75 22.5h4.5a2.25 2.25 0 002.25-2.25V9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13.5H9" />
  </svg>
);
export const ToiletryBagIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.25l7.5-5.25 7.5 5.25v7.5l-7.5 5.25-7.5-5.25v-7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.25L12 13.5l7.5-5.25" />
  </svg>
);
export const NeckPillowIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 12.75A5.25 5.25 0 1 1 6.75 12.75a5.25 5.25 0 0 1 10.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 12.75H19.5a3.75 3.75 0 0 0 3.75-3.75V8.25a3.75 3.75 0 0 0-3.75-3.75H4.5A3.75 3.75 0 0 0 .75 8.25v.75A3.75 3.75 0 0 0 4.5 12.75H5.25" />
  </svg>
);
export const EyeMaskIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 10.5c0-1.12.93-2.024 2.09-2.024h15.32c1.16 0 2.09.903 2.09 2.024v3c0 1.12-.93 2.024-2.09 2.024H4.34c-1.16 0-2.09-.903-2.09-2.024v-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12.75c0 .621.504 1.125 1.125 1.125h.008c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H7.875c-.621 0-1.125.504-1.125 1.125v1.5zM15 12.75c0 .621.504 1.125 1.125 1.125h.008c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H16.125c-.621 0-1.125.504-1.125 1.125v1.5z" />
  </svg>
);
export const EarPlugsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 15a3 3 0 006 0v-6a3 3 0 10-6 0v6zm12 0a3 3 0 006 0v-6a3 3 0 10-6 0v6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15v1.5a1.5 1.5 0 01-3 0V15m9 1.5a1.5 1.5 0 003 0V15" />
  </svg>
);
export const TravelBlanketIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 14.25v6a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75v-6m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 14.25m18 0v-2.25a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12v2.25m15-3.75V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v2.25" />
  </svg>
);
export const NoiseCancellingHeadphonesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M4.886 18.364a9 9 0 010-12.728m14.228 0l-2.121 2.121m-12.106 8.486L4.886 18.364M12 18.75h.008v.008H12v-.008z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);
export const TravelJournalIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5v15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 8.25h4.5m-4.5 3.75h4.5m-4.5 3.75h4.5" />
  </svg>
);
export const PenIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 19.82a2.25 2.25 0 0 1-1.061.641l-4.5 1.5a.75.75 0 0 1-.925-.925l1.5-4.5a2.25 2.25 0 0 1 .641-1.061L16.862 4.487ZM16.862 4.487l1.687 1.687" />
  </svg>
);

export const PortableSpeakerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 21v-5.25a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h10.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-1.5A2.25 2.25 0 016.75 6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75V4.5a2.25 2.25 0 012.25-2.25h6A2.25 2.25 0 0119.5 4.5v2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
    </svg>
);

export const SinkPlugIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a6 6 0 100-12 6 6 0 000 12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v1.5m0 3.75v-1.5m0 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75l-9 9" />
    </svg>
);

export const ClotheslineIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3 12 7.5 16.5 3 21 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5v13.5h18V7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v-1.5" />
    </svg>
);

export const SewingKitIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75l-12 12m6-13.5a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 6.75a2.25 2.25 0 11-3.182-3.182 2.25 2.25 0 013.182 3.182z" />
    </svg>
);

export const StainRemoverPenIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3h4.5v15h-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3m-1.125-1.875h2.25" />
    </svg>
);

export const DuctTapeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5L12 12" />
    </svg>
);

export const TSALockIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15.75h6" />
    </svg>
);

export const LuggageTagIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h.008v.008H6V9z" />
    </svg>
);

export const MoneyBeltIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.996-1.5h.008v.008h-.008v-.008z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75a9 9 0 0015.75 6.364M21.75 12.75a9 9 0 01-15.75 6.364" />
    </svg>
);

export const BackpackCoverIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5l-1.5 1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5l1.5 1.5" />
    </svg>
);

export const CutleryIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75v16.5M16.5 3.75v16.5M8.25 3.75v7.5a3.75 3.75 0 01-7.5 0V3.75" />
    </svg>
);

export const PlayingCardsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.992-.58-1.352L12 11.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 2.25c0-1.242 1.008-2.25 2.25-2.25h9.75a2.25 2.25 0 012.25 2.25v9.75c0 1.242-1.008 2.25-2.25 2.25H6.75A2.25 2.25 0 014.5 12V2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6h.008v.008H8.25V6zM11.25 9h.008v.008h-.008V9z" />
    </svg>
);

export const HeadphonesSplitterIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75l-4.5 4.5m4.5-4.5l4.5 4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75L12 3M8.25 6.75L12 3l3.75 3.75" />
    </svg>
);

export const MotionSicknessPillsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v3.75" />
    </svg>
);
export const AllergyPillsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.5l-4.5 9" />
    </svg>
);

export const InsectRepellentIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-3.75a3 3 0 013-3h6a3 3 0 013 3V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 12l2.25-2.25m-9 4.5L5.25 12m4.5-6.75L7.5 3m9 2.25l-2.25 2.25" />
    </svg>
);

export const AntisepticWipesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75V2.25m7.5 1.5V2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
    </svg>
);

export const HandSanitizerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21V9.75a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V3.75m-3 3.75h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v3m-1.5-1.5h3" />
    </svg>
);

export const VitaminsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21V9.75a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5V3.75h-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l1.5 3-3 1.5L9 13.5l3-1.5z" />
    </svg>
);

export const PrescriptionCopyIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M12 12h.01M15 12h.01M9 15h.01M12 15h.01M15 15h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V8.25M18 1.5h-4.5a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75H18a.75.75 0 00.75-.75v-1.5A.75.75 0 0018 1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 1.5h4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-1.5A.75.75 0 016 1.5z" />
    </svg>
);

export const ContactLensesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75l7.5-4.5 7.5 4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75v3.75a3 3 0 003 3h13.5a3 3 0 003-3v-3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
    </svg>
);

export const DryShampooIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75h6v4.5H9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25v12h7.5v-12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v-1.5m-1.5 1.5l-1.5-1.5m4.5 0l1.5-1.5" />
    </svg>
);

export const MakeupIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a8.25 8.25 0 0116.5 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6L12 12m7.5-6L12 12" />
    </svg>
);

export const MakeupWipesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75l-7.5 16.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);

export const NailClippersIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25v9a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 17.25v-9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75l-4.5 4.5m-4.5-4.5l4.5 4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v4.5" />
    </svg>
);

export const TweezersIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3.75L7.5 12h9L21 3.75h-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75L16.5 12h-9L3 3.75h6z" />
    </svg>
);

export const QTipsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM20.25 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
    </svg>
);

export const FlossIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 2.25v1.5a3.75 3.75 0 003.75 3.75h.008a3.75 3.75 0 003.742-3.75V2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 21v-5.25A2.25 2.25 0 019 13.5h6a2.25 2.25 0 012.25 2.25V21" />
    </svg>
);

export const MouthwashIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21V9.75a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5V3.75h-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 00-3 3v0" />
    </svg>
);

export const TamponIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3h7.5v15h-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3m-1.5-1.5l-1.5 1.5m4.5-1.5l1.5 1.5" />
    </svg>
);

export const DocumentCopyIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v-1.5a2.25 2.25 0 012.25-2.25h4.5a2.25 2.25 0 012.25 2.25v1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75h6.75a2.25 2.25 0 012.25 2.25v11.25a2.25 2.25 0 01-2.25 2.25H9" />
    </svg>
);

export const TravelInsuranceIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12z" />
    </svg>
);

export const EmergencyContactsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

export const WalletIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75a.75.75 0 00-.75.75v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25a.75.75 0 00-1.5 0v2.25A3.75 3.75 0 006 21h12a3.75 3.75 0 003.75-3.75v-2.25a.75.75 0 00-.75-.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9.75a6 6 0 00-12 0v3a.75.75 0 00.75.75h10.5a.75.75 0 00.75-.75v-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75V3.75" />
    </svg>
);

export const SportsBraIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9L6 18.75h12L20.25 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V3.75h7.5V9" />
    </svg>
);

export const TightsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v18m6-18v18M9 3l3 3 3-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6" />
    </svg>
);
export const WorkoutClothesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V3m0 3.75L8.25 3M12 6.75L15.75 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v14.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h7.5" />
    </svg>
);
export const SwimsuitIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75v4.5M15 3.75v4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25l-3 3-3-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25h3.75l-1.5 12.75h-10.5L5.25 8.25H9" />
    </svg>
);

export const FormalDressIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75h7.5v3h-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L3.75 21h16.5L15.75 6.75" />
    </svg>
);

export const SuitIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75h12v16.5H6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75l-2.25 4.5h4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v12" />
    </svg>
);

export const RainPonchoIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75l-7.5 7.5h15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 11.25v9.75h15V11.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
    </svg>
);

export const KWayIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75l2.25-2.25h10.5l2.25 2.25v13.5H4.5V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15M9.75 14.25h4.5" />
    </svg>
);

export const FlipFlopsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21a6.75 6.75 0 01-6-6.492V9.75a3.75 3.75 0 013.75-3.75h10.5a3.75 3.75 0 013.75 3.75v4.758a6.75 6.75 0 01-6 6.492H8.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75a2.25 2.25 0 10-4.5 0v3" />
    </svg>
);

export const DressShoesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20.25V18a3 3 0 013-3h12a3 3 0 013 3v2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15L3.75 9h16.5L12 15z" />
    </svg>
);

export const SandalsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18.75V15a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 15v3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12.75h13.5M8.25 12.75V5.25m7.5 7.5V5.25" />
    </svg>
);

export const FashionScarfIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15.75a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" />
    </svg>
);
export const TieIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75L8.25 8.25h7.5L12 3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25l-2.25 12h4.5l-2.25-12z" />
    </svg>
);

export const SnacksIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.75l-1.5 6h19.5l-1.5-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75L6 3.75h12l3.75 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 8.25h4.5" />
    </svg>
);

export const TeaBagsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3.75" />
    </svg>
);

export const SlippersIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 18.75H3V15a3 3 0 013-3h12a3 3 0 013 3v3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12A5.25 5.25 0 006.75 6.75h10.5A5.25 5.25 0 0012 12z" />
    </svg>
);
export const PrescriptionBottleIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21V9.75a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5V3.75h-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v3m-1.5-1.5h3" />
    </svg>
);
export const EReaderIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9h7.5m-7.5 3h7.5m-7.5 3h4.5" />
    </svg>
);
export const TabletIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5h.008v.008H12v-.008z" />
    </svg>
);
export const MultiUSBChargerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V4.5m0 15v-2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5h.008v.008H9zM12 10.5h.008v.008H12zM15 10.5h.008v.008H15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5h.008v.008H9zM12 13.5h.008v.008H12zM15 13.5h.008v.008H15z" />
    </svg>
);
export const SarongIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v16.5M3.75 12h16.5" />
    </svg>
);
export const GogglesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.25a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM18 14.25a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.25h12M1.5 14.25h1.5m18 0h1.5" />
    </svg>
);
export const HikingSocksIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5V9h3.75v2.25L12 6l5.25 5.25V9H21v7.5L16.5 21H7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h1.5m3 0h1.5m3 0h1.5" />
    </svg>
);
export const RainPantsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18M18 3v18M6 6.75h12M9 3h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l1.5 1.5M18 12l-1.5 1.5" />
    </svg>
);
export const FleeceJacketIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75l2.25-2.25h10.5l2.25 2.25v13.5H4.5V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15M9.75 9h4.5" />
    </svg>
);
export const WatchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V12l3.75 2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-2.25m0-13.5V3" />
    </svg>
);
export const JewelryCaseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-2.25m0 0l-1.125-1.125a1.875 1.875 0 00-2.652 0l-1.125 1.125L12 7.5l2.25 2.25 1.125-1.125a1.875 1.875 0 000-2.652L14.25 5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5v11.25H3.75z" />
    </svg>
);
export const PerfumeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75h6v3H9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 6.75V21H9V6.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v-1.5m-1.5 1.5l-1.5-1.5m4.5 0l1.5-1.5" />
    </svg>
);
export const FaceMaskSkincareIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM18 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15.75a3 3 0 01-6 0" />
    </svg>
);
export const CottonPadsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);
export const HairTiesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75L12 12l-3.75 3.75" />
    </svg>
);
export const BlisterPlastersIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m-15 0l15-15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12a9.75 9.75 0 0119.5 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a9.75 9.75 0 010 19.5" />
    </svg>
);
export const EyeDropsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75V21m0-18v2.25" />
    </svg>
);
export const HotelConfirmationIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125V21h4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2.25 2.25L15 9.75" />
    </svg>
);
export const ItineraryIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v3" />
    </svg>
);
export const ReusableBagIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 10.5h16.5v10.5H3.75z" />
    </svg>
);
export const CarabinerIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3v10.5a3 3 0 01-3 3h-7.5a3 3 0 01-3-3V8.25a3 3 0 013-3h7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25h-7.5" />
    </svg>
);
export const HeadlampIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75h9.75v9H2.25v-9H12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75l3.75-3" />
    </svg>
);
export const BinocularsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-5.25a3 3 0 013-3h1.5a3 3 0 013 3V21m-6 0h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 21v-5.25a3 3 0 00-3-3h-1.5a3 3 0 00-3 3V21m6 0h-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12.75V3.75m12 9V3.75" />
    </svg>
);
export const DaypackIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l-4.5 4.5v10.5h16.5V9l-4.5-4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5h7.5V3h-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);
export const GuidebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4.5 4.5 0 004.5-4.5M12 12a4.5 4.5 0 014.5 4.5M12 12a4.5 4.5 0 00-4.5 4.5M12 12a4.5 4.5 0 01-4.5-4.5" />
    </svg>
);
export const PhrasebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5v15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9l3.75 3-3.75 3" />
    </svg>
);
export const SleepAidPillsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    </svg>
);
export const ProbioticsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21V9.75a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5V3.75h-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
);
export const WetWipesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5V3.75H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
    </svg>
);
export const TissuesIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v13.5H3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75L12 3l8.25 3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3.75" />
    </svg>
);
