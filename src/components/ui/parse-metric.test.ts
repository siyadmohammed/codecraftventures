import { describe, expect, it } from 'vitest';
import { CASE_STUDIES, SERVICES } from '../../data/content';
import { formatMetric, parseMetric } from './parse-metric';

describe('parseMetric', () => {
  it('keeps comparison prefixes and unit suffixes around the number', () => {
    expect(parseMetric('< 90ms')).toEqual({ prefix: '< ', value: 90, decimals: 0, grouped: false, suffix: 'ms' });
  });

  it('records decimal places so the animated value keeps the same precision', () => {
    expect(parseMetric('99.98%')).toMatchObject({ value: 99.98, decimals: 2, suffix: '%' });
  });

  it('reads thousands separators as one number', () => {
    expect(parseMetric('50,000+ Concurrent Req/Sec')).toMatchObject({ value: 50000, grouped: true, suffix: '+ Concurrent Req/Sec' });
  });

  it('treats words before the number as prefix', () => {
    expect(parseMetric('Solid 60fps')).toMatchObject({ prefix: 'Solid ', value: 60, suffix: 'fps' });
  });

  it('animates only the first number when there are several', () => {
    expect(parseMetric('1 of 2')).toMatchObject({ prefix: '', value: 1, suffix: ' of 2' });
  });

  it('returns null when there is no number to animate', () => {
    expect(parseMetric('Zero-Downtime Migration')).toBeNull();
    expect(parseMetric('')).toBeNull();
  });
});

describe('formatMetric', () => {
  it('renders zero with the original precision for the first frame', () => {
    expect(formatMetric(parseMetric('< 4.2%')!, 0)).toBe('< 0.0%');
  });

  it('reproduces every metric shown on the site exactly at its final value', () => {
    const shown = [
      ...CASE_STUDIES.flatMap((study) => study.metrics.map((m) => m.value)),
      ...SERVICES.map((service) => service.metrics),
    ];
    for (const text of shown) {
      const parsed = parseMetric(text);
      if (parsed) expect(formatMetric(parsed, parsed.value)).toBe(text);
    }
  });
});
