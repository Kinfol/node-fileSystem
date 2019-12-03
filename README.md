# node-fileSystem

# Using golden circle paradigm for presenting the experience

# Project Hospital CMS:

- MVP: 

As a hospital clerk I want to make an apointment for a patient and see the availability in the hospital.

# Why go through the pain of learning how to write data to local fs when there is DynamoDb??

# How to TDD an application that writes to local files ??

# What did you use to write this project ??


- Usefull documentation

https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824

https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/


# Work flow

- Requirements: check for available products

## Sprint 1 The easiest way to provide with functionality for customer to buy Laptop

1. Write test to check if there are available products

1.1. Test fails as there is no method.

1.2. Write method to print the product.

1.3. Realising that test will not pass if I console log the product because console.log is build in function. At the moment I just want to use console log.

1.4. I need to mock the console.log for the test to pass.

1.5. Test is passing: it provides information that my method to print the available product is used.

	   Conclusion:
       My problem starts to become more complex. 
       How can I answer questions like:
       - how make it easier for shop-admin to add products ?
       - what data structure to use to store products? 
       It is not reliable to keep printing objects as if the project would be unavailable changes in the code would need to be made. The code is would not be easy to suport.
	
## Sprint 2

1. Write test to check method availability to create product in array.

2. Pass test to check availability in array

## Sprint 3

1. Test method to push to empty array used as storage unit for now.