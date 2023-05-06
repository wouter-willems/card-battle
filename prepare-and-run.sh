#!/bin/bash

cd "$(dirname "$0")"
rm -rf ws-server/static
mkdir -p ws-server/static
cp -r dist/card/* ws-server/static
(cd ws-server && node index.js)
