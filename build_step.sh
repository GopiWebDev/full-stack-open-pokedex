#!/bin/bash

echo "Build script"

npm install
npm run build
ls -la
cp app.js dist/
ls -la dist/