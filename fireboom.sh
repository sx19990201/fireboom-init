#!/usr/bin/env bash

cd wundergraph/ && yarn
cd ..
curl -o fireboom https://markdown-file-1259215954.cos.ap-nanjing.myqcloud.com/fireboom
chmod -R 777 fireboom
./fireboom