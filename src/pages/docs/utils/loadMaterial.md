---

title: .loadMaterial()
longtitle: WHS.loadMaterial()
category: Utils
wip: 
 - Add more info
 - Add examples
 
tags:
 - utils
 - loadMaterial

---

## `loadMaterial(material)`

Turns your material parameter and returns whs material object. This function checks for kind property and turns it into `THREE.Material` object.

Returns object that consist of _material, _restitution and _friction, where _material is a PhysiJS material object.
