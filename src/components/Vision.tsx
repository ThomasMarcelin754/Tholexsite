"use client";

import { useMemo } from "react";
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ComputerDesktopIcon,
  ScaleIcon,
  ShoppingBagIcon,
  MegaphoneIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

type IconComponent = typeof UserGroupIcon;

type SupportCard = {
  id: string;
  name: string;
  icon: IconComponent;
  detail: string;
};

type PositionedCard = SupportCard & {
  angle: number;
  x: number;
  y: number;
};

const RADIUS_PERCENT = 38;

function RadialSupportMap() {
  const supportCards = useMemo<SupportCard[]>(
    () => [
      {
        id: "hr",
        name: "RH / Paie",
        icon: UserGroupIcon,
        detail: "Demandes terrain & contrats",
      },
      {
        id: "finance",
        name: "Finance",
        icon: CurrencyDollarIcon,
        detail: "Relances, trésorerie",
      },
      {
        id: "it",
        name: "IT / Data",
        icon: ComputerDesktopIcon,
        detail: "Accès, incidents",
      },
      {
        id: "legal",
        name: "Juridique",
        icon: ScaleIcon,
        detail: "Contrats, conformité",
      },
      {
        id: "procurement",
        name: "Achats",
        icon: ShoppingBagIcon,
        detail: "Approvisionnements",
      },
      {
        id: "marketing",
        name: "Marketing / Com",
        icon: MegaphoneIcon,
        detail: "Campagnes & canaux",
      },
      {
        id: "bizdev",
        name: "Dév. commercial",
        icon: ChartBarIcon,
        detail: "Prospection, partenariats",
      },
      {
        id: "operations",
        name: "Opérations",
        icon: WrenchScrewdriverIcon,
        detail: "Support terrain",
      },
    ],
    []
  );

  const positionedCards = useMemo<PositionedCard[]>(() => {
    const total = supportCards.length;
    return supportCards.map((card, index) => {
      const angle = (2 * Math.PI * index) / total - Math.PI / 2;
      const x = 50 + RADIUS_PERCENT * Math.cos(angle);
      const y = 50 + RADIUS_PERCENT * Math.sin(angle);
      return { ...card, angle, x, y };
    });
  }, [supportCards]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-3xl">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {positionedCards.map((card) => (
          <line
            key={`${card.id}-connector`}
            x1={50}
            y1={50}
            x2={card.x}
            y2={card.y}
            stroke="#d1d5db"
            strokeWidth={1.2}
            strokeDasharray="3.5 4"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
        <span className="text-xs font-semibold tracking-wide text-gray-700">
          DIRECTEUR
        </span>
      </div>

      {positionedCards.map((card) => (
        <div
          key={card.id}
          className="absolute flex w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-xl border border-gray-200 bg-white px-3 py-3 text-center shadow-sm sm:w-[140px]"
          style={{ left: `${card.x}%`, top: `${card.y}%` }}
        >
          <card.icon className="h-5 w-5 text-gray-600" aria-hidden="true" />
          <p className="mt-2 text-sm font-semibold text-gray-700">
            {card.name}
          </p>
          <p className="mt-1 text-[11px] text-gray-500">{card.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default function Vision() {
  return (
    <section id="vision" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Notre vision
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Optimiser l&apos;organisation des entreprises en externalisant les fonctions
            support vers un back-office mutualisé, permettant aux équipes terrain de se
            concentrer entièrement sur leur cœur de métier et la création de valeur.
          </p>
        </div>

        <div className="mb-8">
          <RadialSupportMap />
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <span>Chaque fonction support se connecte directement au directeur,</span>{" "}
          <span className="font-medium text-gray-600">
            assurant une vision claire et équilibrée des priorités.
          </span>
        </div>
      </div>
    </section>
  );
}
