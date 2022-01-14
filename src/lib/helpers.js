export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function formatDescriptionFromReferences(field) {
  field.references.forEach((ref) => {
    const oldSubstr = `class="keyword-${ref.jsonId}"`;
    const newSubstr = `class="keyword-${ref.jsonId} has-tooltip-right has-tooltip-top-mobile" data-tooltip="${ref.jsonId}: ${ref.description}"`;
    field.description = field.description.replace(oldSubstr, newSubstr);
  });
}

export function formatHero(hero) {
  hero.faces.forEach((face, idx) => {
    if (face) {
      if (face.effect.hasValue) {
        face.effect.description = face.effect.description.replaceAll('{value}', face.value);
      }
      if (face.effect.references) {
        formatDescriptionFromReferences(face.effect);
      }
    }
  });
  if (hero.spell && hero.spell.references) {
    formatDescriptionFromReferences(hero.spell);
  }
}
