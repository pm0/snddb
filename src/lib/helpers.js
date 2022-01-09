export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function formatFacesEffectsDescription(faces) {
  faces.forEach((face, idx) => {
    if (face) {
      if (face.effect.hasValue) {
        face.effect.description = face.effect.description.replace('{value}', face.value);
      }
      if (face.effect.references) {
        const tooltipClass = idx === 1 ? 'has-tooltip-right' : 'has-tooltip-top';
        face.effect.references.forEach((ref) => {
          const oldSubstr = `class="keyword-${ref.jsonId}"`;
          const newSubstr = `class="keyword-${ref.jsonId} ${tooltipClass}" data-tooltip="${ref.jsonId}: ${ref.description}"`;
          face.effect.description = face.effect.description.replace(oldSubstr, newSubstr);
        });
      }
    }
  });
}
