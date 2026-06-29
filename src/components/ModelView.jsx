import React, { Suspense } from 'react'
import {OrbitControls, PerspectiveCamera, View} from "@react-three/drei"
import Lights from './Lights.jsx'
import IPhone from './IPhone.jsx'
import * as THREE from 'three'

const ModelView = ({index, groupRef, gsapType, controlRef, setRotationSize, size, item}) => {
  return (
    <View index={index} id={gsapType} className={` w-full h-full ${index===2} ? 'right-[-100%] : ''`}>
      <ambientLight intensity={0.3}/>
      <PerspectiveCamera makeDefault position={[0,0,4]}/>

      <Lights/>

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0,0,0)}
        onEnd={()=>setRotationState(controlRef.current.getAzimuthaAngle())}
      />
      <group ref={groupRef} name={`${index===1} ? 'small' : 'large'`} position={[0,0,0,]}>
          <Suspense>
            <IPhone
              scale={index===1 ? [15,15,15] : [17,17,17]}
              item={item}
              size={size}
            ></IPhone>
          </Suspense>
      </group>
      
    </View>
  )
}


export default ModelView;