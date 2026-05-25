import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const MODEL_FLOOR_Y = -3.84;
const MODEL_HEIGHT = 5.72;
const SCANNED_MODEL_URL = '/drift_coach/static/tryon/models/drift-athlete-hsr0015.glb';

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
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.78;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  canvasMount.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-label', '3D sauna hat try-on preview');

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#ddd8ce');
  scene.fog = new THREE.Fog('#ddd8ce', 9, 18);

  const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
  camera.position.set(0.12, -0.85, 12.4);

  const avatar = new THREE.Group();
  avatar.rotation.y = -0.22;
  scene.add(avatar);

  const materials = createMaterials();
  const { bodyGroup, hatAnchor, hatGroup, hatMaterial, trimMaterial, seamMaterial } = buildAvatar(avatar, materials);
  const floor = buildEnvironment(scene);

  const state = {
    color: 'black',
    dragging: false,
    fit: 1,
    targetRotation: avatar.rotation.y,
    trim: 'natural',
    variant: 'classic',
  };
  window.__driftTryOnModel = 'procedural';
  loadScannedModel(avatar, bodyGroup, hatAnchor);

  const resize = () => {
    const bounds = root.getBoundingClientRect();
    const width = Math.max(320, Math.floor(bounds.width));
    const height = Math.max(520, Math.floor(bounds.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.z = width < 720 ? 14.5 : 12.4;
    camera.position.y = -0.85;
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
    window.__driftTryOnState = { ...state, model: window.__driftTryOnModel || 'procedural' };
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
  const skinTexture = makeNoiseTexture('#9e6f5f', '#c6927d', 96, 0.18);
  const woolTexture = makeNoiseTexture('#0b0b0b', '#272522', 128, 0.34);
  woolTexture.wrapS = THREE.RepeatWrapping;
  woolTexture.wrapT = THREE.RepeatWrapping;
  woolTexture.repeat.set(2.8, 2.8);
  return {
    fabric: new THREE.MeshPhysicalMaterial({
      color: '#111111',
      metalness: 0,
      roughness: 0.98,
      sheen: 0.75,
      sheenRoughness: 0.9,
      map: woolTexture,
    }),
    skin: new THREE.MeshPhysicalMaterial({
      color: '#a77967',
      metalness: 0,
      roughness: 0.62,
      clearcoat: 0.08,
      clearcoatRoughness: 0.82,
      map: skinTexture,
    }),
    trim: new THREE.MeshPhysicalMaterial({
      color: '#d8c1a0',
      metalness: 0,
      roughness: 0.88,
      sheen: 0.42,
    }),
    body: new THREE.MeshPhysicalMaterial({
      color: '#141412',
      metalness: 0,
      roughness: 0.7,
      clearcoat: 0.16,
      clearcoatRoughness: 0.7,
    }),
    shorts: new THREE.MeshStandardMaterial({
      color: '#090909',
      metalness: 0,
      roughness: 0.76,
    }),
    towel: new THREE.MeshStandardMaterial({
      color: '#ddd0b6',
      metalness: 0,
      roughness: 0.95,
    }),
    seam: new THREE.LineBasicMaterial({
      color: '#bda27c',
      transparent: true,
      opacity: 0.62,
    }),
  };
}

function buildAvatar(group, materials) {
  const bodyGroup = new THREE.Group();
  bodyGroup.name = 'Procedural athlete fallback';
  group.add(bodyGroup);

  const hips = new THREE.Mesh(new THREE.CapsuleGeometry(0.55, 0.58, 12, 42), materials.shorts);
  hips.position.set(0, -1.2, 0);
  hips.rotation.z = Math.PI / 2;
  hips.scale.set(0.82, 1.08, 0.62);
  hips.castShadow = true;
  bodyGroup.add(hips);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.54, 1.38, 18, 52), materials.body);
  torso.position.set(0, -0.06, 0);
  torso.scale.set(0.93, 1.03, 0.58);
  torso.castShadow = true;
  torso.receiveShadow = true;
  bodyGroup.add(torso);

  const chestWrap = new THREE.Mesh(new THREE.TorusGeometry(0.54, 0.035, 10, 72), materials.towel);
  chestWrap.position.set(0, 0.16, 0);
  chestWrap.rotation.x = Math.PI / 2;
  chestWrap.scale.set(0.92, 0.56, 0.16);
  chestWrap.castShadow = true;
  bodyGroup.add(chestWrap);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 0.38, 38), materials.skin);
  neck.position.y = 0.86;
  neck.castShadow = true;
  bodyGroup.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.46, 56, 40), materials.skin);
  head.position.y = 1.31;
  head.scale.set(0.86, 1.08, 0.78);
  head.castShadow = true;
  bodyGroup.add(head);

  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.31, 40, 20), materials.skin);
  jaw.position.set(0, 1.08, 0.04);
  jaw.scale.set(0.96, 0.5, 0.86);
  jaw.castShadow = true;
  bodyGroup.add(jaw);

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.052, 0.16, 24), materials.skin);
  nose.position.set(0, 1.31, 0.39);
  nose.rotation.x = Math.PI / 2;
  nose.castShadow = true;
  bodyGroup.add(nose);

  const brow = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.025, 0.035), materials.body);
  brow.position.set(0, 1.43, 0.365);
  brow.castShadow = true;
  bodyGroup.add(brow);

  const eyeMaterial = new THREE.MeshStandardMaterial({ color: '#14110f', roughness: 0.45 });
  [-0.13, 0.13].forEach((x) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.028, 16, 12), eyeMaterial);
    eye.position.set(x, 1.34, 0.405);
    bodyGroup.add(eye);
  });

  const earGeometry = new THREE.SphereGeometry(0.085, 24, 16);
  [-0.43, 0.43].forEach((x) => {
    const ear = new THREE.Mesh(earGeometry, materials.skin);
    ear.position.set(x, 1.31, 0.0);
    ear.scale.set(0.55, 1, 0.34);
    ear.castShadow = true;
    bodyGroup.add(ear);
  });

  const shoulderGeometry = new THREE.CapsuleGeometry(0.18, 0.9, 12, 32);
  [-0.62, 0.62].forEach((x) => {
    const shoulder = new THREE.Mesh(shoulderGeometry, materials.skin);
    shoulder.position.set(x, 0.45, 0);
    shoulder.rotation.z = Math.PI / 2;
    shoulder.castShadow = true;
    bodyGroup.add(shoulder);

    const upperArm = makeLimb(0.13, 0.82, materials.skin);
    upperArm.position.set(x * 1.1, -0.02, 0.02);
    upperArm.rotation.z = x > 0 ? -0.24 : 0.24;
    upperArm.castShadow = true;
    bodyGroup.add(upperArm);

    const forearm = makeLimb(0.115, 0.78, materials.skin);
    forearm.position.set(x * 1.06, -0.75, 0.06);
    forearm.rotation.z = x > 0 ? 0.08 : -0.08;
    forearm.castShadow = true;
    bodyGroup.add(forearm);

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.14, 24, 16), materials.skin);
    hand.position.set(x * 1.02, -1.2, 0.08);
    hand.scale.set(0.72, 1.06, 0.5);
    hand.castShadow = true;
    bodyGroup.add(hand);
  });

  [-0.28, 0.28].forEach((x) => {
    const upperLeg = makeLimb(0.19, 1.05, materials.skin);
    upperLeg.position.set(x, -1.86, 0.02);
    upperLeg.castShadow = true;
    bodyGroup.add(upperLeg);

    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.17, 24, 16), materials.skin);
    knee.position.set(x, -2.42, 0.06);
    knee.scale.set(0.9, 0.65, 0.82);
    knee.castShadow = true;
    bodyGroup.add(knee);

    const lowerLeg = makeLimb(0.155, 1.12, materials.skin);
    lowerLeg.position.set(x, -3.04, 0.02);
    lowerLeg.castShadow = true;
    bodyGroup.add(lowerLeg);

    const foot = new THREE.Mesh(new THREE.SphereGeometry(0.2, 28, 16), materials.skin);
    foot.position.set(x, -3.65, 0.24);
    foot.scale.set(0.8, 0.36, 1.55);
    foot.castShadow = true;
    bodyGroup.add(foot);
  });

  const hatAnchor = new THREE.Group();
  hatAnchor.name = 'Sauna hat anchor';
  group.add(hatAnchor);

  const hatGroup = new THREE.Group();
  hatGroup.position.set(0, -0.18, 0);
  hatAnchor.add(hatGroup);

  const hatGeometry = new THREE.LatheGeometry(
    [
      new THREE.Vector2(0, 2.21),
      new THREE.Vector2(0.08, 2.2),
      new THREE.Vector2(0.26, 2.08),
      new THREE.Vector2(0.44, 1.88),
      new THREE.Vector2(0.56, 1.64),
      new THREE.Vector2(0.6, 1.43),
      new THREE.Vector2(0.57, 1.31),
    ],
    96
  );
  const hat = new THREE.Mesh(hatGeometry, materials.fabric);
  hat.castShadow = true;
  hat.receiveShadow = true;
  hatGroup.add(hat);

  const brim = new THREE.Mesh(new THREE.TorusGeometry(0.565, 0.036, 18, 128), materials.trim);
  brim.position.y = 1.315;
  brim.rotation.x = Math.PI / 2;
  brim.castShadow = true;
  hatGroup.add(brim);

  const innerBrim = new THREE.Mesh(new THREE.TorusGeometry(0.49, 0.014, 12, 96), materials.trim);
  innerBrim.position.y = 1.295;
  innerBrim.rotation.x = Math.PI / 2;
  hatGroup.add(innerBrim);

  const loop = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.015, 12, 48), materials.trim);
  loop.position.set(0, 2.27, 0.02);
  loop.scale.y = 1.35;
  loop.castShadow = true;
  hatGroup.add(loop);

  for (let i = 0; i < 12; i += 1) {
    const angle = (i / 12) * Math.PI * 2;
    const seam = makeSeam(angle, materials.seam);
    hatGroup.add(seam);
  }
  addWoolFibers(hatGroup, materials.fabric.color);

  return {
    bodyGroup,
    hatAnchor,
    hatGroup,
    hatMaterial: materials.fabric,
    trimMaterial: materials.trim,
    seamMaterial: materials.seam,
  };
}

