import * as THREE from 'three';
import { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      rect.width / rect.height,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer setup with better quality
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create multiple star layers for parallax effect
    const createStarField = (count: number, size: number, speed: number) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count);

      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 200;     // x
        positions[i + 1] = (Math.random() - 0.5) * 200; // y
        positions[i + 2] = (Math.random() - 0.5) * 200; // z
        velocities[i / 3] = Math.random() * speed;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size,
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      return { points, positions, velocities };
    };

    // Create three layers of stars
    const starLayers = [
      createStarField(1000, 0.15, 0.02), // Small, slow stars
      createStarField(500, 0.25, 0.03),  // Medium stars
      createStarField(200, 0.35, 0.04),  // Large, fast stars
    ];

    // Animation loop
    const animate = () => {
      starLayers.forEach(({ points, positions, velocities }) => {
        const positionArray = points.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < positions.length; i += 3) {
          positionArray[i + 2] += velocities[i / 3];
          
          // Reset star position when it goes too far
          if (positionArray[i + 2] > 100) {
            positionArray[i + 2] = -100;
          }
        }
        
        points.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newRect = container.getBoundingClientRect();
      camera.aspect = newRect.width / newRect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(newRect.width, newRect.height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      starLayers.forEach(({ points }) => {
        points.geometry.dispose();
        (points.material as THREE.PointsMaterial).dispose();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default SpaceBackground;
