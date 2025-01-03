#!/bin/bash

echo "Build script"

npm ci
npm install express
npm run build