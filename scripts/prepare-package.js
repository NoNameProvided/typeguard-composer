const { copyFileSync, existsSync, writeFileSync } = require('fs');
const { join } = require('path');

/**
 * Modifies the package JSON and copies it to the build folder.
 *
 * @param {string} pathToPackageJson the absolute root to the package.json
 */
function updatePackageJson(packageRoot = join(__dirname, '..')) {
  const current = require(`${packageRoot}/package.json`);
  
  delete current.private;
  delete current.scripts;
  delete current.devDependencies;

  writeFileSync(`${packageRoot}/build/package.json`, JSON.stringify(current, null, 2));
}


/**
 * Tries to copy various meta files to the build directory for every package.
 * If a defined sourcefile doesn't exists, it gets skipped.
 *
 * @param {string} packageRoot the absolute root of the package
 */
function copyMetaFilesToBuildFolder(packageRoot = join(__dirname, '..')) {
  const FILE_NAMES = ['README.md', 'CHANGELOG.md', 'LICENSE'];

  FILE_NAMES.filter(fileName => existsSync(join(packageRoot, fileName)))
    .map(fileName => ({
      source: join(packageRoot, fileName),
      target: join(packageRoot, 'build', fileName),
    }))
    .map(x => copyFileSync(x.source, x.target));
}

updatePackageJson()
copyMetaFilesToBuildFolder()