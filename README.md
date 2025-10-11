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

#### Test Store
Link to my test store preview [test store preview](https://8w9oicvkwkgd7rwm-14901742.shopifypreview.com/collections/featured-products).

#### Naming Conventions
All my css declarations tend to end with `-cst` to make sure the id/class is unique and won't ever clash with an app if one is added and use generic class names such as 'cart' etc. 

#### Theme Settings 
I've created theme settings for the font selection, background and font colours and various cart options, these can be found in the customiser > theme settings.

#### Product Tags & Metafields
The 'New' & 'Get X for Y' tags are managed in the backend by boolean metafields so on a different store the metafields would need copying over or renaming in the product collection snippet. 

#### Design Changes
[1] We didn't discuss how you want the add to cart functionality to work on the collections page quantities, I can understand the cart drawer plus and minus auto updating the cart based on input but the collection listings auto adding to the cart would make the quantity buttons abit redundant, you'd never get past one. With that in mind I've deviated slightly to allow users to interact with the quantity buttons then add to cart when they have the right item number, this button toggle and hides if 0 is hit again and also hides if the item(s) are successfully added to the cart. 

[2] I've added some load/overlay states to the items when the API is being interracted with, took the styling from the drawer overlay. 

[3] With no other designs to work from the other pages/sections are blank but I added a min height so theres at least some separation from the header and footer. 