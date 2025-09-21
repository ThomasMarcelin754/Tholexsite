'use client';

import { useState, useEffect, useRef } from 'react';
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  ScaleIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  MegaphoneIcon,
  WrenchScrewdriverIcon,
  UserIcon,
  StarIcon,
  ArrowPathIcon,
  UserCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export function VisionSection() {
  const [isIntegrated, setIsIntegrated] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [hasAutoToggled, setHasAutoToggled] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const supportFunctions = [
    {
      name: 'Finance',
      icon: CurrencyDollarIcon,
      id: 'finance',
      stress: 85,
      tasks: ['Comptabilité', 'Facturation', 'Relances'],
      valueLevel: 'low'
    },
    {
      name: 'RH/Paie',
      icon: UserGroupIcon,
      id: 'hr',
      stress: 90,
      tasks: ['Paie', 'Admin RH', 'Déclarations'],
      valueLevel: 'low'
    },
    {
      name: 'Juridique',
      icon: ScaleIcon,
      id: 'legal',
      stress: 75,
      tasks: ['Contrats', 'Conformité', 'Litiges'],
      valueLevel: 'low'
    },
    {
      name: 'IT/Data',
      icon: ComputerDesktopIcon,
      id: 'it',
      stress: 95,
      tasks: ['Support IT', 'Sauvegardes', 'Maintenance'],
      valueLevel: 'low'
    },
    {
      name: 'Achats',
      icon: ShoppingBagIcon,
      id: 'purchase',
      stress: 80,
      tasks: ['Commandes', 'Négociation', 'Fournisseurs'],
      valueLevel: 'low'
    },
    {
      name: 'Marketing',
      icon: MegaphoneIcon,
      id: 'marketing',
      stress: 70,
      tasks: ['Campagnes', 'Réseaux sociaux', 'Communication'],
      valueLevel: 'medium'
    }
  ];

  const valueCreatingTeams = [
    { name: 'Relation client', icon: UserIcon, id: 'client', value: 'high' },
    { name: 'Formation', icon: StarIcon, id: 'training', value: 'high' },
    { name: 'Qualité', icon: CheckCircleIcon, id: 'quality', value: 'high' },
    { name: 'Production', icon: WrenchScrewdriverIcon, id: 'production', value: 'medium' }
  ];

  const networkFlows = [
    {
      label: 'CRM unified',
      color: 'primary',
      particles: 4,
      speed: 2.6,
      path: 'M 25% 50% Q 42% 24% 60% 25%',
      labelPosition: { x: '54%', y: '30%' }
    },
    {
      label: 'HR data',
      color: 'primary',
      particles: 3,
      speed: 2.9,
      path: 'M 25% 50% Q 40% 72% 60% 75%',
      labelPosition: { x: '52%', y: '72%' }
    },
    {
      label: 'Standards',
      color: 'primary',
      particles: 3,
      speed: 2.4,
      path: 'M 25% 50% Q 48% 60% 75% 75%',
      labelPosition: { x: '60%', y: '66%' }
    },
    {
      label: 'Competences',
      color: 'primary',
      particles: 3,
      speed: 2.7,
      path: 'M 25% 50% Q 48% 34% 75% 25%',
      labelPosition: { x: '60%', y: '32%' }
    },
    {
      label: 'Feedback',
      color: 'green',
      particles: 3,
      speed: 3.2,
      path: 'M 60% 25% Q 45% 42% 25% 50%',
      labelPosition: { x: '42%', y: '38%' }
    },
    {
      label: 'Deliveries',
      color: 'blue',
      particles: 4,
      speed: 2.3,
      path: 'M 75% 25% Q 70% 18% 60% 25%',
      labelPosition: { x: '68%', y: '20%' }
    }
  ];

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [isIntegrated]);

  // Auto-toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasAutoToggled) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger when section is 60% visible
      const visibilityThreshold = windowHeight * 0.6;
      const isVisible = rect.top < visibilityThreshold && rect.bottom > windowHeight * 0.2;

      if (isVisible && !isIntegrated) {
        // Auto-toggle to "Avec Tholex" after a short delay
        setTimeout(() => {
          setIsIntegrated(true);
          setHasAutoToggled(true);
        }, 800);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isIntegrated, hasAutoToggled]);

  const toggleMode = () => {
    setIsIntegrated(!isIntegrated);
    setHasAutoToggled(true); // Disable auto-toggle after manual interaction
  };

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="relative z-30 scroll-mt-24 bg-white"
    >
      <div className="mx-auto flex min-h-[200vh] max-w-7xl flex-col px-4 sm:px-6">
        <div className="sticky top-0 z-30 flex min-h-[100dvh] flex-col bg-white py-16 sm:py-20">
          <div className="relative z-20 flex-shrink-0 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">Notre vision</p>
            <h2 className="mb-5 text-2xl font-semibold sm:text-4xl">
              {isIntegrated ? 'Avec Tholex : Organisation intégrée' : 'Sans Tholex : Organisation fragmentée'}
            </h2>
            <p className="mx-auto mb-6 max-w-4xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Découvrez la transformation que Tholex apporte à l&apos;organisation de votre entreprise.
            </p>

            {/* Auto-toggle indicator */}
            {!hasAutoToggled && !isIntegrated && (
              <div className="flex items-center justify-center gap-2 mb-4 animate-pulse">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-sm text-primary font-medium">
                  Continuez à faire défiler pour voir la transformation
                </p>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            )}

            {/* Toggle Switch */}
            <div className="mb-10 flex items-center justify-center gap-3 sm:mb-12 sm:gap-4">
              <span className={`text-sm font-medium transition-colors ${!isIntegrated ? 'text-primary' : 'text-foreground/50'}`}>
                Organisation actuelle
              </span>
              <button
                onClick={toggleMode}
                className={`relative w-16 h-8 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isIntegrated ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-500 flex items-center justify-center ${
                    isIntegrated ? 'transform translate-x-8' : ''
                  }`}
                >
                  <ArrowPathIcon className={`w-3 h-3 text-gray-600 transition-transform duration-500 ${isIntegrated ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <span className={`text-sm font-medium transition-colors ${isIntegrated ? 'text-primary' : 'text-foreground/50'}`}>
                Avec Tholex
              </span>
            </div>
          </div>

          {/* Interactive Visualization */}
          <div className="relative z-10 mt-12 flex-1 min-h-[520px] sm:mt-16 sm:min-h-[700px]" key={animationKey}>
            <div className="absolute inset-0 transition-all duration-1000">
              {isIntegrated ? (
                <div className="relative h-full">
                  {/* OPTIMIZED NETWORK GRAPH - AVEC THOLEX */}
                  <div className="text-center mb-12">
                  <h3 className="text-2xl font-semibold text-primary mb-3">Optimized Animated Network Graph</h3>
                  <p className="text-sm text-foreground/60">Real-time information flow • Value-oriented architecture • Dynamic node-link diagram</p>
                </div>

                <div className="relative flex items-center justify-center min-h-[500px]">
                  {/* Central Tholex Hub - Orchestrator Node */}
                  <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <div
                      id="tholex-hub"
                      className="relative bg-gradient-to-br from-primary via-primary-hover to-primary rounded-3xl p-8 shadow-2xl border-4 border-primary/30"
                      style={{
                        animation: 'orchestratorPulse 2.5s ease-in-out infinite'
                      }}
                    >
                      <div className="text-white text-center mb-6">
                        <h4 className="text-xl font-bold mb-2">THOLEX HUB</h4>
                        <p className="text-sm opacity-90 font-semibold">Central Orchestrator</p>
                        <p className="text-xs opacity-75">Back-office unified</p>
                      </div>

                      {/* Integrated functions display */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {supportFunctions.slice(0, 6).map((func, index) => (
                          <div
                            key={func.id}
                            className="bg-white/25 backdrop-blur rounded-lg p-2 text-center border border-white/20"
                            style={{
                              animationDelay: `${index * 0.1}s`,
                              animation: 'integratedFunction 0.8s ease-out forwards'
                            }}
                          >
                            <func.icon className="w-5 h-5 text-white mx-auto mb-1" />
                            <p className="text-[9px] text-white font-bold">{func.name.split('/')[0]}</p>
                          </div>
                        ))}
                      </div>

                      {/* Central data processor indicator */}
                      <div className="text-center">
                        <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-xs text-white font-semibold">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          PROCESSING DATA
                        </div>
                      </div>

                      {/* Multi-layered pulse rings */}
                      <div className="absolute -inset-3 rounded-3xl border-3 border-primary/40 animate-ping opacity-60"></div>
                      <div className="absolute -inset-6 rounded-3xl border-2 border-primary/25 animate-pulse opacity-40"></div>
                      <div className="absolute -inset-9 rounded-3xl border border-primary/15 animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>

                  {/* High-Value Team Nodes - Green/Blue */}
                  {valueCreatingTeams.map((team, index) => {
                    const positions = [
                      { x: '60%', y: '25%' }, // Relation client
                      { x: '60%', y: '75%' }, // Formation
                      { x: '75%', y: '75%' }, // Qualité
                      { x: '75%', y: '25%' }  // Production
                    ];

                    return (
                      <div
                        key={team.id}
                        id={team.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                        style={{
                          left: positions[index]?.x,
                          top: positions[index]?.y,
                          animationDelay: `${index * 0.2}s`,
                          animation: 'valueNodeEntrance 1s ease-out forwards'
                        }}
                      >
                        <div className={`relative rounded-2xl p-6 text-center shadow-xl border-3 transform transition-all duration-300 hover:scale-105 ${
                          team.value === 'high'
                            ? 'bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 border-green-400'
                            : 'bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-100 border-blue-400'
                        }`}>
                          {/* High-value indicator */}
                          <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                            team.value === 'high' ? 'bg-green-500' : 'bg-blue-500'
                          }`}>
                            ✓
                          </div>

                          <team.icon className={`w-10 h-10 mx-auto mb-3 ${
                            team.value === 'high' ? 'text-green-600' : 'text-blue-600'
                          }`} />
                          <p className="text-sm font-bold text-gray-800 mb-2">{team.name}</p>

                          {/* Value level indicator */}
                          <div className={`text-xs px-3 py-1 rounded-full font-bold ${
                            team.value === 'high'
                              ? 'bg-green-200 text-green-900'
                              : 'bg-blue-200 text-blue-900'
                          }`}>
                            {team.value === 'high' ? 'HIGH VALUE' : 'VALUE CREATOR'}
                          </div>

                          {/* Real-time activity indicator */}
                          <div className="mt-2 flex items-center justify-center">
                            <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                              team.value === 'high' ? 'bg-green-500' : 'bg-blue-500'
                            }`}></div>
                            <span className="text-xs text-gray-600 font-medium">ACTIVE</span>
                          </div>

                          {/* Multi-layered value rings */}
                          <div className={`absolute -inset-1 rounded-2xl border-2 animate-pulse ${
                            team.value === 'high' ? 'border-green-400/60' : 'border-blue-400/60'
                          }`}></div>
                          <div className={`absolute -inset-3 rounded-2xl border border-opacity-30 animate-ping ${
                            team.value === 'high' ? 'border-green-300' : 'border-blue-300'
                          }`} style={{ animationDelay: '0.5s' }}></div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Dynamic Network Flow System with Continuous Particles */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                    <defs>
                      {/* Flow arrows for different colors */}
                      <marker id="primary-arrow" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                        <polygon points="0 0, 12 4, 0 8" fill="var(--primary)" />
                      </marker>
                      <marker id="green-arrow" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                        <polygon points="0 0, 12 4, 0 8" fill="#10b981" />
                      </marker>
                      <marker id="blue-arrow" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                        <polygon points="0 0, 12 4, 0 8" fill="#3b82f6" />
                      </marker>

                      {/* Glowing filter effects */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {networkFlows.map((flow, flowIndex) => {
                      const strokeColor = flow.color === 'primary' ? 'var(--primary)' :
                                        flow.color === 'green' ? '#10b981' : '#3b82f6';
                      const markerUrl = `url(#${flow.color}-arrow)`;

                      return (
                        <g key={`flow-${flowIndex}`}>
                          {/* Main flow path */}
                          <path
                            id={`network-path-${flowIndex}`}
                            d={flow.path}
                            stroke={strokeColor}
                            strokeWidth="3"
                            fill="none"
                            opacity="0.7"
                            markerEnd={markerUrl}
                            filter="url(#glow)"
                            style={{
                              strokeDasharray: '8,4',
                              animation: `networkFlow ${3 + flowIndex * 0.2}s linear infinite`
                            }}
                          />

                          {/* Continuous particle stream */}
                          {Array.from({ length: flow.particles }).map((_, particleIndex) => {
                            const delay = (particleIndex * flow.speed) + (flowIndex * 0.5);
                            return (
                              <circle
                                key={`particle-${flowIndex}-${particleIndex}`}
                                r="4"
                                fill={strokeColor}
                                opacity="0.9"
                                filter="url(#glow)"
                                style={{
                                  animation: `particlePulse ${1.5 + particleIndex * 0.2}s ease-in-out infinite`
                                }}
                              >
                                <animateMotion
                                  dur={`${flow.speed}s`}
                                  repeatCount="indefinite"
                                  begin={`${delay}s`}
                                  path={flow.path}
                                />
                              </circle>
                            );
                          })}

                          {/* Data flow label with background */}
                          <text
                            x={flow.labelPosition?.x ?? '55%'}
                            y={flow.labelPosition?.y ?? '35%'}
                            className="text-xs font-bold fill-current text-gray-700"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{
                              animationDelay: `${flowIndex * 0.3}s`,
                              animation: 'labelFloat 3s ease-in-out infinite'
                            }}
                          >
                            <tspan
                              className="text-xs font-bold"
                              style={{
                                fill: strokeColor,
                                textShadow: '0 0 3px rgba(255,255,255,0.8)'
                              }}
                            >
                              {flow.label.toUpperCase()}
                            </tspan>
                          </text>

                          {/* Secondary particle trail for enhanced effect */}
                          <circle
                            r="2"
                            fill={strokeColor}
                            opacity="0.5"
                          >
                            <animateMotion
                              dur={`${flow.speed * 1.5}s`}
                              repeatCount="indefinite"
                              begin={`${flowIndex * 0.8}s`}
                              path={flow.path}
                            />
                          </circle>
                        </g>
                      );
                    })}

                    {/* Network status indicators */}
                    <g>
                      <rect x="75%" y="5%" width="120" height="60" rx="8" fill="rgba(255,255,255,0.9)" stroke="#e5e7eb" strokeWidth="1"/>
                      <text x="calc(75% + 60px)" y="calc(5% + 20px)" className="text-xs font-bold fill-current text-gray-800" textAnchor="middle">
                        NETWORK STATUS
                      </text>
                      <circle cx="calc(75% + 20px)" cy="calc(5% + 35px)" r="3" fill="#10b981" className="animate-pulse"/>
                      <text x="calc(75% + 30px)" y="calc(5% + 38px)" className="text-xs fill-current text-gray-700">
                        Real-time active
                      </text>
                      <text x="calc(75% + 30px)" y="calc(5% + 50px)" className="text-xs fill-current text-gray-600">
                        {networkFlows.reduce((sum, flow) => sum + flow.particles, 0)} data streams
                      </text>
                    </g>
                  </svg>

                  {/* Optimized Network Indicators */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4">
                    <span className="inline-flex items-center px-4 py-3 rounded-xl text-sm font-bold bg-green-100 text-green-800 shadow-lg border-2 border-green-300">
                      <CheckCircleIcon className="w-5 h-5 mr-2 animate-pulse" />
                      OPTIMIZED FLOWS
                    </span>
                    <span className="inline-flex items-center px-4 py-3 rounded-xl text-sm font-bold bg-blue-100 text-blue-800 shadow-lg border-2 border-blue-300">
                      <ArrowRightIcon className="w-5 h-5 mr-2 animate-bounce" />
                      VALUE FOCUSED
                    </span>
                    <span className="inline-flex items-center px-4 py-3 rounded-xl text-sm font-bold bg-primary/10 text-primary shadow-lg border-2 border-primary/30">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-ping"></div>
                      REAL-TIME DATA
                    </span>
                  </div>

                  {/* Network Graph Legend */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4 border border-gray-200 shadow-lg">
                    <p className="text-xs font-bold text-gray-800 mb-3">OPTIMIZED NETWORK GRAPH</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center">
                        <div className="w-4 h-1 bg-primary mr-2 rounded"></div>
                        <span className="text-gray-700">Hub connections</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-1 bg-green-500 mr-2 rounded"></div>
                        <span className="text-gray-700">Team interactions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-1 bg-blue-500 mr-2 rounded"></div>
                        <span className="text-gray-700">Value delivery</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></div>
                        <span className="text-gray-700">Data particles</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              ) : (
                <div className="relative h-full">
                  {/* CURRENT STATE - SANS THOLEX */}
                  <div className="text-center mb-12">
                  <h3 className="text-2xl font-semibold text-gray-600 mb-3">Organisation actuelle</h3>
                  <p className="text-sm text-foreground/60">Dirigeant au centre de tout - Temps consacré aux tâches à faible valeur ajoutée</p>
                </div>

                <div className="relative flex items-center justify-center min-h-[500px]">
                  {/* Central overwhelmed CEO */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className="relative bg-gradient-to-br from-red-100 to-red-200 rounded-3xl p-8 border-3 border-red-400 shadow-2xl"
                      style={{
                        animation: 'stressShake 0.8s ease-in-out infinite alternate'
                      }}
                    >
                      <UserCircleIcon className="w-20 h-20 text-red-600 mx-auto mb-4" />
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-red-800 mb-2">DIRIGEANT</h4>
                        <p className="text-sm text-red-700 mb-1 font-semibold">ÉTOUFFÉ PAR L&apos;OPÉRATIONNEL</p>
                        <p className="text-xs text-red-600 mb-3">80% du temps = tâches répétitives</p>

                        {/* Low-value tasks list */}
                        <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                          <p className="text-xs font-semibold text-red-800 mb-2">Tâches à faible valeur :</p>
                          <div className="space-y-1">
                            {['Validation factures', 'Suivi administratif', 'Gestion planning', 'Support IT', 'Relances clients'].map((task, i) => (
                              <div key={i} className="flex items-center text-xs text-red-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                {task}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Multiple stress indicators */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                        <ExclamationTriangleIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -top-1 -left-3 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div className="absolute -bottom-2 right-4 w-7 h-7 bg-red-600 rounded-full flex items-center justify-center" style={{ animation: 'stressPulse 1.5s infinite' }}>
                        <span className="text-white text-xs font-bold">⚠</span>
                      </div>

                      {/* Overwhelm ring */}
                      <div className="absolute -inset-4 rounded-3xl border-4 border-red-300 opacity-30 animate-ping"></div>
                      <div className="absolute -inset-6 rounded-3xl border-2 border-red-200 opacity-20 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Hub-and-spoke function nodes connected only to CEO */}
                  {supportFunctions.map((func, index) => {
                    const angle = (index * 60) + 15; // Evenly distributed around circle
                    const radius = 200;
                    const x = Math.cos(angle * Math.PI / 180) * radius;
                    const y = Math.sin(angle * Math.PI / 180) * radius;

                    return (
                      <div key={func.id}>
                        {/* Function node */}
                        <div
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            animationDelay: `${index * 0.1}s`,
                            animation: 'nodeStress 1.5s ease-in-out infinite'
                          }}
                        >
                          <div className={`relative rounded-2xl p-4 border-3 shadow-xl transform transition-all duration-300 ${
                            func.valueLevel === 'low'
                              ? 'bg-gradient-to-br from-red-100 to-red-200 border-red-400'
                              : 'bg-gradient-to-br from-orange-100 to-orange-200 border-orange-400'
                          }`}>
                            {/* Node content */}
                            <func.icon className={`w-8 h-8 mx-auto mb-2 ${
                              func.valueLevel === 'low' ? 'text-red-600' : 'text-orange-600'
                            }`} />
                            <p className="text-sm font-bold text-gray-800 text-center mb-2">{func.name}</p>

                            {/* Low-value task indicator */}
                            <div className={`text-xs px-2 py-1 rounded-full text-center mb-2 ${
                              func.valueLevel === 'low'
                                ? 'bg-red-200 text-red-800'
                                : 'bg-orange-200 text-orange-800'
                            }`}>
                              {func.valueLevel === 'low' ? 'LOW VALUE TASKS' : 'REPETITIVE WORK'}
                            </div>

                            {/* Tasks list */}
                            <div className="space-y-1">
                              {func.tasks.slice(0, 2).map((task, taskIndex) => (
                                <div key={taskIndex} className="flex items-center text-xs">
                                  <div className={`w-2 h-2 rounded-full mr-1 ${
                                    func.valueLevel === 'low' ? 'bg-red-500' : 'bg-orange-500'
                                  }`}></div>
                                  <span className="text-gray-700 truncate">{task}</span>
                                </div>
                              ))}
                            </div>

                            {/* Stress level */}
                            <div className="mt-2 text-center">
                              <div className={`text-xs font-bold px-2 py-1 rounded-full ${
                                func.valueLevel === 'low'
                                  ? 'bg-red-300 text-red-900'
                                  : 'bg-orange-300 text-orange-900'
                              }`}>
                                {func.stress}% STRESS
                              </div>
                            </div>

                            {/* Node type indicator */}
                            <div className="absolute -top-2 -left-2 bg-gray-700 text-white text-xs px-2 py-1 rounded-full font-bold">
                              SILO
                            </div>

                            {/* Stress ring */}
                            <div className={`absolute -inset-1 rounded-2xl border-2 animate-pulse ${
                              func.valueLevel === 'low' ? 'border-red-400/60' : 'border-orange-400/60'
                            }`}></div>
                          </div>
                        </div>

                        {/* Hub-to-spoke edge (dashed red line) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                          <defs>
                            <marker id={`stress-arrow-${index}`} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                              <polygon points="0 0, 8 3, 0 6" fill="#ef4444" />
                            </marker>
                          </defs>

                          {/* Main stress connection */}
                          <line
                            x1="50%"
                            y1="50%"
                            x2={`calc(50% + ${x * 0.75}px)`}
                            y2={`calc(50% + ${y * 0.75}px)`}
                            stroke="#ef4444"
                            strokeWidth="4"
                            strokeDasharray="12,6"
                            opacity="0.8"
                            markerEnd={`url(#stress-arrow-${index})`}
                            style={{
                              animation: `stressFlow ${1.2 + index * 0.1}s ease-in-out infinite`
                            }}
                          />

                          {/* Stress pulse along line */}
                          <circle
                            cx={`calc(50% + ${x * 0.4}px)`}
                            cy={`calc(50% + ${y * 0.4}px)`}
                            r="6"
                            fill="#ef4444"
                            opacity="0.7"
                            style={{
                              animation: `stressPulse ${1 + index * 0.15}s ease-in-out infinite`
                            }}
                          />

                          {/* Task flow label */}
                          <text
                            x={`calc(50% + ${x * 0.6}px)`}
                            y={`calc(50% + ${y * 0.6}px)`}
                            className="text-xs fill-red-700 font-bold"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{
                              animationDelay: `${index * 0.2}s`,
                              animation: 'taskFlowLabel 2s ease-in-out infinite'
                            }}
                          >
                            {func.tasks[0].toUpperCase()}
                          </text>

                          {/* Secondary stress connections (cluttered effect) */}
                          <line
                            x1="50%"
                            y1="50%"
                            x2={`calc(50% + ${x * 0.5}px)`}
                            y2={`calc(50% + ${y * 0.5}px)`}
                            stroke="#dc2626"
                            strokeWidth="2"
                            strokeDasharray="4,8"
                            opacity="0.4"
                            style={{
                              animation: `secondaryStress ${1.8 + index * 0.1}s ease-in-out infinite reverse`
                            }}
                          />
                        </svg>
                      </div>
                    );
                  })}

                  {/* Value-creating teams - disconnected from CEO */}
                  {valueCreatingTeams.map((team, index) => {
                    const outerPositions = [
                      { x: '85%', y: '20%' }, { x: '15%', y: '20%' },
                      { x: '85%', y: '80%' }, { x: '15%', y: '80%' }
                    ];

                    return (
                      <div key={team.id}>
                        {/* Neglected value team node */}
                        <div
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                          style={{
                            left: outerPositions[index]?.x,
                            top: outerPositions[index]?.y,
                            animationDelay: `${index * 0.3}s`,
                            animation: 'neglectedNode 2.5s ease-in-out infinite'
                          }}
                        >
                          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-4 border-2 border-gray-400 shadow-lg opacity-70">
                            <team.icon className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                            <p className="text-sm font-medium text-gray-600 text-center">{team.name}</p>
                            <div className="mt-2 text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-center font-semibold">
                              DISCONNECTED
                            </div>

                            {/* Disconnection indicator */}
                            <div className="absolute -inset-1 border-2 border-dashed border-gray-500 rounded-xl opacity-40"></div>
                          </div>
                        </div>

                        {/* Weak/broken connection to CEO */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
                          <line
                            x1="50%"
                            y1="50%"
                            x2={outerPositions[index]?.x}
                            y2={outerPositions[index]?.y}
                            stroke="#9ca3af"
                            strokeWidth="1"
                            strokeDasharray="2,12"
                            opacity="0.25"
                            style={{
                              animation: `weakConnection ${3 + index * 0.5}s ease-in-out infinite`
                            }}
                          />

                          {/* Break in the line to show disconnection */}
                          <circle
                            cx={`calc(50% + ${(parseFloat(outerPositions[index]?.x) - 50) * 0.3}%)`}
                            cy={`calc(50% + ${(parseFloat(outerPositions[index]?.y) - 50) * 0.3}%)`}
                            r="8"
                            fill="white"
                            stroke="#ef4444"
                            strokeWidth="2"
                            strokeDasharray="3,3"
                            style={{
                              animation: 'breakIndicator 2s ease-in-out infinite'
                            }}
                          />

                          {/* "X" mark on broken connection */}
                          <text
                            x={`calc(50% + ${(parseFloat(outerPositions[index]?.x) - 50) * 0.3}%)`}
                            y={`calc(50% + ${(parseFloat(outerPositions[index]?.y) - 50) * 0.3}%)`}
                            className="text-xs fill-red-600 font-bold"
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            ✕
                          </text>
                        </svg>
                      </div>
                    );
                  })}

                  {/* Additional cluttered stress lines for overwhelm effect */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
                    {/* Overlapping stress indicators around CEO */}
                    {Array.from({ length: 12 }).map((_, index) => {
                      const angle = index * 30;
                      const innerRadius = 80;
                      const outerRadius = 120;
                      const x1 = Math.cos(angle * Math.PI / 180) * innerRadius;
                      const y1 = Math.sin(angle * Math.PI / 180) * innerRadius;
                      const x2 = Math.cos(angle * Math.PI / 180) * outerRadius;
                      const y2 = Math.sin(angle * Math.PI / 180) * outerRadius;

                      return (
                        <line
                          key={`stress-${index}`}
                          x1={`calc(50% + ${x1}px)`}
                          y1={`calc(50% + ${y1}px)`}
                          x2={`calc(50% + ${x2}px)`}
                          y2={`calc(50% + ${y2}px)`}
                          stroke="#dc2626"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          opacity="0.3"
                          style={{
                            animation: `clutterFlicker ${1.5 + index * 0.1}s ease-in-out infinite`
                          }}
                        />
                      );
                    })}

                    {/* Chaos indicators */}
                    {Array.from({ length: 6 }).map((_, index) => (
                      <circle
                        key={`chaos-${index}`}
                        cx={`${30 + index * 15}%`}
                        cy={`${25 + index * 12}%`}
                        r="3"
                        fill="#ef4444"
                        opacity="0.4"
                        style={{
                          animation: `chaosIndicator ${2 + index * 0.3}s ease-in-out infinite`
                        }}
                      />
                    ))}
                  </svg>

                  {/* Enhanced Problem Indicators */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-3">
                    <span className="inline-flex items-center px-4 py-3 rounded-xl text-sm font-bold bg-red-100 text-red-800 border-2 border-red-400 shadow-lg">
                      <ExclamationTriangleIcon className="w-5 h-5 mr-2 animate-bounce" />
                      DATA SILOS
                    </span>
                    <span className="inline-flex items-center px-4 py-3 rounded-xl text-sm font-bold bg-red-200 text-red-900 border-2 border-red-500 shadow-lg">
                      <ExclamationTriangleIcon className="w-5 h-5 mr-2 animate-pulse" />
                      OVERLOADED LEADER
                    </span>
                    <span className="inline-flex items-center px-4 py-3 rounded-xl text-sm font-bold bg-orange-100 text-orange-800 border-2 border-orange-400 shadow-lg">
                      <ExclamationTriangleIcon className="w-5 h-5 mr-2 animate-ping" />
                      INEFFICIENCIES
                    </span>
                  </div>

                  {/* Network diagram legend */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 border border-gray-300 shadow-lg">
                    <p className="text-xs font-semibold text-gray-800 mb-2">CLUTTERED NODE-LINK DIAGRAM</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center">
                        <div className="w-3 h-0.5 bg-red-500 mr-2"></div>
                        <span className="text-gray-700">Hub-and-spoke edges</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-200 border border-red-400 rounded mr-2"></div>
                        <span className="text-gray-700">Low-value nodes</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-0.5 bg-gray-400 border-dashed mr-2"></div>
                        <span className="text-gray-700">Broken connections</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
