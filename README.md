<img src="./velocity-tech-test.png" alt="drawing" width="100%"/>

## Initialising Project 

After forking and pulling the repo down I've added a .shopifyignore file in preparation for setting up and installing preprocessing prackages. I'm using Sourcetree locally as an interface to control and manage repo, I've created a develop branch to mimic how I'd work in a real task environment (would only push to the main/master branch on work approval for production push).

### NPM instruction

Naviagte to the theme directory and run:

```
npm install
```

From here the node modules used to support the webpack file and task runners will be installed so from here run the following: 

```
npm run dev
--
npm run build
```

Dev is the watcher used for development, the watcher will be taking SCSS & JS files from the node-assets directory and outputing them in the theme assets folder. 

Run the build command when the task is finished and ready to be compiled before pushing to the repo/store.

#### Naming Conventions
All my css declarations tend to end with `-cst` to make sure the id/class is unique and won't ever clash with an app if one is added and use generic class names such as 'cart' etc. 

#### Theme Settings 
I've created theme settings for the font selection, background and font colours and various cart options, these can be found in the customiser > theme settings.

#### Product Tags
The New & Get X for Y tags are managed in the backend by boolean metafields so on a different store the metafields would need copying over or renaming in the product collection snippet. 

#### Design Changes
We didn't discuss how you want the add to cart functionality to work on the collections page and without there being a button but quanitity control I found it abit odd, if the + automatically added to the basket then you wouldn't be able to increment more than one so I've added a "add to cart" button that appears when the increment buttons are used. 