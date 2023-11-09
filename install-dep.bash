# Script for installing node_modules

cd func-http
echo "Installing dependencies for 'func-http'"
npm install
cd ../

cd functions
echo "Installing dependencies for 'functions'"
npm install
cd ../

cd pubsub
echo "Installing dependencies for 'pubsub'"
npm install
echo "Compiling TypeScript functions"
npm run build
cd ../

cd web-app
echo "Installing dependencies for 'web-app'"
npm install
echo "Building output for React.js"
npm run build
cd ../


echo "Completed"