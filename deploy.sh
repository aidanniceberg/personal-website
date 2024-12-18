#!/bin/bash

# make sure you're in the app directory
dir=$(basename $PWD)
if [ "$dir" != "personal-website" ]; then
  echo "Error: You must be in the 'personal-website' directory to run this script."
  exit 1
fi

# install packages
echo "Installing packages..."
npm install
echo "Packages installed"

# build app
echo "Building..."
npm run build
echo "Build complete"

# copy to S3
echo "Copying build to S3..."
aws s3 cp --recursive dist s3://aidanniceberg.com --profile aidan
echo "Successfully copied build to S3"

# remove dist folder
echo "Cleaning up..."
rm -r dist
echo "Success"
