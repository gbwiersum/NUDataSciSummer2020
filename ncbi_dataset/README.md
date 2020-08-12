The NCBI Datasets Project

https://www.ncbi.nlm.nih.gov/datasets

National Center for Biotechnology Information, U.S. National Library of Medicine

The main goal of the NCBI Datasets project is to make it easy for scientists to get the data they want so they can use it.

This README explains the content and structure of the file that you have downloaded so that you can easily find the data that you want in this file.

To find your data, go to \ncbi_dataset\data\

The NCBI DataSets project adheres to FAIR principles of scientific data management.
FAIR stands for Findable, Accessible, Interoperable and Reusable (https://www.go-fair.org/fair-principles/).
In order to make the data that is downloaded from NCBI DataSets more FAIR, we have implemented the BDBag-It
file structure for downloaded files. The BDBag format includes a set of checksum files used for validation
of the downloaded data, as well as a file, fetch.txt, that points to the location of the downloaded
data on NCBI servers.
