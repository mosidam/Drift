import * as THREE from 'three';

const PALETTE = {
  black: { hat: '#111111', trim: '#d8c1a0', label: 'Black wool' },
  oat: { hat: '#d8c8a4', trim: '#161412', label: 'Oat wool' },
  moss: { hat: '#344339', trim: '#d7c099', label: 'Moss wool' },
  clay: { hat: '#9b4f36', trim: '#181514', label: 'Clay wool' },
};

const TRIMS = {
  natural: '#d8c1a0',
  black: '#111111',
  ice: '#b8d5d0',
};

const VARIANTS = {
  classic: { scaleY: 1, brim: 0.93, lift: 0, label: 'Classic bell' },
  tall: { scaleY: 1.16, brim: 0.91, lift: 0.06, label: 'Tall heat room' },
  low: { scaleY: 0.88, brim: 0.97, lift: -0.03, label: 'Low profile' },
};

function init() {
  document.querySelectorAll('[data-drift-tryon]').forEach((root) => {
    if (root.dataset.ready) return;
    root.dataset.ready = '1';
    try {
      createTryOn(root);
    } catch (error) {
      root.classList.add('is-fallback');
      root.querySelector('[data-tryon-fallback]')?.removeAttribute('hidden');
      window.__driftTryOnError = error.message;
    }
  });
}

function createTryOn(root) {
  const canvasMount = root.querySelector('[data-tryon-canvas]');
  const stateLabel = root.querySelector('[data-tryon-state]');
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  canvasMount.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-label', '3D sauna hat try-on preview');

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#080807');
  scene.fog = new THREE.Fog('#080807', 6, 14);

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 1.58, 6.2);

  const avatar = new THREE.Group();
  avatar.rotation.y = -0.22;
  scene.add(avatar);

  const materials = createMaterials();
  const { hatGroup, hatMaterial, trimMaterial, seamMaterial } = buildAvatar(avatar, materials);
  const floor = buildEnvironment(scene);

  const state = {
    color: 'black',
    dragging: false,
    fit: 1,
    targetRotation: avatar.rotation.y,
    trim: 'natural',
    variant: 'classic',
  };

  const resize = () => {
    const bounds = root.getBoundingClientRect();
    const width = Math.max(320, Math.floor(bounds.width));
    const height = Math.max(520, Math.floor(bounds.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.z = width < 720 ? 7 : 6.2;
    camera.position.y = width < 720 ? 1.7 : 1.58;
    camera.updateProjectionMatrix();
  };

  const applyState = () => {
    const palette = PALETTE[state.color] || PALETTE.black;
    const variant = VARIANTS[state.variant] || VARIANTS.classic;
    const trimColor = TRIMS[state.trim] || palette.trim;
    hatMaterial.color.set(palette.hat);
    trimMaterial.color.set(trimColor);
    seamMaterial.color.set(trimColor).multiplyScalar(0.72);
    const fit = Number(state.fit);
    hatGroup.scale.set(fit * variant.brim, fit * variant.scaleY, fit * variant.brim);
    hatGroup.position.y = variant.lift;
    stateLabel.textContent = `${palette.label} / ${variant.label}`;
    root.dataset.color = state.color;
    root.dataset.variant = state.variant;
    window.__driftTryOnState = { ...state };
  };

  wireControls(root, state, applyState);
  wirePointer(renderer.domElement, state);

  const observer = new ResizeObserver(resize);
  observer.observe(root);
  resize();
  applyState();

  const clock = new THREE.Clock();
  const animate = () => {
    const elapsed = clock.getElapsedTime();
    const idle = Math.sin(elapsed * 0.48) * 0.08;
    avatar.rotation.y += (state.targetRotation + idle - avatar.rotation.y) * 0.045;
    hatGroup.rotation.z = Math.sin(elapsed * 0.85) * 0.012;
    floor.rotation.z = elapsed * 0.025;
    renderer.render(scene, camera);
    window.__driftTryOnReady = true;
    requestAnimationFrame(animate);
  };
  animate();
}

function createMaterials() {
  return {
    fabric: new THREE.MeshStandardMaterial({
      color: '#111111',
      metalness: 0,
      roughness: 0.92,
    }),
    skin: new THREE.MeshStandardMaterial({
      color: '#a77967',
      metalness: 0,
      roughness: 0.68,
    }),
    trim: new THREE.MeshStandardMaterial({
      color: '#d8c1a0',
      metalness: 0,
      roughness: 0.82,
    }),
    body: new THREE.MeshStandardMaterial({
      color: '#191918',
      metalness: 0,
      roughness: 0.76,
    }),
    seam: new THREE.LineBasicMaterial({
      color: '#bda27c',
      transparent: true,
      opacity: 0.62,
    }),
  };
}

function buildAvatar(group, materials) {
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.82, 1.18, 12, 36), materials.body);
  body.position.set(0, -0.58, 0);
  body.scale.set(1.2, 0.68, 0.76);
  body.castShadow = true;
  group.add(body);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.34, 0.52, 36), materials.skin);
  neck.position.y = 0.28;
  neck.castShadow = true;
  group.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.78, 56, 36), materials.skin);
  head.position.y = 1.07;
  head.scale.set(0.88, 1.05, 0.8);
  head.castShadow = true;
  group.add(head);

  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.52, 40, 20), materials.skin);
  jaw.position.set(0, 0.7, 0.08);
  jaw.scale.set(0.95, 0.58, 0.9);
  jaw.castShadow = true;
  group.add(jaw);

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.22, 24), materials.skin);
  nose.position.set(0, 1.08, 0.67);
  nose.rotation.x = Math.PI / 2;
  group.add(nose);

  const earGeometry = new THREE.SphereGeometry(0.14, 24, 16);
  [-0.68, 0.68].forEach((x) => {
    const ear = new THREE.Mesh(earGeometry, materials.skin);
    ear.position.set(x, 1.06, 0.02);
    ear.scale.set(0.55, 1, 0.34);
    ear.castShadow = true;
    group.add(ear);
  });

  const hatGroup = new THREE.Group();
  hatGroup.position.y = 0;
  group.add(hatGroup);

  const hatGeometry = new THREE.LatheGeometry(
    [
      new THREE.Vector2(0, 2.37),
      new THREE.Vector2(0.15, 2.36),
      new THREE.Vector2(0.43, 2.2),
      new THREE.Vector2(0.67, 1.94),
      new THREE.Vector2(0.84, 1.62),
      new THREE.Vector2(0.94, 1.34),
      new THREE.Vector2(0.9, 1.22),
    ],
    72
  );
  const hat = new THREE.Mesh(hatGeometry, materials.fabric);
  hat.castShadow = true;
  hat.receiveShadow = true;
  hatGroup.add(hat);

  const brim = new THREE.Mesh(new THREE.TorusGeometry(0.88, 0.046, 16, 96), materials.trim);
  brim.position.y = 1.24;
  brim.rotation.x = Math.PI / 2;
  brim.castShadow = true;
  hatGroup.add(brim);

  const innerBrim = new THREE.Mesh(new THREE.TorusGeometry(0.77, 0.018, 12, 96), materials.trim);
  innerBrim.position.y = 1.225;
  innerBrim.rotation.x = Math.PI / 2;
  hatGroup.add(innerBrim);

  const loop = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.018, 12, 40), materials.trim);
  loop.position.set(0, 2.45, 0.02);
  loop.scale.y = 1.35;
  loop.castShadow = true;
  hatGroup.add(loop);

  for (let i = 0; i < 10; i += 1) {
    const angle = (i / 10) * Math.PI * 2;
    const seam = makeSeam(angle, materials.seam);
    hatGroup.add(seam);
  }

  return {
    hatGroup,
    hatMaterial: materials.fabric,
    trimMaterial: materials.trim,
    seamMaterial: materials.seam,
  };
}

