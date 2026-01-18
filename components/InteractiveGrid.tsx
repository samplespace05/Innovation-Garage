// "use client";
// import { useEffect, useRef } from "react";

// export default function InteractiveGrid() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let animationFrameId: number;
//     let mouse = { x: -1000, y: -1000 };
//     let isClicked = false;

//     // Grid Configuration
//     const spacing = 40; // Space between grid points
//     const returnSpeed = 0.05; // How fast points return to origin
//     const magnetStrength = 0.5; // How strongly mouse pulls points
//     const explosionForce = 50; // How hard they blast on click
    
//     // Points Array
//     let points: Point[] = [];

//     class Point {
//       x: number;
//       y: number;
//       originX: number;
//       originY: number;
//       vx: number;
//       vy: number;

//       constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//         this.originX = x;
//         this.originY = y;
//         this.vx = 0;
//         this.vy = 0;
//       }

//       update() {
//         // Distance from mouse
//         const dx = mouse.x - this.x;
//         const dy = mouse.y - this.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         // 1. Mouse Interaction
//         if (isClicked) {
//           // EXPLOSION (Disperse)
//           if (distance < 300) {
//             const force = (300 - distance) / 300;
//             this.vx -= (dx / distance) * force * explosionForce;
//             this.vy -= (dy / distance) * force * explosionForce;
//           }
//         } else {
//           // ATTRACTION (Accumulate/Catch)
//           if (distance < 200) {
//             const force = (200 - distance) / 200;
//             this.vx += (dx / distance) * force * magnetStrength;
//             this.vy += (dy / distance) * force * magnetStrength;
//           }
//         }

//         // 2. Return to Origin (Spring force)
//         const homeDx = this.originX - this.x;
//         const homeDy = this.originY - this.y;
        
//         this.vx += homeDx * returnSpeed;
//         this.vy += homeDy * returnSpeed;

//         // 3. Friction (Damping)
//         this.vx *= 0.85; // Higher = slippery, Lower = sticky
//         this.vy *= 0.85;

//         // 4. Apply Velocity
//         this.x += this.vx;
//         this.y += this.vy;
//       }
//     }

//     const init = () => {
//       points = [];
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       // Create a grid of points covering the screen
//       for (let x = 0; x < canvas.width + spacing; x += spacing) {
//         for (let y = 0; y < canvas.height + spacing; y += spacing) {
//           points.push(new Point(x, y));
//         }
//       }
//     };

//     const draw = () => {
//       // Clear Screen with slight fade for trail effect (optional, here we clear fully)
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // We need to draw lines between neighbors. 
//       // Since points are in a 1D array, logic is a bit tricky. 
//       // Simplified: Just draw points or nearest neighbors. 
//       // For performance/style, let's draw dots that connect when close.
      
//       ctx.lineWidth = 1;

//       for (let i = 0; i < points.length; i++) {
//         const p = points[i];
//         p.update();

//         // Draw Dot
//         ctx.fillStyle = "rgba(255, 106, 0, 0.3)"; // Neon Orange
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
//         ctx.fill();

//         // Draw Connections (Threads)
//         // Only check "right" and "bottom" neighbors in the original grid structure to save performance
//         // Actually, checking standard neighbors in 1D array is complex if window resizes.
//         // Let's use distance check for "Organic" threads.
        
//         // Optimization: Only check a subset or purely rely on grid index if we tracked rows/cols.
//         // Let's stick to a simpler visual: The "Warped Grid".
//       }
      
//       // Draw Grid Lines (Re-loop to connect)
//       // We assume points are generated in columns.
//       const rows = Math.ceil(canvas.height / spacing) + 1;
//       // const cols = Math.ceil(canvas.width / spacing) + 1;

//       for (let i = 0; i < points.length; i++) {
//         const p = points[i];
//         const nextP = points[i + 1]; // Right neighbor (mostly)
//         const bottomP = points[i + rows]; // Bottom neighbor

//         // Color Logic: Mix Orange and Magenta
//         const color = (i % 2 === 0) ? "rgba(255, 106, 0, 0.15)" : "rgba(215, 38, 255, 0.15)";
//         ctx.strokeStyle = color;

//         // Draw Right Line
//         // Simple check to prevent wrapping lines across screen
//         if (nextP && Math.abs(nextP.originX - p.originX) === spacing) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(nextP.x, nextP.y);
//             ctx.stroke();
//         }

