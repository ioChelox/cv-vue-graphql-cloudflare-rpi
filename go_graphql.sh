#!/bin/bash
echo "Env run ..."
env
echo "Source ..."
source ~/.bashrc
echo "Change to cvmsanchezGoGraphql"
cd /opt/mycv/cvmsanchezGoGraphql/
echo "Run main.go"
./cvmsanchezGoGraphql
