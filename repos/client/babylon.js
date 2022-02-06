/**
 * BABYLON.JS IMPORT PROXY =====================================================
 * @note: Comment out imports that you do not need to reduce production bundle size.
 * @reference: https://forum.babylonjs.com/t/es6-tree-shaking-build-large-bundle-size/21084
 * @see: https://doc.babylonjs.com/features/es6_support#tree-shaking
 *  - Importing components directly reduces bundle size and compile time.
 *    => at the moment of writing, optimisation yielded 355 KB gzipped bundle.
 *  - babylonjs/core library adds 741 KB gzipped to total bundle size.
 * =============================================================================
 */

// Use console log so jest tests will help show which files are loading babylon package
// console.log('⚡ ➤-----------BABYLON------------➤ ⚡')

/* Required Dependencies */
export {} from '@babylonjs/core/Engines/Extensions/engine.views' // for registerView()
export {} from '@babylonjs/core/Rendering/boundingBoxRenderer' // for rendering bounding box

/* Core */
export { Engine, } from '@babylonjs/core/Engines/engine'
export { Scene } from '@babylonjs/core/scene'
export { ArcRotateCamera, } from '@babylonjs/core/Cameras/arcRotateCamera'
export { Camera, } from '@babylonjs/core/Cameras/camera'

/* File Loaders */
export {} from '@babylonjs/core/Loading/loadingScreen' // required
export {} from '@babylonjs/loaders/glTF' // enable gltf/glb file support
export { SceneLoader } from '@babylonjs/core/Loading/sceneLoader'
export {} from '@babylonjs/core/Rendering/edgesRenderer'

/* Maths */
export { Color3, Color4, } from '@babylonjs/core/Maths/math.color'
export { Plane, } from '@babylonjs/core/Maths/math.plane'
export { Path3D, } from '@babylonjs/core/Maths/math.path'
export { Matrix, Vector2, Vector3, Vector4, Quaternion, } from '@babylonjs/core/Maths/math.vector'
export { HemisphericLight, } from '@babylonjs/core/Lights/hemisphericLight'
export { Viewport, } from '@babylonjs/core/Maths/math.viewport'

/* Meshes */
export { Mesh, } from '@babylonjs/core/Meshes/mesh'
export { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
export { SubMesh } from '@babylonjs/core/Meshes/subMesh'
export { VertexBuffer } from '@babylonjs/core/Meshes/buffer'
export { TransformNode, } from '@babylonjs/core/Meshes/transformNode'
export { CSG, } from '@babylonjs/core/Meshes/csg'

/* Events */
export { ActionManager, } from '@babylonjs/core/Actions/actionManager'
export { Animation, } from '@babylonjs/core/Animations'
export { PredicateCondition, } from '@babylonjs/core/Actions/condition'
export { SetValueAction, ExecuteCodeAction, } from '@babylonjs/core/Actions/directActions'
export { KeyboardEventTypes, } from '@babylonjs/core/Events/keyboardEvents'
export { PointerEventTypes, } from '@babylonjs/core/Events/pointerEvents'
export { PointerDragBehavior, } from '@babylonjs/core/Behaviors/Meshes/pointerDragBehavior'

/* Gizmos */
export { GizmoManager, } from '@babylonjs/core/Gizmos/gizmoManager'
export { PlaneRotationGizmo, } from '@babylonjs/core/Gizmos/planeRotationGizmo'
export { PositionGizmo, } from '@babylonjs/core/Gizmos/positionGizmo'
export { RotationGizmo, } from '@babylonjs/core/Gizmos/rotationGizmo'
export { ScaleGizmo, } from '@babylonjs/core/Gizmos/scaleGizmo'
export { EngineStore, } from '@babylonjs/core/Engines/engineStore'
export { UtilityLayerRenderer, } from '@babylonjs/core/Rendering/utilityLayerRenderer'

/* Materials */
export { Material, } from '@babylonjs/core/Materials/material'
export { BackgroundMaterial, } from '@babylonjs/core/Materials/Background/backgroundMaterial'
export { PBRMaterial, } from '@babylonjs/core/Materials/PBR/pbrMaterial'
export { StandardMaterial, } from '@babylonjs/core/Materials/standardMaterial'
export { MultiMaterial, } from '@babylonjs/core/Materials/multiMaterial'
export { DynamicTexture, } from '@babylonjs/core/Materials/Textures/dynamicTexture'
export { Texture, } from '@babylonjs/core/Materials/Textures/texture'
export { CubeTexture, } from '@babylonjs/core/Materials/Textures/cubeTexture'

/* Materials */
export { GridMaterial } from '@babylonjs/materials/grid/gridMaterial'

/* Effects */
export {} from '@babylonjs/core/Rendering/outlineRenderer'
export { GlowLayer, } from '@babylonjs/core/Layers/glowLayer'
export { HighlightLayer, } from '@babylonjs/core/Layers/highlightLayer'

/* GUI */
export { AdvancedDynamicTexture, } from '@babylonjs/gui/2D/advancedDynamicTexture'
export { Image, } from '@babylonjs/gui/2D/controls/image'
export { MultiLine, } from '@babylonjs/gui/2D/controls/multiLine'
export { Ellipse, } from '@babylonjs/gui/2D/controls/ellipse'
export { Rectangle, } from '@babylonjs/gui/2D/controls/rectangle'
export { TextBlock, } from '@babylonjs/gui/2D/controls/textBlock'
export { Line, } from '@babylonjs/gui/2D/controls/line'

/* Tools */
// Required to use Tools.CreateScreenshot for side effects
export { ScreenshotTools } from '@babylonjs/core/Misc/screenshotTools' //  => this imports Tools anyway
export { Tools, } from '@babylonjs/core/Misc/tools' // adds 0 KB to bundle size (seems to be imported by other modules)
