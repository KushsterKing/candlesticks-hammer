Install nvm and node v11.8 if not installed
```
nvm --version # to check if nvm is not installed
# if nvm is not installed run this else skip
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

nvm install 11.8
nvm use 11.8
npm install
```

Install mongodb
```
mongod --version # to check if mongodb is not installed
# if mongod is not installed run this else skip

brew update
brew install 11.6

# Create the “db” directory. This is where the Mongo data files will live. 
mkdir -p /data/db

# Make sure that the /data/db directory has the right permissions by running
sudo chown -R `id -un` /data/db
# Enter your password

mongod
```

To seed data into the database
```
node --experimental-modules models/seeders/CandleSticksSeeder.mjs
```


To run the project and server in watch node <br>
```
node --experimental-modules app.mjs
```

To see results hit the following api(s)
```
http://localhost:3000/

Output data will be printed right there, moreover, there 
will also be a JSON file named outputData.json and a csv 
file named out.csv of the date.

```
