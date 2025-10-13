'use client';

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Scale,
  Users,
  Monitor,
  Package,
  Megaphone,
  LucideIcon,
  UserCheck,
  GraduationCap,
  Award,
} from "lucide-react";
import Image from "next/image";

const GRAY_LINE = "#D1D1D1";
const ACCENT_COLOR = "#E63946";
const HUB_COLOR = "#B7472A";
const BG_COLOR = "#FFF9F5";

interface SupportFunction {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface Acquisition {
  id: string;
  name: string;
  company: string;
  imageUrl: string;
  status: "active" | "inactive";
}

const supportFunctions: SupportFunction[] = [
  { id: "finance", label: "Finance", icon: Calculator },
  { id: "juridique", label: "Juridique", icon: Scale },
  { id: "rh", label: "RH", icon: Users },
  { id: "it", label: "IT", icon: Monitor },
  { id: "achats", label: "Achats", icon: Package },
  { id: "marketing", label: "Marketing", icon: Megaphone },
];

const acquisitions: Acquisition[] = [
  {
    id: "acq1",
    name: "Pierre Martin",
    company: "Industrie Française PME",
    imageUrl:
      "https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwZW50cmVwcmVuZXVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NzQzODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "active",
  },
  {
    id: "acq2",
    name: "Sophie Dubois",
    company: "Entreprise Familiale Services",
    imageUrl:
      "https://images.unsplash.com/photo-1719835491911-99dd30f3f2dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTk3MzY0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "active",
  },
  {
    id: "acq3",
    name: "Laurent Rousseau",
    company: "Tech Solutions France",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTc0Mzg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    status: "active",
  },
  {
    id: "acq4",
    name: "Marie Leclerc",
    company: "Distribution & Logistique",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHx8MTc1OTc0Mzg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    status: "active",
  },
];

interface FunctionCardProps {
  icon: LucideIcon;
  label: string;
  delay: number;
  isHighlighted: boolean;
  onHover: () => void;
  onLeave: () => void;
  cardRef: (el: HTMLDivElement | null) => void;
}

function FunctionCard({
  icon: Icon,
  label,
  delay,
  isHighlighted,
  onHover,
  onLeave,
  cardRef,
}: FunctionCardProps) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -20, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative bg-white border rounded-lg px-4 py-3 cursor-pointer w-[170px]
        transition-all duration-300 ease-out
        ${isHighlighted ? "border-[#B7472A] shadow-md" : "border-[#e5e5e5] hover:border-[#d1d1d1]"}
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            w-8 h-8 flex-shrink-0 rounded-md flex items-center justify-center transition-all duration-300
            ${isHighlighted ? "bg-[#B7472A]" : "bg-[#f8f8f8]"}
          `}
        >
          <Icon
            className={`w-4 h-4 transition-colors duration-300 ${isHighlighted ? "text-white" : "text-[#666666]"}`}
            strokeWidth={2}
          />
        </div>
        <span
          className={`text-[13px] transition-colors duration-300 ${isHighlighted ? "text-[#B7472A]" : "text-[#333333]"}`}
          style={{ fontWeight: 500 }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function HubCard({
  isHighlighted,
  hubRef,
}: {
  isHighlighted: boolean;
  hubRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <motion.div
      ref={hubRef}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div
        className={`
          relative rounded-xl px-8 py-6 border-2 transition-all duration-300
          ${isHighlighted ? "border-[#B7472A] shadow-lg" : "border-[#B7472A]"}
        `}
        style={{
          background: HUB_COLOR,
        }}
      >
        <div className="text-center">
          <h3
            className="text-[20px] tracking-[0.03em] text-white mb-1"
            style={{ fontWeight: 700 }}
          >
            THOLEX
          </h3>
          <p
            className="text-[11px] text-white/90 tracking-[0.12em] uppercase"
            style={{ fontWeight: 500 }}
          >
            Hub Central
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function AcquisitionCard({
  acquisition,
  delay,
  isHighlighted,
  onHover,
  onLeave,
  cardRef,
}: {
  acquisition: Acquisition;
  delay: number;
  isHighlighted: boolean;
  onHover: () => void;
  onLeave: () => void;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative rounded-lg px-3 py-2.5 cursor-pointer w-[240px]
        transition-all duration-300 ease-out
        ${isHighlighted ? "shadow-md" : "hover:shadow-sm"}
      `}
      style={{
        background: isHighlighted ? "#f8f8f8" : "#f3f3f5",
        border: `1.5px solid ${isHighlighted ? HUB_COLOR : "transparent"}`,
      }}
    >
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <div className="relative w-11 h-11 flex-shrink-0">
          <Image
            src={acquisition.imageUrl}
            alt={acquisition.name}
            fill
            className="rounded-full object-cover"
          />
          {/* Status indicator */}
          {acquisition.status === "active" && (
            <div
              className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white"
              style={{ background: "#10B981" }}
            />
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p
            className={`text-[13px] truncate transition-colors duration-300 ${isHighlighted ? "text-[#B7472A]" : "text-[#333333]"}`}
            style={{ fontWeight: 600 }}
          >
            {acquisition.name}
          </p>
          <p className="text-[11px] text-[#666666] mt-0.5 truncate">
            {acquisition.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface ConnectionNodeProps {
  x: number;
  y: number;
  isHighlighted: boolean;
  delay: number;
}

function ConnectionNode({
  x,
  y,
  isHighlighted,
  delay,
}: ConnectionNodeProps) {
  return (
    <motion.g>
      {/* Outer pulse ring when highlighted */}
      {isHighlighted && (
        <motion.circle
          cx={x}
          cy={y}
          r="14"
          fill="none"
          stroke={HUB_COLOR}
          strokeWidth="1.5"
          initial={{ opacity: 0.25, scale: 0.4 }}
          animate={{
            opacity: [0.25, 0],
            scale: [0.4, 1.8],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}

      {/* Main node circle */}
      <motion.circle
        cx={x}
        cy={y}
        r={isHighlighted ? "6" : "5"}
        fill={HUB_COLOR}
        stroke="white"
        strokeWidth="2.5"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{
          r: isHighlighted ? 6 : 5,
          fill: HUB_COLOR,
        }}
        transition={{
          duration: isHighlighted ? 0.3 : 0.5,
          delay: isHighlighted ? 0 : delay,
          ease: "backOut",
        }}
      />

      {/* Inner highlight dot when highlighted */}
      {isHighlighted && (
        <motion.circle
          cx={x}
          cy={y}
          r="2.5"
          fill="white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.g>
  );
}

interface CurvedLineProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  isHighlighted: boolean;
  delay: number;
  showStartDot?: boolean;
  showEndDot?: boolean;
}

function CurvedLine({
  from,
  to,
  isHighlighted,
  delay,
  showStartDot = false,
  showEndDot = false,
}: CurvedLineProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(1000);

  // Create symmetric quadratic Bezier curve
  // Control point is at the horizontal midpoint, with Y matching the destination for smooth convergence
  const controlX = (from.x + to.x) / 2;
  const controlY = to.y;

  const path = `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, [path]);

  return (
    <g>
      {/* LAYER 1: Static dashed line (always visible) */}
      <motion.path
        d={path}
        stroke={isHighlighted ? HUB_COLOR : GRAY_LINE}
        strokeWidth={isHighlighted ? "2" : "1.5"}
        strokeDasharray="4 4"
        strokeLinecap="round"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        animate={{
          stroke: isHighlighted ? HUB_COLOR : GRAY_LINE,
          strokeWidth: isHighlighted ? 2 : 1.5,
        }}
        transition={{
          opacity: { duration: 0.5, delay: delay + 1.2 },
          stroke: { duration: 0.3 },
          strokeWidth: { duration: 0.3 },
        }}
      />

      {/* LAYER 2: Animated drawing effect (transparent, just for visual draw-in) */}
      <motion.path
        ref={pathRef}
        d={path}
        stroke={isHighlighted ? HUB_COLOR : GRAY_LINE}
        strokeWidth={isHighlighted ? "2" : "1.5"}
        strokeDasharray={`${pathLength} ${pathLength}`}
        strokeDashoffset={pathLength}
        strokeLinecap="round"
        fill="none"
        initial={{ strokeDashoffset: pathLength }}
        whileInView={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ opacity: 0.6 }}
      />

      {/* Animated flow effect when highlighted */}
      {isHighlighted && (
        <motion.path
          d={path}
          stroke={HUB_COLOR}
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
          initial={{ strokeDashoffset: 0 }}
          animate={{
            strokeDashoffset: -8,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Optional start dot */}
      {showStartDot && (
        <motion.circle
          cx={from.x}
          cy={from.y}
          r={isHighlighted ? "3.5" : "3"}
          fill={isHighlighted ? HUB_COLOR : GRAY_LINE}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            r: isHighlighted ? 3.5 : 3,
            fill: isHighlighted ? HUB_COLOR : GRAY_LINE,
          }}
          transition={{
            duration: 0.3,
            delay: delay + 1.3,
            ease: "backOut",
          }}
        />
      )}

      {/* Optional end dot */}
      {showEndDot && (
        <motion.circle
          cx={to.x}
          cy={to.y}
          r={isHighlighted ? "3.5" : "3"}
          fill={isHighlighted ? HUB_COLOR : GRAY_LINE}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            r: isHighlighted ? 3.5 : 3,
            fill: isHighlighted ? HUB_COLOR : GRAY_LINE,
          }}
          transition={{
            duration: 0.3,
            delay: delay + 1.3,
            ease: "backOut",
          }}
        />
      )}
    </g>
  );
}

export function VisionSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(
    null,
  );
  const [leftNodePos, setLeftNodePos] = useState({
    x: 0,
    y: 0,
  });
  const [rightNodePos, setRightNodePos] = useState({
    x: 0,
    y: 0,
  });
  const [hubPos, setHubPos] = useState({
    x: 0,
    y: 0,
    leftEdge: 0,
    rightEdge: 0,
  });
  const [cardPositions, setCardPositions] = useState<{
    left: Array<{ x: number; y: number }>;
    right: Array<{ x: number; y: number }>;
  }>({ left: [], right: [] });

  const leftCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hubRef = useRef<HTMLDivElement>(null);
  const rightCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePositions = () => {
    if (!containerRef.current || !hubRef.current) return;

    const containerRect =
      containerRef.current.getBoundingClientRect();
    const hubRect = hubRef.current.getBoundingClientRect();

    const hubCenterX =
      hubRect.left + hubRect.width / 2 - containerRect.left;
    const hubCenterY =
      hubRect.top + hubRect.height / 2 - containerRect.top;
    const hubLeftEdge = hubRect.left - containerRect.left;
    const hubRightEdge = hubRect.right - containerRect.left;

    // Set hub position
    setHubPos({
      x: hubCenterX,
      y: hubCenterY,
      leftEdge: hubLeftEdge,
      rightEdge: hubRightEdge,
    });

    // Connection nodes positions - SINGLE junction points at hub's vertical center
    // Left node: 60px before the hub's left edge
    const leftNode = {
      x: hubLeftEdge - 60,
      y: hubCenterY,
    };
    // Right node: 60px after the hub's right edge
    const rightNode = {
      x: hubRightEdge + 60,
      y: hubCenterY,
    };

    setLeftNodePos(leftNode);
    setRightNodePos(rightNode);

    // Get all card positions (connection points at the edge of each card)
    const leftPositions = leftCardsRef.current.map((card) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        return {
          x: rect.right - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      }
      return { x: 0, y: 0 };
    });

    const rightPositions = rightCardsRef.current.map((card) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        return {
          x: rect.left - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      }
      return { x: 0, y: 0 };
    });

    setCardPositions({
      left: leftPositions,
      right: rightPositions,
    });
  };

  useEffect(() => {
    // Initial update after a delay to ensure cards are mounted
    const timer1 = setTimeout(updatePositions, 300);
    // Second update to catch any late-mounted cards
    const timer2 = setTimeout(updatePositions, 1000);

    window.addEventListener("resize", updatePositions);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  // Hover logic: highlight the card, its path, the junction node, and the hub
  const isHubHighlighted = hoveredCard !== null;
  const isLeftNodeHighlighted =
    hoveredCard !== null &&
    (hoveredCard === "hub" ||
      supportFunctions.some((f) => f.id === hoveredCard));
  const isRightNodeHighlighted =
    hoveredCard !== null &&
    (hoveredCard === "hub" ||
      acquisitions.some((a) => a.id === hoveredCard));

  return (
    <section
      id="vision"
      className="w-full py-16 md:py-20 lg:py-28 px-5 md:px-10 lg:px-16"
      style={{ background: BG_COLOR }}
    >
      {/* Container centré pour tout le contenu */}
      <div className="flex flex-col items-center mx-auto max-w-[1700px]">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-14 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-[12px] md:text-[13px] tracking-[0.15em] uppercase mb-3 md:mb-4"
            style={{ color: HUB_COLOR, fontWeight: 500 }}
          >
            Notre Vision
          </p>
          <h2 className="text-[28px] md:text-[38px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] mb-5 max-w-[850px] mx-auto">
            L&apos;approche moderne de l&apos;acquisition
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] md:text-[15px] font-semibold tracking-[0.08em] mb-5 text-white shadow-[0_10px_24px_rgba(183,71,42,0.25)] hover:shadow-[0_14px_30px_rgba(183,71,42,0.35)] transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: '#B7472A' }}
          >
            Échangez avec un fondateur
            <span aria-hidden="true">→</span>
          </a>
          <p className="text-[15px] md:text-[17px] text-[#666666] leading-[1.65] max-w-[680px] mx-auto">
            Tholex devient le hub central pour toutes vos
            fonctions support, vous permettant de vous
            concentrer sur votre cœur de métier.
          </p>
        </motion.div>

        {/* Vision Diagram - Centré */}
        <div
          ref={containerRef}
          className="relative bg-white rounded-2xl p-8 md:p-12 lg:p-20 xl:p-32 border border-[#e5e5e5] overflow-hidden w-full"
        >
          {/* SVG Lines Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {/* LEFT SIDE: Support Function Cards → Left Junction Node */}
            {cardPositions.left.map((cardPos, index) => {
              const funcId = supportFunctions[index].id;
              const isHighlighted =
                hoveredCard === funcId || hoveredCard === "hub";

              return (
                <CurvedLine
                  key={`left-card-${funcId}`}
                  from={cardPos}
                  to={leftNodePos}
                  isHighlighted={isHighlighted}
                  delay={0.5 + index * 0.08}
                  showStartDot={true}
                />
              );
            })}

            {/* Left Junction Node (single convergence point) */}
            <ConnectionNode
              x={leftNodePos.x}
              y={leftNodePos.y}
              isHighlighted={isLeftNodeHighlighted}
              delay={1.1}
            />

            {/* Left Junction Node → Hub */}
            <CurvedLine
              from={leftNodePos}
              to={{ x: hubPos.leftEdge, y: hubPos.y }}
              isHighlighted={isLeftNodeHighlighted}
              delay={1.2}
            />

            {/* Hub → Right Junction Node */}
            <CurvedLine
              from={{ x: hubPos.rightEdge, y: hubPos.y }}
              to={rightNodePos}
              isHighlighted={isRightNodeHighlighted}
              delay={1.3}
            />

            {/* Right Junction Node (single branching point) */}
            <ConnectionNode
              x={rightNodePos.x}
              y={rightNodePos.y}
              isHighlighted={isRightNodeHighlighted}
              delay={1.4}
            />

            {/* RIGHT SIDE: Acquisition Cards → Right Junction Node */}
            {acquisitions.map((acquisition, index) => {
              const cardPos = cardPositions.right[index];
              if (!cardPos || cardPos.x === 0) return null;

              const acqId = acquisition.id;
              const isHighlighted =
                hoveredCard === acqId || hoveredCard === "hub";

              return (
                <CurvedLine
                  key={`right-card-${acqId}`}
                  from={cardPos}
                  to={rightNodePos}
                  isHighlighted={isHighlighted}
                  delay={0.5 + index * 0.08}
                  showStartDot={true}
                />
              );
            })}
          </svg>

          {/* Content Grid */}
          <div
            className="relative grid grid-cols-1 lg:grid-cols-[auto_auto_auto] gap-12 lg:gap-32 xl:gap-56 justify-center items-center"
            style={{ zIndex: 2 }}
          >
            {/* Left Column - Support Functions */}
            <div className="flex flex-col gap-3 lg:items-end justify-center">
              {supportFunctions.map((func, index) => (
                <FunctionCard
                  key={func.id}
                  icon={func.icon}
                  label={func.label}
                  delay={0.1 + index * 0.06}
                  isHighlighted={hoveredCard === func.id}
                  onHover={() => setHoveredCard(func.id)}
                  onLeave={() => setHoveredCard(null)}
                  cardRef={(el) => {
                    leftCardsRef.current[index] = el;
                  }}
                />
              ))}
            </div>

            {/* Center - Tholex Hub */}
            <div
              onMouseEnter={() => setHoveredCard("hub")}
              onMouseLeave={() => setHoveredCard(null)}
              className="flex justify-center my-6 lg:my-0"
            >
              <HubCard
                isHighlighted={isHubHighlighted}
                hubRef={(el) => {
                  hubRef.current = el;
                }}
              />
            </div>

            {/* Right Column - Acquisitions */}
            <div className="flex flex-col gap-4 lg:items-start justify-center">
              {acquisitions.map((acq, index) => (
                <AcquisitionCard
                  key={acq.id}
                  acquisition={acq}
                  delay={0.6 + index * 0.12}
                  isHighlighted={hoveredCard === acq.id}
                  onHover={() => setHoveredCard(acq.id)}
                  onLeave={() => setHoveredCard(null)}
                  cardRef={(el) => {
                    rightCardsRef.current[index] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="text-center mt-12 md:mt-16 w-full"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true, margin: "-120px" }}
        >
          <h3 className="text-[22px] md:text-[26px] font-semibold text-[#1f1f1f] tracking-[-0.01em]">
            Vous restez concentré sur l'essentiel, nous prenons le reste
          </h3>
          <p className="mt-3 text-[14px] md:text-[16px] text-[#666666] max-w-[520px] mx-auto leading-[1.7] mb-12 md:mb-16 lg:mb-20">
            Tholex absorbe vos fonctions support pour que vous puissiez poursuivre ce qui fait la valeur de votre entreprise : vos clients, vos équipes et votre qualité de service.
          </p>
        </motion.div>

        {/* Benefits Cards - What founders can focus on - Centrées */}
        <motion.div
          className="flex justify-center items-stretch gap-6 md:gap-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true, margin: "-120px" }}
        >
          {/* Card 1: Relation Client */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#B7472A] hover:shadow-lg transition-all duration-300 w-full max-w-[280px] flex flex-col items-center justify-center p-8"
          >
            <div className="w-16 h-16 rounded-full bg-[#FFF9F5] flex items-center justify-center mb-5">
              <UserCheck className="w-8 h-8 text-[#B7472A]" strokeWidth={2} />
            </div>
            <h4 className="text-[16px] md:text-[17px] font-bold text-[#333333] text-center mb-3 leading-tight">
              Relation Client
            </h4>
            <p className="text-[12px] md:text-[13px] text-[#666666] text-center leading-relaxed">
              Cultivez vos comptes clés et développez votre portefeuille commercial
            </p>
          </motion.div>

          {/* Card 2: Formation Interne */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#B7472A] hover:shadow-lg transition-all duration-300 w-full max-w-[280px] flex flex-col items-center justify-center p-8"
          >
            <div className="w-16 h-16 rounded-full bg-[#FFF9F5] flex items-center justify-center mb-5">
              <GraduationCap className="w-8 h-8 text-[#B7472A]" strokeWidth={2} />
            </div>
            <h4 className="text-[16px] md:text-[17px] font-bold text-[#333333] text-center mb-3 leading-tight">
              Formation Interne
            </h4>
            <p className="text-[12px] md:text-[13px] text-[#666666] text-center leading-relaxed">
              Transmettez votre savoir-faire et faites monter en compétences vos équipes
            </p>
          </motion.div>

          {/* Card 3: Qualité de Service */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#B7472A] hover:shadow-lg transition-all duration-300 w-full max-w-[280px] flex flex-col items-center justify-center p-8"
          >
            <div className="w-16 h-16 rounded-full bg-[#FFF9F5] flex items-center justify-center mb-5">
              <Award className="w-8 h-8 text-[#B7472A]" strokeWidth={2} />
            </div>
            <h4 className="text-[16px] md:text-[17px] font-bold text-[#333333] text-center mb-3 leading-tight">
              Qualité de Service
            </h4>
            <p className="text-[12px] md:text-[13px] text-[#666666] text-center leading-relaxed">
              Garantissez l&apos;excellence opérationnelle et la satisfaction client
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
