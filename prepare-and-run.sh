#!/bin/bash

cd "$(dirname "$0")"
mkdir -p ws-server/static
cp -r dist/card/* ws-server/static
(cd ws-server && node index.js)
