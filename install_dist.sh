#!/bin/bash

cd /opt/mycv
echo ":: Clear dist and dist_msanchez.zip"
sudo rm -R dist_msanchez.zip dist/
echo ":: Copy from /home/pi dist_msanchez.zip"
cp /home/pi/dist_msanchez.zip .
echo ":: Unzip dist_msanchez.zip"
unzip dist_msanchez.zip
echo ":: Done!"
