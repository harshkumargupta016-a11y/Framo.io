/**
 * THREE.JS SCENE BUILDER
 * What this file does: Factory helper initializing WebGL geometries, dual-layer crystal core, orbital rings, and particles.
 * What to edit: Modify mesh geometries, lighting coordinates, or particle spread here.
 */

import * as THREE from "three";

export function create3DWorld(container, isDark) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const modelGroup = new THREE.Group();
  scene.add(modelGroup);

  // Faceted core crystal & glowing wireframe shell
  const coreGeo = new THREE.IcosahedronGeometry(1.2, 0);
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: isDark ? 0x0c0e12 : 0xf1f3f7,
    roughness: 0.15,
    metalness: 0.85,
    clearcoat: 1,
  });
  modelGroup.add(new THREE.Mesh(coreGeo, coreMat));

  const wireGeo = new THREE.IcosahedronGeometry(1.4, 1);
  const wireMat = new THREE.MeshBasicMaterial({
    color: isDark ? 0xe11d48 : 0x4f46e5,
    wireframe: true,
    transparent: true,
    opacity: isDark ? 0.35 : 0.22,
  });
  modelGroup.add(new THREE.Mesh(wireGeo, wireMat));

  // Orbital satellite rings
  const ringGeo = new THREE.TorusGeometry(2.1, 0.015, 16, 80);
  const ringMat = new THREE.MeshBasicMaterial({ color: isDark ? 0x6366f1 : 0xe11d48, transparent: true, opacity: 0.4 });
  const ring1 = new THREE.Mesh(ringGeo, ringMat);
  ring1.rotation.x = Math.PI / 3;
  const ring2 = new THREE.Mesh(ringGeo, ringMat);
  ring2.rotation.y = Math.PI / 4;
  modelGroup.add(ring1, ring2);

  // Spatial starfield particles
  const posArray = new Float32Array(120 * 3);
  for (let i = 0; i < 360; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 14;
    posArray[i + 1] = (Math.random() - 0.5) * 14;
    posArray[i + 2] = (Math.random() - 0.5) * 8;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
  const particleMat = new THREE.PointsMaterial({ size: 0.03, color: isDark ? 0xff4a4a : 0x4f46e5, transparent: true, opacity: 0.5 });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Studio lighting
  scene.add(new THREE.AmbientLight(0xffffff, isDark ? 0.8 : 1.2));
  const dir1 = new THREE.DirectionalLight(0xe11d48, isDark ? 3.5 : 2);
  dir1.position.set(4, 5, 3);
  const dir2 = new THREE.DirectionalLight(0x6366f1, isDark ? 2.5 : 1.5);
  dir2.position.set(-4, -3, 2);
  scene.add(dir1, dir2);

  return { scene, camera, renderer, modelGroup, ring1, ring2, particles, disposables: [coreGeo, coreMat, wireGeo, wireMat, ringGeo, ringMat, particleGeo, particleMat] };
}
