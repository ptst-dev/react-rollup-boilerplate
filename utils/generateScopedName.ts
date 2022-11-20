import createGenerator from 'generic-names';

export const getScopedNameGenerator = (pattern: string) => (localname: string, filepath: string) => {
  const filepathAlt = filepath.replace(/\.module\.(css|sss|scss|sass|styl|stylus|less)$/, '.$1');
  const generate = createGenerator(pattern, { context: process.cwd() });
  return generate(localname, filepathAlt);
};
