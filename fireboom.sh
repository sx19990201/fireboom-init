#!/usr/bin/env bash

cd wundergraph/ && yarn
cd ..
curl -o fireboom https://markdown-file-1259215954.cos.ap-nanjing.myqcloud.com/fireboom
chmod -R 777 fireboom
curl -o wunderctl https://markdown-file-1259215954.cos.ap-nanjing.myqcloud.com/wunderctl
chmod -R 777 wunderctl
cp -r wunderctl /usr/local/bin/
./fireboom