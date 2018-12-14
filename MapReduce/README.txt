Our MapReduce job is processed on the Hadoop cluster called Dumbo which is maintained by NYU High Performance Computing. Dumbo is a 48 data node Hadoop cluster running Cloudera Distribution of Hadoop (CDH).

Dumbo: https://wikis.nyu.edu/display/NYUHPC/Clusters+-+Dumbo


To run the MapReduce job on our service, please follow the procedure below:

1.  download "completed trips" from the cloud server as a trips.txt file to admin's local computer

2.  change the input and output file path in the script skate.sh to adapt to the admin's local file system

3.  run the script with provided password and trips.txt to start MapReduce

The admin will be required to enter the password three times when running skate.sh. The first time is to send trips.txt to Dumbo's login node. The second time is to run a remote script skate_remo.sh that would send trips.txt to the Hadoop Cluster, start the MapReduce job, and get the result text file from the Hadoop Cluster back to Dumbo's login node. The third time is to get the result text file from the login node back to the admin's local computer.


For security reasons, the password will be sent separately in the submission email.


4.  upload the outcome text file back to the cloud, parse the text file and store it back to the database.

