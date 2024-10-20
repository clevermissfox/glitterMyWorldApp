const idCounters = {};

export const generateUniqueId = (prefix = "component") => {
  if (!idCounters[prefix]) {
    idCounters[prefix] = 0;
  }
  idCounters[prefix] += 1;
  return `${prefix}-${idCounters[prefix]}`;
};