function makeSeam(angle, material) {
  const points = [];
  for (let i = 0; i <= 22; i += 1) {
    const t = i / 22;
    const y = 2.32 - t * 0.95;
    const radius = 0.08 + t * 0.82;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.Line(geometry, material);
}

function buildEnvironment(scene) {
  scene.add(new THREE.HemisphereLight('#fff0d0', '#1d201c', 1.25));
  const key = new THREE.DirectionalLight('#fff1c8', 2.4);
  key.position.set(3, 5, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  scene.add(key);

  const rim = new THREE.DirectionalLight('#b8d5d0', 1.7);
  rim.position.set(-3, 2.8, -2);
  scene.add(rim);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(3.1, 96),
    new THREE.MeshStandardMaterial({
      color: '#161512',
      metalness: 0,
      roughness: 0.88,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.52;
  floor.receiveShadow = true;
  scene.add(floor);

  const heat = new THREE.Mesh(
    new THREE.TorusGeometry(2.28, 0.012, 8, 160),
    new THREE.MeshBasicMaterial({ color: '#d87435', transparent: true, opacity: 0.28 })
  );
  heat.rotation.x = Math.PI / 2;
  heat.position.y = -1.48;
  scene.add(heat);

  return heat;
}

function wireControls(root, state, applyState) {
  root.querySelectorAll('[data-color]').forEach((button) => {
    button.addEventListener('click', () => {
      state.color = button.dataset.color;
      root.querySelectorAll('[data-color]').forEach((item) => item.classList.toggle('is-active', item === button));
      applyState();
    });
  });
  root.querySelectorAll('[data-trim]').forEach((button) => {
    button.addEventListener('click', () => {
      state.trim = button.dataset.trim;
      root.querySelectorAll('[data-trim]').forEach((item) => item.classList.toggle('is-active', item === button));
      applyState();
    });
  });
  root.querySelectorAll('[data-variant]').forEach((button) => {
    button.addEventListener('click', () => {
      state.variant = button.dataset.variant;
      root.querySelectorAll('[data-variant]').forEach((item) => item.classList.toggle('is-active', item === button));
      applyState();
    });
  });
  const fit = root.querySelector('[data-fit]');
  fit?.addEventListener('input', () => {
    state.fit = Number(fit.value);
    applyState();
  });
}

function wirePointer(canvas, state) {
  let startX = 0;
  let startRotation = state.targetRotation;
  canvas.addEventListener('pointerdown', (event) => {
    state.dragging = true;
    startX = event.clientX;
    startRotation = state.targetRotation;
    canvas.setPointerCapture?.(event.pointerId);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!state.dragging) return;
    state.targetRotation = startRotation + (event.clientX - startX) * 0.008;
  });
  const end = (event) => {
    state.dragging = false;
    canvas.releasePointerCapture?.(event.pointerId);
  };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
