# Step 1: Install Node.js and Express.js

### To start, you need to install Node.js and Express.js on your local machine. Here are the steps to do it:

Download and install Node.js from the official website: [nodejs.org: https://nodejs.org/en/download/](https://nodejs.org/en/download/).

- [ ] Open the terminal/command prompt and type the following command to check if Node.js is installed correctly: `node -v`
- [ ] Install Express.js using the following command: `npm install express`

# Step 2: Create an Express.js Server

### Once you have installed Node.js and Express.js, you can create an Express.js server. Follow these steps to create the server:

- [ ] Create a new directory for your project and navigate into it using the terminal/command prompt.
- [ ] Type the following command to create a new file named `index.js`: `touch index.js`
- [ ] Open the `index.js` file in your text editor and add the following code:

```
const express = require('express');
const app = express();

let visitors = 0;

app.get('/', (req, res) => {
 visitors++;
 const date = new Date();
 res.send(Current time is ${date.toLocaleString()} and number of visitors is ${visitors});
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

- [ ] Save the `index.js` file.

# Step 3: Test the Server Locally

### To test the server locally, follow these steps:

- [ ] Open the terminal/command prompt and navigate to the directory where you saved the `index.js` file.
- [ ] Type the following command to start the server: `node index.js`
- [ ] Open your web browser and visit `http://localhost:3000/`. You should see the current time and number of visitors displayed on the page.

# Step 4: Set up the Cloud VM

### To deploy the server on a Cloud VM, you need to set up an AWS EC2 instance. Follow these steps to set up the instance:

- [ ] Log in to your AWS console.
- [ ] Click on "Services" in the top navigation bar and select "EC2" under the "Compute" category.
- [ ] Click on the "Launch Instance" button to create a new instance.
- [ ] Choose an Amazon Machine Image (AMI) that supports Node.js. I recommend using the latest Amazon Linux AMI.
- [ ] Choose an instance type based on your needs. For this project, you can use the free tier t2.micro instance.
- [ ] Configure the instance details, such as the VPC, subnet, and security group. Make sure to allow incoming traffic on port 3000 (the port on which your Express.js app is running).
- [ ] Add storage to the instance. The default storage should be sufficient for this project.
- [ ] Add tags to the instance to help you identify it later.
- [ ] Review the instance details and click on the "Launch" button.

# Step 5: Connect to the Cloud VM

### To connect to the Cloud VM, follow these steps:

- [ ] Navigate to the "Instances" page in your AWS console.
- [ ] Select the instance you just created and click on the "Connect" button.
- [ ] Follow the instructions on the screen to connect to the instance using SSH.

# Step 6: Deploy the Server on the Cloud VM

### To deploy the server on the Cloud VM, follow these steps:

- [ ] Connect to your EC2 instance using SSH. Open a terminal or command prompt and type:
      `ssh -i /path/to/your/key.pem ec2-user@<public-IP-address>`
      Replace `/path/to/your/key.pem` with the path to your private key file and `<public-IP-address>` with the public IP address of your EC2 instance.

- [ ] Once you're connected to the instance, create a new directory for your project:

```
mkdir my-project
cd my-project
```

- [ ] Copy your index.js file and the public folder to the new directory. You can use the scp command to transfer files from your local machine to the remote server:

```
scp -i /path/to/your/key.pem index.js ec2-user@<public-IP-address>:~/my-project/
scp -i /path/to/your/key.pem -r public ec2-user@<public-IP-address>:~/my-project/
```

- [ ] Install the required dependencies for your project by running:

```
sudo yum install -y nodejs npm
npm install express
```

This will install Node.js, npm, and the Express.js framework.

- [ ] Start your Node.js server by running:
      `node index.js`
      Go to your AWS EC2 console and select the instance that you're running your server on.
      In the "Description" tab, scroll down to the "Security groups" section and click on the security group that's associated with your instance.
      In the "Inbound rules" tab, click "Edit inbound rules".
      Add a new rule with the following settings:
      Type: Custom TCP Rule
      Protocol: TCP
      Port range: 3000
      Source: 0.0.0.0/0 (or your own IP address if you want to restrict access)
      Click "Save rules" to apply the changes.

- [ ] Access your server from your web browser by entering your EC2 instance's public IP address followed by :3000 in the address bar, like this:
      ` http://<public-IP-address>:3000/`

You should now see your Node.js Express server running on your AWS EC2 instance!

Note: These instructions assume that you're running your server on a Linux-based EC2 instance. If you're using a different operating system or hosting provider, the steps may be different.
