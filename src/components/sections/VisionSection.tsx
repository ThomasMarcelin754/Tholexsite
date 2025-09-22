'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowPathIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ScaleIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  MegaphoneIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

type SupportFunction = {
  id: string;
  name: string;
  icon: typeof CurrencyDollarIcon;
  painPoint: string;
  stress: number;
  status?: 'normal' | 'neglected';
};

type SupportLayout = SupportFunction & {
  position: { x: number; y: number };
  path: string;
};

export function VisionSection() {
  const [isIntegrated, setIsIntegrated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const supportFunctions = useMemo<SupportFunction[]>(
    () => [
      {
        id: 'finance',
        name: 'Finance',
        icon: CurrencyDollarIcon,
        painPoint: 'Relances quotidiennes',
        stress: 82
      },
      {
        id: 'hr',
        name: 'RH / Paie',
        icon: UserGroupIcon,
        painPoint: 'Contrats & paie terrain',
        stress: 88
      },
      {
        id: 'legal',
        name: 'Juridique',
        icon: ScaleIcon,
        painPoint: 'Litiges & conformité',
        stress: 75
      },
      {
        id: 'it',
        name: 'IT / Data',
        icon: ComputerDesktopIcon,
        painPoint: 'Incidents & accès',
        stress: 93
      },
      {
        id: 'purchase',
        name: 'Achats',
        icon: ShoppingBagIcon,
        painPoint: 'Approvisionnements urgents',
        stress: 80
      },
      {
        id: 'bizdev',
        name: 'Développement commercial',
        icon: ChartBarIcon,
        painPoint: 'Prospection en pause',
        stress: 45,
        status: 'neglected'
      },
      {
        id: 'marketing',
        name: 'Marketing / Com',
        icon: MegaphoneIcon,
        painPoint: 'Campagnes gelées',
        stress: 40,
        status: 'neglected'
      }
    ],
    []
  );

  const supportLayout = useMemo<SupportLayout[]>(() => {
    const radius = 49;
    return supportFunctions.map((func, index) => {
      const angle = (2 * Math.PI * index) / supportFunctions.length - Math.PI / 2;
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      return {
        ...func,
        position: { x, y },
        path: `M 50 50 L ${x.toFixed(2)} ${y.toFixed(2)}`
      };
    });
  }, [supportFunctions]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let touchStartY: number | null = null;
    let hasTriggered = false;

    const triggerIntegrated = () => {
      if (!hasTriggered && !isIntegrated) {
        hasTriggered = true;
        setIsIntegrated(true);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isIntegrated && event.deltaY > 0) {
        event.preventDefault();
        event.stopPropagation();
        triggerIntegrated();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isIntegrated && touchStartY !== null) {
        const currentY = event.touches[0]?.clientY ?? touchStartY;
        const deltaY = touchStartY - currentY;
        if (deltaY > 18) {
          event.preventDefault();
          triggerIntegrated();
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartY = null;
      hasTriggered = false;
    };

    node.addEventListener('wheel', handleWheel, { passive: false });
    node.addEventListener('touchstart', handleTouchStart, { passive: true });
    node.addEventListener('touchmove', handleTouchMove, { passive: false });
    node.addEventListener('touchend', handleTouchEnd);
    node.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      node.removeEventListener('wheel', handleWheel);
      node.removeEventListener('touchstart', handleTouchStart);
      node.removeEventListener('touchmove', handleTouchMove);
      node.removeEventListener('touchend', handleTouchEnd);
      node.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isIntegrated]);

  const renderBefore = () => (
    <div className="relative min-h-[560px] sm:min-h-[620px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative aspect-square w-full max-w-[min(88vw,600px)]">
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {supportLayout.map((item, index) => (
              <g key={`line-${item.id}`}>
                <line
                  x1="50"
                  y1="50"
                  x2={item.position.x}
                  y2={item.position.y}
                  stroke="#d1d5db"
                  strokeWidth="1.2"
                  strokeDasharray="3.5 4"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                <circle r="1.6" fill="#ef4444" opacity="0.85">
                  <animateMotion
                    dur={`${6 + index * 0.25}s`}
                    repeatCount="indefinite"
                    keyPoints="0;1;0"
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
                    path={item.path}
                  />
                </circle>
              </g>
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 w-[190px] max-w-[70vw] -translate-x-1/2 -translate-y-1/2">
            <div className="relative rounded-3xl border-4 border-red-200 bg-gradient-to-br from-red-50 to-red-100 px-5 py-6 text-center shadow-xl">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white text-base font-semibold">
                CEO
              </div>
              <h4 className="text-base font-semibold text-red-700">DIRECTEUR</h4>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-red-500">
                Submergé par les validations quotidiennes.
              </p>
              <div className="absolute -inset-4 rounded-3xl border border-red-200 opacity-40" />
            </div>
          </div>

          {supportLayout.map(item => (
            <div
              key={`before-card-${item.id}`}
              className={`absolute w-[168px] max-w-[38vw] -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-4 shadow-lg backdrop-blur ${
                item.status === 'neglected'
                  ? 'border-dashed border-gray-300 bg-gray-50/80 text-gray-500'
                  : 'border-red-100 bg-white/85 text-red-700'
              }`}
              style={{
                left: `${item.position.x}%`,
                top: `${item.position.y}%`
              }}
            >
              <div className="flex items-center gap-2">
                <item.icon className={`h-5 w-5 ${item.status === 'neglected' ? 'text-gray-400' : 'text-red-500'}`} />
                <p className={`text-sm font-semibold ${item.status === 'neglected' ? 'text-gray-500' : 'text-red-700'}`}>
                  {item.name}
                </p>
              </div>
              <p
                className={`mt-2 text-xs font-medium leading-4 ${
                  item.status === 'neglected' ? 'text-gray-500' : 'text-red-600/90'
                }`}
              >
                {item.painPoint}
              </p>
              <div
                className={`mt-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                  item.status === 'neglected'
                    ? 'bg-gray-100 text-gray-500'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {item.status === 'neglected' ? 'Non pris en charge' : `${item.stress}% du temps happé`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAfter = () => (
    <div className="flex flex-col items-center gap-10">
      <div
        id="tholex-hub"
        className="relative rounded-3xl border-4 border-primary/40 bg-gradient-to-br from-primary via-primary-hover to-primary px-10 py-8 text-white shadow-2xl"
        style={{ animation: 'orchestratorPulse 2.4s ease-in-out infinite' }}
      >
        <div className="mb-6 text-center">
          <h4 className="text-2xl font-bold tracking-wide">THOLEX HUB</h4>
          <p className="text-sm font-semibold opacity-90">Back-office unifié • Pilotage temps réel</p>
          <p className="text-xs opacity-75">Processus orchestrés, automatisations, reporting centralisé</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {supportFunctions.map((func, index) => (
            <div
              key={`after-${func.id}`}
              className="rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-center backdrop-blur"
              style={{
                animationDelay: `${index * 0.08}s`,
                animation: 'integratedFunction 0.8s ease-out forwards'
              }}
            >
              <func.icon className="mx-auto mb-1 h-5 w-5 text-white" />
              <p className="text-[11px] font-semibold uppercase tracking-wider text-white/90">{func.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid w-full gap-4 text-sm text-foreground/70 sm:grid-cols-3">
        {[
          {
            title: 'Flux fluidifiés',
            bullets: ['Demandes support routées automatiquement', 'Suivi SLA consolidé', 'Visibilité temps réel sur les charges']
          },
          {
            title: 'Direction libérée',
            bullets: ['Focalisation sur Produit & Qualité', 'Coaching des équipes terrain', 'Décisions appuyées par la data']
          },
          {
            title: 'Équipes terrain connectées',
            bullets: ['Feedbacks captés en continu', 'Standards et formations alignés', 'Clients mieux accompagnés']
          }
        ].map((panel, panelIndex) => (
          <div
            key={`after-panel-${panel.title}`}
            className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-5 shadow-sm"
          >
            <p className="mb-3 text-base font-semibold text-emerald-700">{panel.title}</p>
            <ul className="space-y-2 text-xs text-emerald-700/90">
              {panel.bullets.map((bullet, bulletIndex) => (
                <li key={`after-panel-${panelIndex}-bullet-${bulletIndex}`} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="vision" className="relative z-30 scroll-mt-24 bg-white">
      <div className="mx-auto flex min-h-[200vh] max-w-7xl flex-col px-4 sm:px-6">
        <div className="sticky top-0 z-30 flex min-h-[100dvh] flex-col bg-white py-16 sm:py-20">
          <div className="relative z-20 flex-shrink-0 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Notre vision</p>
            <h2 className="mb-4 text-2xl font-semibold sm:text-4xl">
              {isIntegrated ? 'Avec Tholex : organisation orchestrée' : 'Sans Tholex : organisation fragmentée'}
            </h2>
            <p className="mx-auto mb-6 max-w-4xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Visualisez la différence entre une direction absorbée par les urgences quotidiennes et une organisation libérée grâce au Tholex Hub.
            </p>

            <div className="mb-10 flex items-center justify-center gap-3 sm:gap-4">
              <span className={`text-sm font-medium transition-colors ${!isIntegrated ? 'text-primary' : 'text-foreground/50'}`}>
                Organisation actuelle
              </span>
              <button
                onClick={() => setIsIntegrated(prev => !prev)}
                className={`relative h-8 w-16 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isIntegrated ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-pressed={isIntegrated}
              >
                <div
                  className={`absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-500 ${
                    isIntegrated ? 'translate-x-8' : ''
                  }`}
                >
                  <ArrowPathIcon
                    className={`h-3 w-3 text-gray-600 transition-transform duration-500 ${isIntegrated ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>
              <span className={`text-sm font-medium transition-colors ${isIntegrated ? 'text-primary' : 'text-foreground/50'}`}>
                Avec Tholex
              </span>
            </div>
          </div>

          <div className="relative z-10 mt-6 flex-1">
            {isIntegrated ? renderAfter() : renderBefore()}
          </div>
        </div>
      </div>
    </section>
  );
}
