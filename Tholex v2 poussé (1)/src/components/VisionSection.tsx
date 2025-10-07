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
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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
        ${isHighlighted ? "border-[#E63946] shadow-md" : "border-[#e5e5e5] hover:border-[#d1d1d1]"}
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            w-8 h-8 flex-shrink-0 rounded-md flex items-center justify-center transition-all duration-300
            ${isHighlighted ? "bg-[#E63946]" : "bg-[#f8f8f8]"}
          `}
        >
          <Icon
            className={`w-4 h-4 transition-colors duration-300 ${isHighlighted ? "text-white" : "text-[#666666]"}`}
            strokeWidth={2}
          />
        </div>
        <span
          className={`text-[13px] transition-colors duration-300 ${isHighlighted ? "text-[#E63946]" : "text-[#333333]"}`}
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
          ${isHighlighted ? "border-[#E63946] shadow-lg" : "border-[#B7472A]"}
        `}
        style={{
          background: isHighlighted ? ACCENT_COLOR : HUB_COLOR,
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
        border: `1.5px solid ${isHighlighted ? ACCENT_COLOR : "transparent"}`,
      }}
    >
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <div className="relative w-11 h-11 flex-shrink-0">
          <ImageWithFallback
            src={acquisition.imageUrl}
            alt={acquisition.name}
            className="w-full h-full rounded-full object-cover"
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
            className={`text-[13px] truncate transition-colors duration-300 ${isHighlighted ? "text-[#E63946]" : "text-[#333333]"}`}
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
          stroke={ACCENT_COLOR}
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
        fill={isHighlighted ? ACCENT_COLOR : HUB_COLOR}
        stroke="white"
        strokeWidth="2.5"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay,
          ease: "backOut",
        }}
        viewport={{ once: true }}
        animate={{
          r: isHighlighted ? 6 : 5,
          fill: isHighlighted ? ACCENT_COLOR : HUB_COLOR,
        }}
        transition={{
          duration: 0.3,
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
          transition={{
            duration: 0.3,
          }}
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
        stroke={isHighlighted ? ACCENT_COLOR : GRAY_LINE}
        strokeWidth={isHighlighted ? "2" : "1.5"}
        strokeDasharray="4 4"
        strokeLinecap="round"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: delay + 1.2,
        }}
        viewport={{ once: true, margin: "-100px" }}
        animate={{
          stroke: isHighlighted ? ACCENT_COLOR : GRAY_LINE,
          strokeWidth: isHighlighted ? 2 : 1.5,
        }}
        transition={{
          stroke: { duration: 0.3 },
          strokeWidth: { duration: 0.3 },
        }}
      />

      {/* LAYER 2: Animated drawing effect (transparent, just for visual draw-in) */}
      <motion.path
        ref={pathRef}
        d={path}
        stroke={isHighlighted ? ACCENT_COLOR : GRAY_LINE}
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
          stroke={ACCENT_COLOR}
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
          fill={isHighlighted ? ACCENT_COLOR : GRAY_LINE}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: delay + 1.3,
            ease: "backOut",
          }}
          viewport={{ once: true }}
          animate={{
            r: isHighlighted ? 3.5 : 3,
            fill: isHighlighted ? ACCENT_COLOR : GRAY_LINE,
          }}
          transition={{
            duration: 0.3,
          }}
        />
      )}

      {/* Optional end dot */}
      {showEndDot && (
        <motion.circle
          cx={to.x}
          cy={to.y}
          r={isHighlighted ? "3.5" : "3"}
          fill={isHighlighted ? ACCENT_COLOR : GRAY_LINE}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: delay + 1.3,
            ease: "backOut",
          }}
          viewport={{ once: true }}
          animate={{
            r: isHighlighted ? 3.5 : 3,
            fill: isHighlighted ? ACCENT_COLOR : GRAY_LINE,
          }}
          transition={{
            duration: 0.3,
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
    const timer = setTimeout(updatePositions, 300);
    window.addEventListener("resize", updatePositions);
    return () => {
      clearTimeout(timer);
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
      className="w-full py-16 md:py-20 lg:py-28 px-5 md:px-10 lg:px-16"
      style={{ background: BG_COLOR }}
    >
      <div className="max-w-[1700px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
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
            L'approche moderne de l'acquisition
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#666666] leading-[1.65] max-w-[680px] mx-auto">
            Tholex devient le hub central pour toutes vos
            fonctions support, vous permettant de vous
            concentrer sur votre cœur de métier.
          </p>
        </motion.div>

        {/* Vision Diagram */}
        <div
          ref={containerRef}
          className="relative bg-white rounded-2xl p-8 md:p-12 lg:p-20 xl:p-32 border border-[#e5e5e5] overflow-hidden"
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

            {/* RIGHT SIDE: Right Junction Node → Acquisition Cards */}
            {cardPositions.right.map((cardPos, index) => {
              const acqId = acquisitions[index].id;
              const isHighlighted =
                hoveredCard === acqId || hoveredCard === "hub";

              return (
                <CurvedLine
                  key={`right-card-${acqId}`}
                  from={rightNodePos}
                  to={cardPos}
                  isHighlighted={isHighlighted}
                  delay={1.5 + index * 0.12}
                  showEndDot={true}
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

        {/* Bottom hint */}
        <motion.div
          className="text-center mt-8 md:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[13px] text-[#999999] italic">
            Survolez les cartes pour voir les connexions
            ramifiées s'animer
          </p>
        </motion.div>
      </div>
    </section>
  );
}