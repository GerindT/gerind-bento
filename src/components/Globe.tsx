import { onCleanup, onMount } from "solid-js";
import * as d3 from "d3";
import worldData from "../lib/world.json";
import { visitedCountries } from "../lib/places";

const GlobeComponent = () => {
  let mapContainer: HTMLDivElement | undefined;

  onMount(() => {
    if (!mapContainer) return;

    const width = mapContainer.clientWidth || 480;
    const size = Math.min(width, 520);
    const radius = size / 2 - 6;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .rotate([-10, -30])
      .translate([width / 2, size / 2]);
    const pathGenerator = d3.geoPath().projection(projection);

    const svg = d3
      .select(mapContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", size)
      .attr("viewBox", `0 0 ${width} ${size}`)
      .attr("role", "img")
      .attr("aria-label", `Globe highlighting ${visitedCountries.length} countries Gerind has visited`);

    svg
      .append("circle")
      .attr("cx", width / 2)
      .attr("cy", size / 2)
      .attr("r", radius)
      .style("fill", "var(--ink-2)")
      .style("stroke", "var(--paper)")
      .style("stroke-width", 3);

    const paths = svg
      .append("g")
      .selectAll("path")
      .data((worldData as any).features)
      .enter()
      .append("path")
      .attr("d", (d: any) => pathGenerator(d) as string)
      .style("fill", (d: any) => (visitedCountries.includes(d.properties.name) ? "var(--accent)" : "var(--ink-3)"))
      .style("stroke", "var(--ink)")
      .style("stroke-width", 0.4);

    const redraw = () => paths.attr("d", (d: any) => pathGenerator(d) as string);

    if (reduceMotion) return;

    let visible = true;
    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    observer.observe(mapContainer);

    const timer = d3.timer(() => {
      if (!visible || document.hidden) return;
      const [x, y] = projection.rotate();
      projection.rotate([x + 0.35, y]);
      redraw();
    });

    onCleanup(() => {
      timer.stop();
      observer.disconnect();
    });
  });

  return <div ref={mapContainer} style={{ width: "100%" }} />;
};

export default GlobeComponent;
