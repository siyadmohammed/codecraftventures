export interface ParsedMetric {
  prefix: string;
  value: number;
  decimals: number;
  grouped: boolean;
  suffix: string;
}

// Splits a display metric like "< 4.2%" or "50,000+" into the first number and the text around it,
// so the number can be animated while the surrounding text stays fixed.
// Returns null when the string has no number to animate.
export function parseMetric(input: string): ParsedMetric | null {
  const match = /^(\D*?)(\d{1,3}(?:,\d{3})+|\d+)(?:\.(\d+))?(.*)$/s.exec(input);
  if (!match) return null;
  const [, prefix, whole, fraction = '', suffix] = match;
  return {
    prefix,
    value: Number(`${whole.replace(/,/g, '')}${fraction ? `.${fraction}` : ''}`),
    decimals: fraction.length,
    grouped: whole.includes(','),
    suffix,
  };
}

export function formatMetric(metric: ParsedMetric, value: number): string {
  const number = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: metric.decimals,
    maximumFractionDigits: metric.decimals,
    useGrouping: metric.grouped,
  }).format(value);
  return `${metric.prefix}${number}${metric.suffix}`;
}