function loadScannedModel(group, fallbackBody, hatAnchor) {
  const loader = new GLTFLoader();
  loader.load(
    SCANNED_MODEL_URL,
    (gltf) => {
      const model = gltf.scene;
      model.name = 'HSRD athletic scan model';
      model.rotation.x = -Math.PI / 2;
      prepareScannedModel(model);
      normalizeScannedModel(model);
      group.add(model);
      fallbackBody.visible = false;
      hatAnchor.position.set(0, 0.09, 0.08);
      window.__driftTryOnModel = 'hsrd-athlete-glb';
      window.__driftTryOnState = { ...(window.__driftTryOnState || {}), model: window.__driftTryOnModel };
    },
    undefined,
    (error) => {
      window.__driftTryOnModel = 'procedural';
      window.__driftTryOnModelError = error?.message || 'Unable to load scanned model';
    }
  );
}

function prepareScannedModel(model) {
  model.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.filter(Boolean).forEach((material) => {
      material.side = THREE.DoubleSide;
      material.transparent = false;
      material.opacity = 1;
      material.depthWrite = true;
      material.alphaTest = 0;
      material.roughness = Math.max(material.roughness ?? 0.55, 0.5);
      material.envMapIntensity = 0.35;
      material.needsUpdate = true;
    });
  });
}

