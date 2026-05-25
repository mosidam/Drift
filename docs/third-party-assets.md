# Third-party assets

## DRIFT sauna hat try-on models

- Assets:
  - `src/tryon-public/models/drift-model-man.glb`
  - `src/tryon-public/models/drift-model-woman.glb`
- Source: HumanScanRepository HSRD-100, `https://huggingface.co/datasets/digitalrealitylab/HSRD-100`
- Source scans:
  - `HSR0042-Body-045-Scan-LOD1.zip`
  - `HSR0102-Body-052-LOD2.zip`
- Downloaded: 2026-05-25
- Use: full-body sauna hat try-on models for the `/sauna-hat` preview. The male scan is swimwear/shorts; the female scan is beach/sportwear with a DRIFT-rendered towel wrap overlay in the viewer.
- Source license: CC BY 4.0 / commercial use allowed per HSRD-100 dataset card.
- Conversion: OBJ + diffuse texture converted to GLB; texture converted from PNG to JPEG for web delivery.
- Product note: these are temporary commercial-safe scans. Replace with DRIFT-owned sauna models from the final product shoot when available.

## DRIFT sauna hat GLB

- Asset: `src/tryon-public/models/drift-sauna-hat.glb`
- Source reference: internal DRIFT sauna hat hero/product imagery in `odoo_addons/drift_coach/static/pwa/assets/drift-sauna-kit.png`.
- Created: 2026-05-25
- Use: web try-on hat geometry with bell silhouette, rolled light trim, top loop, seams, and wool fiber details.
- Source license: DRIFT-owned/generated project asset.
