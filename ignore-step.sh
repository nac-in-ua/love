#!/bin/bash

echo "REPORT: $REPORT"

if [[ "$REPORT" == "true" ]] ; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

else
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
fi