function normalizeScannedModel(model) {
  model.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const scale = MODEL_HEIGHT / Math.max(size.y, 0.001);
  model.scale.multiplyScalar(scale);
  model.updateMatrixWorld(true);

  const fittedBox = new THREE.Box3().setFromObject(model);
  const center = fittedBox.getCenter(new THREE.Vector3());
  model.position.x -= center.x;
  model.position.z -= center.z + 0.04;
  model.position.y += MODEL_FLOOR_Y - fittedBox.min.y;
  model.updateMatrixWorld(true);
  const normalizedBox = new THREE.Box3().setFromObject(model);
  const normalizedSize = normalizedBox.getSize(new THREE.Vector3());
  window.__driftTryOnModelBox = {
    min: normalizedBox.min.toArray(),
    max: normalizedBox.max.toArray(),
    size: normalizedSize.toArray(),
  };
}

function makeSeam(angle, material) {
  const points = [];
  for (let i = 0; i <= 22; i += 1) {
    const t = i / 22;
    const y = 2.16 - t * 0.78;
    const radius = 0.055 + t * 0.5;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return new THREE.Line(geometry, material);
}

function makeLimb(radius, length, material) {
  const limb = new THREE.Mesh(new THREE.CapsuleGeometry(radius, length, 12, 28), material);
  limb.rotation.x = 0.02;
  return limb;
}

function addWoolFibers(group) {
  const points = [];
  for (let i = 0; i < 260; i += 1) {
    const theta = Math.random() * Math.PI * 2;
    const t = Math.random();
    const y = 1.35 + t * 0.78;
    const radius = 0.56 - t * 0.48 + Math.random() * 0.035;
    const base = new THREE.Vector3(Math.cos(theta) * radius, y, Math.sin(theta) * radius);
    const tip = base.clone().add(
      new THREE.Vector3(
        Math.cos(theta) * (0.018 + Math.random() * 0.026),
        (Math.random() - 0.5) * 0.026,
        Math.sin(theta) * (0.018 + Math.random() * 0.026)
      )
    );
    points.push(base, tip);
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: '#24211d', transparent: true, opacity: 0.42 });
  group.add(new THREE.LineSegments(geometry, material));
}

