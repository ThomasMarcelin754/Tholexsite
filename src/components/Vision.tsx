import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  ScaleIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  MegaphoneIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  UserIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

// Network Graph Component
function NetworkGraph() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    // Define nodes
    const nodes: Array<{id: string, name: string, type: string, x: number, y: number, radius: number}> = [
      { id: "tholex-hub", name: "Tholex Hub", type: "orchestrator", x: centerX, y: centerY, radius: 40 },
      { id: "production", name: "Production", type: "business", x: centerX - 200, y: centerY - 150, radius: 30 },
      { id: "relation-client", name: "Relation client", type: "business", x: centerX + 200, y: centerY - 150, radius: 30 },
      { id: "qualite", name: "Qualité", type: "business", x: centerX - 200, y: centerY + 150, radius: 30 },
      { id: "formation", name: "Formation", type: "business", x: centerX + 200, y: centerY + 150, radius: 30 },
    ];

    // Define links with flow labels
    const links = [
      { source: "tholex-hub", target: "production", label: "CRM unified", particles: 3 },
      { source: "tholex-hub", target: "relation-client", label: "HR data", particles: 4 },
      { source: "tholex-hub", target: "qualite", label: "Standards", particles: 2 },
      { source: "tholex-hub", target: "formation", label: "Competences", particles: 3 },
      { source: "production", target: "tholex-hub", label: "Feedback", particles: 2 },
      { source: "relation-client", target: "tholex-hub", label: "Deliveries", particles: 3 },
    ];

    // Create simulation
    const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(150).strength(0.1))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(centerX, centerY))
      .force("collision", d3.forceCollide().radius((d: any) => (d as any).radius + 5));

    // Create links
    const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .attr("stroke", "#e5e7eb")
      .attr("stroke-width", 2)
      .attr("stroke-opacity", 0.6);

    // Create link labels
    const linkLabels = svg.append("g")
      .attr("class", "link-labels")
      .selectAll("text")
      .data(links)
      .enter().append("text")
      .text((d: any) => d.label)
      .attr("font-size", "10px")
      .attr("fill", "#6b7280")
      .attr("text-anchor", "middle")
      .attr("dy", -5);

    // Create particles container
    const particlesContainer = svg.append("g")
      .attr("class", "particles");

    // Create nodes
    const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", (d: any) => d.radius)
      .attr("fill", (d: any) => {
        if (d.type === "orchestrator") return "#B7410E";
        return d.id === "production" || d.id === "qualite" ? "#10B981" : "#3B82F6";
      })
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 3)
      .call(d3.drag<SVGCircleElement, any>()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    // Add node labels
    const nodeLabels = svg.append("g")
      .attr("class", "node-labels")
      .selectAll("text")
      .data(nodes)
      .enter().append("text")
      .text((d: any) => d.name)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#ffffff")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em");

    // Create particles for each link
    const particles: any[] = [];
    links.forEach((linkData: any, linkIndex) => {
      for (let i = 0; i < linkData.particles; i++) {
        particles.push({
          linkIndex,
          progress: i / linkData.particles,
          size: Math.random() * 3 + 2
        });
      }
    });

    const particleElements = particlesContainer
      .selectAll("circle")
      .data(particles)
      .enter().append("circle")
      .attr("r", (d: any) => d.size)
      .attr("fill", "#B7410E")
      .attr("opacity", 0.7);

    // Update positions on simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      linkLabels
        .attr("x", (d: any) => (d.source.x + d.target.x) / 2)
        .attr("y", (d: any) => (d.source.y + d.target.y) / 2);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);

      nodeLabels
        .attr("x", (d: any) => d.x)
        .attr("y", (d: any) => d.y);

      // Animate particles
      particleElements.each(function(d: any) {
        const linkData = links[d.linkIndex];
        const source = linkData.source as any;
        const target = linkData.target as any;

        // Update particle position along the link
        const t = d.progress;
        const x = source.x + (target.x - source.x) * t;
        const y = source.y + (target.y - source.y) * t;

        d3.select(this)
          .attr("cx", x)
          .attr("cy", y);

        // Move particle forward
        d.progress += 0.01;
        if (d.progress > 1) d.progress = 0;
      });
    });

    // Add glow effect to orchestrator node
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    filter.append("feGaussianBlur")
      .attr("stdDeviation", 3)
      .attr("result", "coloredBlur");

    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Apply glow effect to orchestrator node
    node.filter((d: any) => d.id === "tholex-hub")
      .attr("filter", "url(#glow)");

  }, []);

  return (
    <div className="flex justify-center">
      <svg ref={svgRef} className="border border-gray-200 rounded-lg shadow-lg bg-gray-50"></svg>
    </div>
  );
}

export default function Vision() {
  return (
    <section id="vision" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Notre vision</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Optimiser l'organisation des entreprises en externalisant les fonctions support
            vers un back-office mutualisé, permettant aux équipes terrain de se concentrer
            entièrement sur leur cœur de métier et la création de valeur.
          </p>
        </div>

        {/* Network Graph */}
        <div className="mb-8">
          <NetworkGraph />
        </div>

        {/* Legend */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#B7410E]"></div>
              <span>Tholex Hub (Orchestrateur)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#10B981]"></div>
              <span>Équipes Business (High-Value)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#3B82F6]"></div>
              <span>Équipes Business (High-Value)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
