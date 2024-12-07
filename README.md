## Next JS

Nextjs is a React framework for building web applications .

### React 
It is not feasibel to create a fully-featured application ready for production .
React is a library for building user interfaces .

## Next JS

It uses React for bulding user interfaces .

Provides additional features that enables you to build production-ready applications .

These features include routing , optimized rendering , data fetching , bundling , compiling , more .

You dont need to install additional paackages as Next.js provides everything you need .

Opinions and conventions should be followed to implement these features .

**NextJs is a React framework for building web applications**


### Q . Why learn Next Js?

NextJs simplifies the process of building a web application for production .

#### Features of NextJs 

1 . Routing 

2 . API  routes 

3 . Rendering ( It supports both server side and client side rendering )

4 . Data fetching  ( It provides async-await approach in React components )

5 . Styling ( It supports CSS modules , TailwindCSS)

6 . Optimization ( It provides supports for Images, FONTS , scripts)

7 . Dev and prod build system ( It provides well developed system for Dev and prod build)


Overall it allows you to do more coding rather than configuration 

## Command to create NextJs project

```javascript
npx create-next-app@latest


```javascript
npm run start
```


Command to run the production server 

## RSC

React Server componetns is a new architecture introduced by the the React team in version 18 which was quickly embraced by Nextjs.

The architecture introduces a  new way of creating React components , splittiing them into two types :

1 . Server components 
2 . Client components 

React Server Components contd.


#### Server Components 

- In Next js all components are Server components by default .
- They have the ability to tn tasks like reading files or fetching data forma database .

- However , they don't have the ability to use hooks or handle user interactions .


#### Client Components 

- To create a Client component , It's necessary to add **"use client"**

at the top of the component file .

- Client components can't perform tasks like reading files , but they have the ability to use hooks and manage interactions .

( Client components are traditional reacat components which we are already famdiliar with )



#### Routing 

NextJs has a file -based routing mechanism 

URL paths users can access in the browser are defined by files and folders in your codebase


### Routing Coventions 

- All routes must be placed inside the app folder 

- Every file that corresponds to a route must be named page.js or page.tsx .

- Every folder corresponds to a a path segment in the browser URL .



### layout.tsx 

NExtjs automatically creates this file


### 404 

It has a default page not found component if we write a wrong route


### Route Params

Every page in **App Router**  receive route parameters as a prop.
The route params object contains route parameters as key - value pair .