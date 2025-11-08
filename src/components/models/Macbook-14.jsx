import React, { useRef, useEffect } from 'react'
import { useGLTF, useTexture} from '@react-three/drei';
import useMacbookStore from "../../store/index.js";
import { Color, Scene, SRGBColorSpace } from 'three'

export default function MacbookModel14(props) {
  const { color } = useMacbookStore();
  const { nodes, materials, scene } = useGLTF('/models/macbook-14-transformed.glb')
  const groupRef = useRef();

  const texture = useTexture('/textures/screen.png');

   texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;

  // Parts that should keep their original appearance (screen, keyboard, etc.)
  const noChangeParts = [
    'Object_123', // Screen
  ];

  useEffect(() => {
    if (!groupRef.current) return;

    groupRef.current.traverse((child) => {
      if (child.isMesh && !noChangeParts.includes(child.name)) {
        // Clone material if not already cloned
        if (!child.material.userData.isCloned) {
          child.material = child.material.clone();
          child.material.userData.isCloned = true;
        }
        
        // Apply color based on the metallic/roughness properties
        if (child.material.metalness !== undefined) {
          child.material.color = new Color(color);
          child.material.needsUpdate = true;
        }
      }
    });
  }, [color, Scene]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial001}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.zhGRTuGrQoJflBD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.PaletteMaterial002}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.lmWQsEjxpsebDlK}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials.LtEafgAVRolQqRw}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.iyDJFXmHelnMTbD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.eJObPwhgFzvfaoZ}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.nDsMUuDKliqGFdU}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.CRQixVLpahJzhJc}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials.YYwBgwvcyZVOOAA}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_54.geometry}
        material={materials.SLGkCohDDelqXBu}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_58.geometry}
        material={materials.WnHKXHhScfUbJQi}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_66.geometry}
        material={materials.fNHiBfcxHUJCahl}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_74.geometry}
        material={materials.LpqXZqhaGCeSzdu}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_82.geometry}
        material={materials.gMtYExgrEUqPfln}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_96.geometry}
        material={materials.PaletteMaterial003}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_107.geometry}
        material={materials.JvMFZolVCdpPqjj}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_123.geometry}
        material={materials.sfCQkHOWyrsLmor}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_127.geometry}
        material={materials.ZCDwChwkbBfITSW}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/macbook-14-transformed.glb')