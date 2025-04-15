import { Abril_Fatface } from 'next/font/google';

export const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
});


export const headingFont = `${abrilFatface.className} font-bold tracking-wide`;
