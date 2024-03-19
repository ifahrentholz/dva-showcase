export interface Config {
  mainTsPath: string;
  mainScssPath: string;
  iconsDirPath: string;
  iconsTypesPath: string;
  fontsScssPath?: string;
  lazyStylesScssPath?: string;
  sidekickLibraryStylesScssPath?: string;
}

export const config: Config = {
  mainTsPath: 'src/main.ts',
  mainScssPath: 'src/styles/index.scss',
  iconsDirPath: './public/icons',
  iconsTypesPath: './src/icons.types.ts',
  fontsScssPath: 'src/styles/fonts.scss',
  lazyStylesScssPath: 'src/styles/lazy-styles.scss',
  sidekickLibraryStylesScssPath: 'src/styles/sidekick-library-styles.scss',
};
