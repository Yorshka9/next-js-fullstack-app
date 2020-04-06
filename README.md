<<<<<<< HEAD
My biggest three challenges throughout this project:
- Learning and understanding the UI of Storyblok was a challenge. It took some time but eventually I started to understand how to navigate and structure components and content types. My biggest challenge with Storyblok was putting pages inside a folder, using one of the pages as root for the folder and then matching that pathing with the code.

- The second challenge was finding out how I could grab the data from Storyblok in the most optimal way.

- The third challenge was definitely the biggest challenge. Deploying the project to Zeit was an extremely long process for me. When I made changes in Storyblok, re-deploying the project would not update the website until after some time, meaning that the site would stop working at random moments, and I had no idea what the cause of the error could be. I was able to deploy the site correctly several times, but because of this delay it would suddenly stop working. I tried to fix this again but Zeit has denied me access to deploy because I have done it too many times. As of right now the landing page https://next-blog-phi.now.sh/root/ does NOT work on Zeit or Storyblok, but other pages such as https://next-blog-phi.now.sh/root/first-post and slug pages work properly. 

My biggest learnings - what would you tell yourself if you started again?
- I have learned a lot about Next js and CMS, and I definitely feel that my skills have improved after this project and I feel more confident about React. Although my website does not have a lot of styling, I am happy with how the rest of the code turned out.


# FED21 Data Interaction
Boilerplate using React, Next.js and Storyblok.

## Prerequisites
- NodeJS 10.X+
- Now (npm install -g now)

## Application set-up
- You can find all client-side code in ```pages/...```
- You can find all server-side code in ```pages/api/...```
- This set-up is specific to Next.js and you can find more info about it in the [Next.js documentation](https://nextjs.org/docs), specifically [here](https://nextjs.org/docs/api-routes/introduction).

## Storyblok
This application is using a Storyblok Test-Environment which I created for you. In order to add your own content and modules, you need to create an account with Storyblok and change the API token in ```react-storyblok-next-boilerplate/pages/api/page/[slug].js```.

## Components
For now I only added two example components (Headline Module and Paragraph Module), which I also set up inside the Storyblok space. You can add many more! :)

## Available routes (for now)
Available slugs (defined by Storyblok):
- [localhost:3000/welcome](http://localhost:3000/welcome)
- [localhost:3000/home](http://localhost:3000/home)

## More Documentation + Build-Up Tutorials
- [Introduction to Storyblok](https://www.storyblok.com/docs/Prologue/Introduction)
- [Advanced - The Complete Guide to Build a Full Blown Multilanguage Website with Next.js](https://www.storyblok.com/tp/next-js-react-guide)

## Tooling
This application uses SASS so that we can write modular CSS.
The CSS you are writing for each component is going to be scoped to these modules only and not affect any other parts of the site.

## To run (development)
```bash
now dev
```

## For later (you will get more info on this):

## To deploy to live
```bash
now
```
=======
# next-fullstack-app
>>>>>>> f93a65607a770e9334dc92ced31b96549f8a54d5
