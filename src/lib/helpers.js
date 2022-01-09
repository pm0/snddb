export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function addFacesEffectDescription(faces, effects) {
  faces.forEach((face) => {
    if (face) {
      const effect = effects.find((e) => e.jsonId === face.type);
      if (effect) {
        face.description = effect.description.replace('{value}', face.value);
      }
    }
  });
}
