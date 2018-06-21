export function listToSelectOptions(s) {
  const items = s.split(',');
  const options = [];
  for (let i = 0; i < items.length; i++) {
    const o = items[i];
    const kv = o.split('->');
    options.push({
      value: kv[0],
      label: kv[1],
    });
  }
  return options;
}

export function optionsToLabelMapper(options) {
  const mapper = {};
  options.forEach((o) => {
    mapper[o.id] = {};
    listToSelectOptions(o.optionText).forEach(i => mapper[o.id][i.value] = i.label);
  });
  return mapper;
}
