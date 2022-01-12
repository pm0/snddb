export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function formatDescriptionFromReferences(field, tooltipClass = 'has-tooltip-top') {
  field.references.forEach((ref) => {
    const oldSubstr = `class="keyword-${ref.jsonId}"`;
    const newSubstr = `class="keyword-${ref.jsonId} ${tooltipClass}" data-tooltip="${ref.jsonId}: ${ref.description}"`;
    field.description = field.description.replace(oldSubstr, newSubstr);
  });
}

export function formatFacesEffectsDescription(faces) {
  faces.forEach((face, idx) => {
    if (face) {
      if (face.effect.hasValue) {
        face.effect.description = face.effect.description.replaceAll('{value}', face.value);
      }
      if (face.effect.references) {
        const tooltipClass = idx === 1 ? 'has-tooltip-right' : 'has-tooltip-top';
        formatDescriptionFromReferences(face.effect, tooltipClass);
      }
    }
  });
}