//         // Draw Bottom Line
//         if (bottomP && Math.abs(bottomP.originY - p.originY) === spacing) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(bottomP.x, bottomP.y);
//             ctx.stroke();
//         }
//       }

//       animationFrameId = requestAnimationFrame(draw);
//     };

//     // Event Listeners
//     const handleResize = () => init();
//     const handleMouseMove = (e: MouseEvent) => {
//         // Adjust for canvas position if needed, but usually absolute inset-0 works
//         const rect = canvas.getBoundingClientRect();
//         mouse.x = e.clientX - rect.left;
//         mouse.y = e.clientY - rect.top;
//     };
//     const handleMouseDown = () => { isClicked = true; };
//     const handleMouseUp = () => { isClicked = false; };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     init();
//     draw();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas 
//         ref={canvasRef} 
//         className="absolute inset-0 w-full h-full pointer-events-auto"
//         style={{ zIndex: 0 }} 
//     />
//   );
// }



// "use client";
// import { useEffect, useRef } from "react";

// export default function InteractiveGrid() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let animationFrameId: number;
//     let mouse = { x: -1000, y: -1000 };
//     let isClicked = false;

//     // --- VISUAL CONFIGURATION (UPDATED) ---
    // const spacing = 45;          // Slightly wider spacing
    // const dotSize = 5.0         // Larger dots (was 1.5)
    // const dotOpacity = 0.6;      // Much darker dots (was 0.3)
    // const lineOpacity = 0.54;     // Much darker lines (was 0.15)
    
    // // --- PHYSICS CONFIGURATION ---
    // const returnSpeed = 0.005; 
    // const magnetStrength = 1;  // Slightly stronger pull
    // const explosionForce = 60;   
    
//     let points: Point[] = [];

//     class Point {
//       x: number;
//       y: number;
//       originX: number;
//       originY: number;
//       vx: number;
//       vy: number;

//       constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//         this.originX = x;
//         this.originY = y;
//         this.vx = 0;
//         this.vy = 0;
//       }

//       update() {
//         const dx = mouse.x - this.x;
//         const dy = mouse.y - this.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (isClicked) {
//           if (distance < 300) {
//             const force = (300 - distance) / 300;
//             this.vx -= (dx / distance) * force * explosionForce;
//             this.vy -= (dy / distance) * force * explosionForce;
//           }
//         } else {
//           if (distance < 250) { // Increased range slightly
//             const force = (250 - distance) / 250;
//             this.vx += (dx / distance) * force * magnetStrength;
//             this.vy += (dy / distance) * force * magnetStrength;
//           }
//         }

//         const homeDx = this.originX - this.x;
//         const homeDy = this.originY - this.y;
        
//         this.vx += homeDx * returnSpeed;
//         this.vy += homeDy * returnSpeed;

//         this.vx *= 0.85;
//         this.vy *= 0.85;

//         this.x += this.vx;
//         this.y += this.vy;
//       }
//     }

//     const init = () => {
//       points = [];
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       // Extend grid slightly off-screen to prevent edges showing on warp
//       for (let x = -spacing; x < canvas.width + spacing * 2; x += spacing) {
//         for (let y = -spacing; y < canvas.height + spacing * 2; y += spacing) {
//           points.push(new Point(x, y));
//         }
//       }
//     };

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.lineWidth = 1; // Thicker lines? Keep 1 for elegance, opacity does the work.

//       // We calculate rows based on the extended grid size
//       const rows = Math.ceil((canvas.height + spacing * 3) / spacing);

//       for (let i = 0; i < points.length; i++) {
//         const p = points[i];
//         p.update();

//         // 1. Draw Dot (Larger & Darker)
//         // Alternating colors for dots too
//         ctx.fillStyle = (i % 2 === 0) 
//             ? `rgba(255, 106, 0, ${dotOpacity})`   // Neon Orange
//             : `rgba(215, 38, 255, ${dotOpacity})`; // Neon Magenta
            
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
//         ctx.fill();

//         // 2. Draw Lines (Stronger opacity)
//         const nextP = points[i + 1]; 
//         const bottomP = points[i + rows];

//         const lineColor = (i % 2 === 0) 
//             ? `rgba(255, 106, 0, ${lineOpacity})` 
//             : `rgba(215, 38, 255, ${lineOpacity})`;
            
