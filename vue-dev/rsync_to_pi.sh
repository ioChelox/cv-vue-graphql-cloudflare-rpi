#!/bin/bash

echo "Doing RSYNC directory"
rsync -a -v --exclude 'node_modules' . pi@192.168.0.184:/opt/mycv/dev/
