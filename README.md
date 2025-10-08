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