const ipToInt = (ip = '127.0.0.1') =>
  ip.split('.').map(Number).reduce((acc, n) => (acc << 8) + n);

console.log(ipToInt());               // 2130706433
console.log(ipToInt('192.168.1.10')); // -1062731510