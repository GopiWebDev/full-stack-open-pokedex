#!/bin/bash

echo "Build script"

npm ci --production
npm install express --save
npm run build