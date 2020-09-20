#!/usr/bin/env bash

if [ "$DEV_MODE" == "true" ]; then
  npm run dev;
else
  npm start;
fi