function buildEnvironment(scene) {
  scene.add(new THREE.HemisphereLight('#ffffff', '#c8baaa', 1.7));
  const key = new THREE.DirectionalLight('#fff7e9', 2.05);
  key.position.set(3.2, 5.2, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  scene.add(key);

  const rim = new THREE.DirectionalLight('#d4e7e2', 1.25);
  rim.position.set(-3, 2.8, -2);
  scene.add(rim);

  const fill = new THREE.DirectionalLight('#ffffff', 0.68);
  fill.position.set(-2, 2.6, 3.6);
  scene.add(fill);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(4.15, 128),
    new THREE.MeshStandardMaterial({
      color: '#c8c0b3',
      metalness: 0,
      roughness: 0.88,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = MODEL_FLOOR_Y - 0.02;
  floor.receiveShadow = true;
  scene.add(floor);

  const heat = new THREE.Mesh(
    new THREE.TorusGeometry(2.85, 0.012, 8, 160),
    new THREE.MeshBasicMaterial({ color: '#c97342', transparent: true, opacity: 0.28 })
  );
  heat.rotation.x = Math.PI / 2;
  heat.position.y = MODEL_FLOOR_Y + 0.02;
  scene.add(heat);

  return heat;
}

function makeNoiseTexture(baseColor, fleckColor, size, alpha) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, size, size);
  ctx.globalAlpha = alpha;
  for (let i = 0; i < size * 7; i += 1) {
    const value = Math.random();
    ctx.fillStyle = value > 0.5 ? fleckColor : baseColor;
    ctx.fillRect(Math.random() * size, Math.random() * size, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }
  ctx.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
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
