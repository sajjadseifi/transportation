//default
const NinjaConditionWrappr = ({ condition = true, children }) => {
  const isNinja = !!(children instanceof Array);
  if (!isNinja) return children;

  const first = children[0];
  const second = children[1];

  const Cmp = !!condition ? first : second;

  return Cmp;
};

export default NinjaConditionWrappr;
