const introspect = (iface) =>
  Object.keys(iface)
    .filter((key) => typeof iface[key] === 'function')
    .map((key) => [key, iface[key].length]);

console.log(introspect({
  m1: (x) => [x],
  m2: function (x, y) { return [x, y]; },
  m3(x, y, z) { return [x, y, z]; },
}));
// [ ['m1', 1], ['m2', 2], ['m3', 3] ]