//         ctx.strokeStyle = lineColor;

//         // Draw Right Line
//         if (nextP && Math.abs(nextP.originX - p.originX) === spacing) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(nextP.x, nextP.y);
//             ctx.stroke();
//         }

//         // Draw Bottom Line
//         if (bottomP && Math.abs(bottomP.originY - p.originY) === spacing) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(bottomP.x, bottomP.y);
//             ctx.stroke();
//         }
//       }

//       animationFrameId = requestAnimationFrame(draw);
//     };

//     const handleResize = () => init();
//     const handleMouseMove = (e: MouseEvent) => {
//         const rect = canvas.getBoundingClientRect();
//         mouse.x = e.clientX - rect.left;
//         mouse.y = e.clientY - rect.top;
//     };
//     const handleMouseDown = () => { isClicked = true; };
//     const handleMouseUp = () => { isClicked = false; };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     init();
//     draw();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas 
//         ref={canvasRef} 
//         className="absolute inset-0 w-full h-full pointer-events-auto"
//         style={{ zIndex: 0 }} 
//     />
//   );
// }




"use client";
import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    let isClicked = false;

    // --- VISUAL CONFIGURATION ---
    const spacing = 45;          
    const dotSize = 3.5;        
    const dotOpacity = 0.6;      
    const lineOpacity = 0.54;     
    
    // --- PHYSICS CONFIGURATION ---
    const returnSpeed = 0.005; 
    const magnetStrength = 1;  
    const explosionForce = 60;    
    
    let points: Point[] = [];

    class Point {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.vx = 0;
        this.vy = 0;
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (isClicked) {
          if (distance < 300) {
            const force = (300 - distance) / 300;
            this.vx -= (dx / distance) * force * explosionForce;
            this.vy -= (dy / distance) * force * explosionForce;
          }
        } else {
          if (distance < 250) { 
            const force = (250 - distance) / 250;
            this.vx += (dx / distance) * force * magnetStrength;
            this.vy += (dy / distance) * force * magnetStrength;
          }
        }

        const homeDx = this.originX - this.x;
        const homeDy = this.originY - this.y;
        
        this.vx += homeDx * returnSpeed;
        this.vy += homeDy * returnSpeed;

        this.vx *= 0.85;
        this.vy *= 0.85;

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      // 🔴 FIX: Measure the PARENT element (Div), not the WINDOW
      if (canvas.parentElement) {
        // We set the internal canvas resolution to match the display size 1:1
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      points = [];
      // Extend grid slightly off-screen
      for (let x = -spacing; x < canvas.width + spacing * 2; x += spacing) {
        for (let y = -spacing; y < canvas.height + spacing * 2; y += spacing) {
          points.push(new Point(x, y));
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const rows = Math.ceil((canvas.height + spacing * 3) / spacing);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.update();

        // 1. Draw Dot
        ctx.fillStyle = (i % 2 === 0) 
            ? `rgba(255, 106, 0, ${dotOpacity})`   
            : `rgba(215, 38, 255, ${dotOpacity})`; 
            
        ctx.beginPath();
        ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
        ctx.fill();

        // 2. Draw Lines
        const nextP = points[i + 1]; 
        const bottomP = points[i + rows];

        const lineColor = (i % 2 === 0) 
            ? `rgba(255, 106, 0, ${lineOpacity})` 
            : `rgba(215, 38, 255, ${lineOpacity})`;
            
        ctx.strokeStyle = lineColor;

        if (nextP && Math.abs(nextP.originX - p.originX) === spacing) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nextP.x, nextP.y);
            ctx.stroke();
        }

        if (bottomP && Math.abs(bottomP.originY - p.originY) === spacing) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(bottomP.x, bottomP.y);
            ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => init();
    
    const handleMouseMove = (e: MouseEvent) => {
        // 🔴 FIX: Get exact position relative to canvas, accounting for scrolling/layout
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseDown = () => { isClicked = true; };
    const handleMouseUp = () => { isClicked = false; };

    window.addEventListener("resize", handleResize);
    // Listen for mouse moves on the CANVAS specifically (or window if you prefer global capture)
    // Using window ensures we catch movement even if we drift slightly off the pixels
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    init();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ zIndex: 0 }} 
    />
  );
}