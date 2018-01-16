## How to configure ESLint to work with .jsx files:

You have a few options to pass your JSX files to ESLint:

*  eslint lib/*.jsx : check all .jsx files in lib, excluding subdirectories
*  eslint lib/**/*.jsx : check all .jsx files in lib, including subdirectories
*  eslint lib : check all .js files in lib, including subdirectories

*  eslint --ext .jsx lib : check all .jsx files in lib, including subdirectories

*  eslint --ext .js --ext .jsx lib :      
check all .js and .jsx files in lib, including subdirectories
You can find more informations in the ESLint Command line Interface documentation.
