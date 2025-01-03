#!/bin/bash

echo "Build script"

npm install
npm run build
cp app.js dist/
cd dist