interface Options {
  label: string;
  value: string;
}

export const cakeTypeOptions = [
  { label: 'Pastel', value: 'pastel' },
  { label: 'Torta Fría', value: 'torta fria' },
  { label: 'Cupcake', value: 'cupcake' },
];
export const cakeSizeOptions = [
  { label: '1/4lb', value: 0.25 },
  { label: '1/2lb', value: 0.5 },
  { label: '1lb', value: 1 },
  { label: '1 y 1/2lb', value: 1.5 },
  { label: '2lb', value: 2 },
  { label: '2 y 1/2lb', value: 2.5 },
  { label: '3lb', value: 3 },
  { label: '3 y 1/2lb', value: 3.5 },
];
export const cakeBaseFlavorOptions: Options[] = [
  { label: 'Chocolate', value: 'chocolate' },
];
export const validationsOptions = [
  { label: 'Si', value: true },
  { label: 'No', value: false },
];
export const coverageFlavorOptions: Options[] = [
  { label: 'Chocolate', value: 'chocolate' },
];
export const filledFlavorOptions: Options[] = [
  { label: 'Chocolate', value: 'chocolate' },
];
