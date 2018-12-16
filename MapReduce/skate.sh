#!/bin/sh
echo -n "Enter your {YOUR_FILE_SYSTEM_PATH} to where the trips.txt file is on your local (ex: /Users/rachelrios/Eskate) computer and press [ENTER]: "
read name

echo Start MapReduce processing using NYU High Performance Computing

echo Sending data to Courant server

# please change {YOUR_FILE_SYSTEM_PATH} to where the trips.txt file is on your local computer
scp "$name"/trips.txt sy1253@dumbo.hpc.nyu.edu:/home/sy1253/skate/input

echo Sending data to HDFS cluster and starting mapReduce
# this is to start a remote script
ssh sy1253@dumbo.hpc.nyu.edu /home/sy1253/skate/skate_remo.sh

echo getting result data from Courant cluster

# please change {YOUR_FILE_SYSTEM_PATH} to where you want the output from MapReduce to be on your local computer
scp sy1253@dumbo.hpc.nyu.edu:/home/sy1253/skate/output/part-r-00000 {YOUR_FILE_SYSTEM_PATH}
