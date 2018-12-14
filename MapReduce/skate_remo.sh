#!/bin/sh

rm -rf /home/sy1253/skate/output/*

hadoop fs -put /home/sy1253/skate/input/trips.txt /user/sy1253/skate_data

hadoop jar /home/sy1253/skate/demo.jar demo /user/sy1253/skate_data/trips.txt /user/sy1253/skate_out

hadoop fs -get /user/sy1253/skate_out/part-r-00000 /home/sy1253/skate/output

hadoop fs -rm -r /user/sy1253/skate_out

hadoop fs -rm -r /user/sy1253/skate_data/trips.txt
