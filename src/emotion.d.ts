import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      background: string;
      text: string;
      textSecondary: string; // #475467
      textTertiary: string; // #344054
      textPrimaryVariant: string; // #667085
      textPlain: string; // #5c5f5d
      buttonBg: string; // #344054
      buttonSecondary: string; // #fff
      surface: string; // #f9fafb
      shadow: string;
    };
  }
}
