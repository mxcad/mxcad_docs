mxcad_3d API 文档

# mxcad_3d API 文档

该模块包含用于3d相关的导出, 所有导出的内容都可以通过mxcad包导入直接使用

**`Example`**

```js
import { MxCAD3DObject, Mx3dGePoint } from "mxcad"
```

## Table of contents

### Namespaces

- [MdGe](modules/MdGe.md)

### Classes

- [Mx3dAlgoChamfer](classes/Mx3dAlgoChamfer.md)
- [Mx3dAlgoFillet](classes/Mx3dAlgoFillet.md)
- [Mx3dAlgoFillet2d](classes/Mx3dAlgoFillet2d.md)
- [Mx3dAlgoObject](classes/Mx3dAlgoObject.md)
- [Mx3dApplication](classes/Mx3dApplication.md)
- [Mx3dAspectArrow](classes/Mx3dAspectArrow.md)
- [Mx3dAspectDim](classes/Mx3dAspectDim.md)
- [Mx3dAspectLine](classes/Mx3dAspectLine.md)
- [Mx3dAspectObject](classes/Mx3dAspectObject.md)
- [Mx3dAspectText](classes/Mx3dAspectText.md)
- [Mx3dBaseObject](classes/Mx3dBaseObject.md)
- [Mx3dBrepCastGeom](classes/Mx3dBrepCastGeom.md)
- [Mx3dDbDocument](classes/Mx3dDbDocument.md)
- [Mx3dDbLabel](classes/Mx3dDbLabel.md)
- [Mx3dDbObject](classes/Mx3dDbObject.md)
- [Mx3dDimAngle](classes/Mx3dDimAngle.md)
- [Mx3dDimDiameter](classes/Mx3dDimDiameter.md)
- [Mx3dDimLength](classes/Mx3dDimLength.md)
- [Mx3dDimObject](classes/Mx3dDimObject.md)
- [Mx3dDimRadius](classes/Mx3dDimRadius.md)
- [Mx3dGeAxis](classes/Mx3dGeAxis.md)
- [Mx3dGeBndBox](classes/Mx3dGeBndBox.md)
- [Mx3dGeCSYS](classes/Mx3dGeCSYS.md)
- [Mx3dGeCSYSR](classes/Mx3dGeCSYSR.md)
- [Mx3dGeCircle](classes/Mx3dGeCircle.md)
- [Mx3dGeColor](classes/Mx3dGeColor.md)
- [Mx3dGeConic](classes/Mx3dGeConic.md)
- [Mx3dGeCurve](classes/Mx3dGeCurve.md)
- [Mx3dGeCylinder](classes/Mx3dGeCylinder.md)
- [Mx3dGeDir](classes/Mx3dGeDir.md)
- [Mx3dGeEllipse](classes/Mx3dGeEllipse.md)
- [Mx3dGeHyperbola](classes/Mx3dGeHyperbola.md)
- [Mx3dGeLine](classes/Mx3dGeLine.md)
- [Mx3dGeLocation](classes/Mx3dGeLocation.md)
- [Mx3dGeMaterial](classes/Mx3dGeMaterial.md)
- [Mx3dGeObject](classes/Mx3dGeObject.md)
- [Mx3dGePlane](classes/Mx3dGePlane.md)
- [Mx3dGePoint](classes/Mx3dGePoint.md)
- [Mx3dGeTrsf](classes/Mx3dGeTrsf.md)
- [Mx3dGeVec](classes/Mx3dGeVec.md)
- [Mx3dGeomBSplineCurve](classes/Mx3dGeomBSplineCurve.md)
- [Mx3dGeomBSplineSurface](classes/Mx3dGeomBSplineSurface.md)
- [Mx3dGeomBezierCurve](classes/Mx3dGeomBezierCurve.md)
- [Mx3dGeomBezierSurface](classes/Mx3dGeomBezierSurface.md)
- [Mx3dGeomBoundedCurve](classes/Mx3dGeomBoundedCurve.md)
- [Mx3dGeomBoundedSurface](classes/Mx3dGeomBoundedSurface.md)
- [Mx3dGeomCircle](classes/Mx3dGeomCircle.md)
- [Mx3dGeomConic](classes/Mx3dGeomConic.md)
- [Mx3dGeomConicalSurface](classes/Mx3dGeomConicalSurface.md)
- [Mx3dGeomCurve](classes/Mx3dGeomCurve.md)
- [Mx3dGeomCylindricalSurface](classes/Mx3dGeomCylindricalSurface.md)
- [Mx3dGeomElementarySurface](classes/Mx3dGeomElementarySurface.md)
- [Mx3dGeomEllipse](classes/Mx3dGeomEllipse.md)
- [Mx3dGeomHyperbola](classes/Mx3dGeomHyperbola.md)
- [Mx3dGeomLine](classes/Mx3dGeomLine.md)
- [Mx3dGeomObject](classes/Mx3dGeomObject.md)
- [Mx3dGeomParabola](classes/Mx3dGeomParabola.md)
- [Mx3dGeomPlane](classes/Mx3dGeomPlane.md)
- [Mx3dGeomSphericalSurface](classes/Mx3dGeomSphericalSurface.md)
- [Mx3dGeomSurface](classes/Mx3dGeomSurface.md)
- [Mx3dGeomToroidalSurface](classes/Mx3dGeomToroidalSurface.md)
- [Mx3dInterpolateBSplineCurve](classes/Mx3dInterpolateBSplineCurve.md)
- [Mx3dMkBox](classes/Mx3dMkBox.md)
- [Mx3dMkCone](classes/Mx3dMkCone.md)
- [Mx3dMkCylinder](classes/Mx3dMkCylinder.md)
- [Mx3dMkFace](classes/Mx3dMkFace.md)
- [Mx3dMkLoft](classes/Mx3dMkLoft.md)
- [Mx3dMkObject](classes/Mx3dMkObject.md)
- [Mx3dMkPipe](classes/Mx3dMkPipe.md)
- [Mx3dMkPipeShell](classes/Mx3dMkPipeShell.md)
- [Mx3dMkPolygon](classes/Mx3dMkPolygon.md)
- [Mx3dMkPrism](classes/Mx3dMkPrism.md)
- [Mx3dMkRevol](classes/Mx3dMkRevol.md)
- [Mx3dMkSphere](classes/Mx3dMkSphere.md)
- [Mx3dMkThickSolid](classes/Mx3dMkThickSolid.md)
- [Mx3dMkTorus](classes/Mx3dMkTorus.md)
- [Mx3dMkWedge](classes/Mx3dMkWedge.md)
- [Mx3dShapeCompSolid](classes/Mx3dShapeCompSolid.md)
- [Mx3dShapeCompound](classes/Mx3dShapeCompound.md)
- [Mx3dShapeDownCast](classes/Mx3dShapeDownCast.md)
- [Mx3dShapeEdge](classes/Mx3dShapeEdge.md)
- [Mx3dShapeFace](classes/Mx3dShapeFace.md)
- [Mx3dShapeObject](classes/Mx3dShapeObject.md)
- [Mx3dShapeShell](classes/Mx3dShapeShell.md)
- [Mx3dShapeSolid](classes/Mx3dShapeSolid.md)
- [Mx3dShapeVertex](classes/Mx3dShapeVertex.md)
- [Mx3dShapeWire](classes/Mx3dShapeWire.md)
- [Mx3dSymbolObject](classes/Mx3dSymbolObject.md)
- [Mx3dSymbolText](classes/Mx3dSymbolText.md)
- [Mx3dUtils](classes/Mx3dUtils.md)
- [Mx3dView](classes/Mx3dView.md)
- [Mx3dWireTool](classes/Mx3dWireTool.md)
- [MxCAD3DObject](classes/MxCAD3DObject.md)

### Interfaces

- [MxCAD3DConfig](interfaces/MxCAD3DConfig.md)

### Variables

- [MxApp3D](README.md#mxapp3d)

## Variables

### MxApp3D

• `Const` **MxApp3D**: `MxApp3DType`

全局应用程序单实例
