//default
const NinjaConditionWrappr = ({ condition = true, children }) => {
  const isNinja = !!(children instanceof Array)
  const first = isNinja ? children[0] : children

  const second = isNinja ? children[1] : null

  const Cmp = !!condition ? first : second

  return Cmp
}

export default NinjaConditionWrappr
