function compose(f, g) {
  return (...args) => f(g(...args));
}

export function formatMoney(num) {
  let [dollars, cents] = num.toFixed(2).split('.');
  let a = [];

  while (dollars.length > 0) {
    const index = dollars.length - 3;
    a.unshift(dollars.substring(index));
    dollars = dollars.substring(0, index);
  }

  return `${a.join(',')}.${cents}`;
}

export function difference(x, y) {
  return (x * 100 - y * 100) / 100;
}

export const formatDifference = compose(formatMoney, difference);

export function truncate(num, string) {
  const arr = string.split(/\s{1,}/).slice(0, num + 1);
  const tail = arr.splice(-1).join('');

  return `${arr.join(' ')} ${tail[0]}...`;
}

export function debounce(fn, time = 20) {
  let t = null;

  return () => {
    clearTimeout(t);
    t = setTimeout(fn, 20);
  };
}
