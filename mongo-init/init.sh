#!/bin/bash
mongoimport --host mongo --db videos --collection videos --type json --file /videos.json --jsonArray