#!/bin/bash

cd /Users/chelox/work/cvmsanchez
echo "Clear dist/ and dist_msanchez"
sudo rm -R dist/ dist_msanchez.zip
echo "Create a new dist"
yarn build
echo "Compress dist into dist_msanchez.zip"
zip -r dist_msanchez.zip dist/*
echo "SSH Copy to Raspberry /home/pi"
scp dist_msanchez.zip pi@192.168.0.184:/home/pi/
echo "Done!"

