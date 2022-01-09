export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function formatFacesEffectsDescription(faces) {
  faces.forEach((face) => {
    if (face) {
      if (face.effect.hasValue) {
        face.effect.description = face.effect.description.replace('{value}', face.value);
      }
      if (face.effect.references) {
        face.effect.references.forEach((ref) => {
          const oldSubstr = `class="keyword-${ref.jsonId}"`;
          const newSubstr = `class="keyword-${ref.jsonId}" data-tooltip="${ref.jsonId}: ${ref.description}"`;
          face.effect.description = face.effect.description.replace(oldSubstr, newSubstr);
        });
      }
    }
  });
}
