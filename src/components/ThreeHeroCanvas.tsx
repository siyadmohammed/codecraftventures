import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D engineering components
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Central Engineering Wireframe Core (Icosahedron + Points)
    const coreGeometry = new THREE.IcosahedronGeometry(5.2, 1);
    
    // Wireframe Material with Cyan/Indigo gradient feel
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00F0FF,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    masterGroup.add(coreMesh);

    // Inner glowing solid octahedron (Software Engine)
    const innerGeometry = new THREE.OctahedronGeometry(2.8, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366F1,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    masterGroup.add(innerMesh);

    // Core vertices as glowing nodes
    const nodeGeometry = new THREE.BufferGeometry();
    const corePositions = coreGeometry.attributes.position.array;
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(corePositions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x00F0FF,
      size: 0.35,
      transparent: true,
      opacity: 0.85,
    });
    const coreNodes = new THREE.Points(nodeGeometry, nodeMaterial);
    masterGroup.add(coreNodes);

    // 2. Orbital Gyroscopic Tech Rings (Engineering & Precision)
    const createRing = (radius: number, tube: number, color: number, opacity: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity,
      });
      return new THREE.Mesh(ringGeo, ringMat);
    };

    const ring1 = createRing(7.8, 0.04, 0x6366F1, 0.45);
    ring1.rotation.x = Math.PI / 3;
    masterGroup.add(ring1);

    const ring2 = createRing(9.2, 0.04, 0x10B981, 0.35);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    masterGroup.add(ring2);

    const ring3 = createRing(11.0, 0.03, 0x00F0FF, 0.25);
    ring3.rotation.z = Math.PI / 5;
    masterGroup.add(ring3);

    // 3. Intelligent Agentic Data Stream Particles (Neural Cloud)
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorA = new THREE.Color(0x00F0FF); // Cyan
    const colorB = new THREE.Color(0x6366F1); // Indigo
    const colorC = new THREE.Color(0x10B981); // Emerald

    for (let i = 0; i < particleCount; i++) {
      const r = 6 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const choice = Math.random();
      const chosenColor = choice < 0.4 ? colorA : choice < 0.7 ? colorB : colorC;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particleSystem);

    // Subtle Ambient Light and Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00F0FF, 2, 50);
    pointLight.position.set(10, 10, 15);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x6366F1, 2, 50);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Mouse Movement Handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.current.targetX = x * 0.7;
      mousePos.current.targetY = y * 0.7;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia lerping towards cursor
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      // Group rotation
      masterGroup.rotation.y = mousePos.current.x * 0.8 + elapsedTime * 0.08;
      masterGroup.rotation.x = -mousePos.current.y * 0.6 + Math.sin(elapsedTime * 0.2) * 0.05;

      // Inner Core rotations
      coreMesh.rotation.y = elapsedTime * 0.12;
      coreMesh.rotation.z = elapsedTime * 0.07;
      innerMesh.rotation.x = -elapsedTime * 0.18;
      innerMesh.rotation.y = elapsedTime * 0.15;

      // Ring rotations
      ring1.rotation.z = elapsedTime * 0.14;
      ring2.rotation.x = elapsedTime * 0.11;
      ring3.rotation.y = -elapsedTime * 0.09;

      // Particle system gentle breathing
      const scale = 1 + Math.sin(elapsedTime * 0.8) * 0.04;
      particleSystem.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
