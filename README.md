# Eskate

Providing NYC with skateboards

## Getting Started
In this demo the user admin (you) will run a simple Map reduce to see how the Eskate service would function. This is a simulation in real life the user would tap in their id card and an automated script would run this.
```
Go to: and explore the user view
The user is able to look at where stations are located
Go to: For the admin view
The Admin is able to check out a skateboard, return them, and view all users.
```

### Prerequisites

Make sure you have downloaded all Node/NPM dependencies
Please Log into [MLAB](https://Mlab.com) before continuing with Map Reduce (All credentials have been provided in an email )

## Map Reduce

Our MapReduce job is processed on the Hadoop cluster called Dumbo which is maintained by NYU High Performance Computing. Dumbo is a 48 data node Hadoop cluster running Cloudera Distribution of Hadoop (CDH).

[Dumbo]( https://wikis.nyu.edu/display/NYUHPC/Clusters+-+Dumbo)

Since our MapReduce is deployed on NYU's hadoop cluster, you can start the mapreduce job within NYU network. If not, you can first connect to NYU VPN and all procedures are the same.

To run the MapReduce job on our service, please follow the procedure below:

1.  Download "Completed trips" from the cloud server as a trips.txt file to admin's local computer

2.  Change the input and output file path in the script skate.sh to adapt to the admin's local file system

3.  run the script with provided password and trips.txt to start MapReduce

The admin will be required to enter the password three times when running skate.sh. The first time is to send trips.txt to Dumbo's login node. The second time is to run a remote script skate_remo.sh that would send trips.txt to the Hadoop Cluster, start the MapReduce job, and get the result text file from the Hadoop Cluster back to Dumbo's login node. The third time is to get the result text file from the login node back to the admin's local computer.


For security reasons, the password will be sent separately in the submission email.


4.  upload the outcome text file back to the cloud, parse the text file and store it back to the database.


## Built With

* [Express](https://expressjs.com/) - The web framework used
* [Node JS](https://nodejs.org/) - Backend dev
* [Mongodb](https://rometools.github.io/rome/) - Used to generate databases
* [Dumbo](https://wikis.nyu.edu/display/NYUHPC/Clusters+-+Dumbo) - Map Reduce
