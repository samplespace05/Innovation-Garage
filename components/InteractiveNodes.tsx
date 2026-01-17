// "use client";
// import { useEffect, useRef } from "react";

// export default function InteractiveNodes() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = 0;
//     let height = 0;
//     let animationFrameId: number;
//     let mouse = { x: -1000, y: -1000 };

//     // --- CONFIGURATION ---
//     const particleCount = ; // Number of nodes
//     const connectionDistance = 110; // Range to draw lines
//     const mouseRange = 150; // Mouse influence radius
//     const colors = ["#FF6A00", "#D726FF", "#FFFFFF"]; // Orange, Magenta, White

//     class Particle {
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       size: number;
//       color: string;

//       constructor() {
//         this.x = Math.random() * width;
//         this.y = Math.random() * height;
//         this.vx = (Math.random() - 0.5) * 0.8; // Random velocity X
//         this.vy = (Math.random() - 0.5) * 0.8; // Random velocity Y
//         this.size = Math.random() * 2.5 + 1;
//         this.color = colors[Math.floor(Math.random() * colors.length)];
//       }

//       update() {
//         // Move
//         this.x += this.vx;
//         this.y += this.vy;

//         // Bounce off walls
//         if (this.x < 0 || this.x > width) this.vx *= -1;
//         if (this.y < 0 || this.y > height) this.vy *= -1;

//         // Mouse Attraction
//         const dx = mouse.x - this.x;
//         const dy = mouse.y - this.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < mouseRange) {
//           // Gentle pull towards mouse
//           const force = (mouseRange - distance) / mouseRange;
//           this.x += (dx / distance) * force * 1.5; 
//           this.y += (dy / distance) * force * 1.5;
//         }
//       }

//       draw() {
//         if (!ctx) return;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         // Add Glow
//         ctx.shadowBlur = 10;
//         ctx.shadowColor = this.color;
//         ctx.fill();
//         // Reset Glow for lines to save performance
//         ctx.shadowBlur = 0;
//       }
//     }

//     let particles: Particle[] = [];

//     const init = () => {
//       if (canvas.parentElement) {
//         width = canvas.parentElement.clientWidth;
//         height = canvas.parentElement.clientHeight;
//         canvas.width = width;
//         canvas.height = height;
//       }
      
//       particles = [];
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle());
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);

//       // Draw Particles
//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });

//       // Draw Connections
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const a = particles[i];
//           const b = particles[j];
//           const dx = a.x - b.x;
//           const dy = a.y - b.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < connectionDistance) {
//             ctx.beginPath();
//             // Opacity based on distance (fades out as they get further)
//             const opacity = 1 - distance / connectionDistance;
//             ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
//             ctx.lineWidth = 1;
//             ctx.moveTo(a.x, a.y);
//             ctx.lineTo(b.x, b.y);
//             ctx.stroke();
//           }
//         }
//       }
      
//       // Draw Mouse Connections (Interactive Spiderweb)
//       particles.forEach((p) => {
//         const dx = mouse.x - p.x;
//         const dy = mouse.y - p.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
        
//         if (dist < mouseRange) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(215, 38, 255, ${0.4})`; // Magenta Mouse Lines
//             ctx.lineWidth = 1.5;
//             ctx.moveTo(mouse.x, mouse.y);
//             ctx.lineTo(p.x, p.y);
//             ctx.stroke();
//         }
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     const handleResize = () => init();
//     const handleMouseMove = (e: MouseEvent) => {
//         const rect = canvas.getBoundingClientRect();
//         mouse.x = e.clientX - rect.left;
//         mouse.y = e.clientY - rect.top;
//     };
//     const handleMouseLeave = () => {
//         mouse.x = -1000;
//         mouse.y = -1000;
//     };

//     window.addEventListener("resize", handleResize);
//     canvas.addEventListener("mousemove", handleMouseMove);
//     canvas.addEventListener("mouseleave", handleMouseLeave);

//     init();
//     animate();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       canvas.removeEventListener("mousemove", handleMouseMove);
//       canvas.removeEventListener("mouseleave", handleMouseLeave);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />;
// }




// // 





"use client";
import { useEffect, useRef } from "react";

interface InteractiveNodesProps {
  biasRight?: boolean; // New prop to control particle distribution
}

export default function InteractiveNodes({ biasRight = false }: InteractiveNodesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    let particles: Particle[] = [];

    const connectionDistance = 120;
    const mouseRange = 180;
    const colors = ["#FF6A00", "#D726FF", "#FFFFFF"];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.y = Math.random() * height;
        
        // --- LOGIC FOR CROWDING THE RIGHT SIDE ---
        if (biasRight) {
            // 75% chance to spawn in the right half (50% to 100% of width)
            // 25% chance to spawn anywhere
            if (Math.random() > 0.25) {
                this.x = width * (0.4 + Math.random() * 0.6); 
            } else {
                this.x = Math.random() * width;
            }
        } else {
            this.x = Math.random() * width;
        }

        this.vx = (Math.random() - 0.5) * 0.5; // Slower velocity to keep them in place longer
        this.vy = (Math.random() - 0.5) * 0.5; 
        this.size = Math.random() * 2.5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse Attraction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRange) {
          const force = (mouseRange - distance) / mouseRange;
          this.x += (dx / distance) * force * 1.5; 
          this.y += (dy / distance) * force * 1.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      if (canvas.parentElement) {
        width = canvas.parentElement.clientWidth;
        height = canvas.parentElement.clientHeight;
        canvas.width = width;
        canvas.height = height;
      }
      
      const area = width * height;
      // Slightly fewer particles for the header to keep it clean
      const particleCount = Math.floor(area / 5000); 

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      
      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouseRange) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(215, 38, 255, ${0.4})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [biasRight]);

  return <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />;
}