# This is A Simple Localhost Website
The main purpose of this website is to act like an album, along with todo lists displayed. <br>
This project worked as my application and implementation of web languages and tools I've learnt. <br>
The functionalities are simple, as listed below: <br>
- Display Time, Date, Weather with Temperature (region set in API in advanced)
- Create and Delete Categories (sets of images), unavailable for Update action
- Todos / Blogs (they are both for plain text, though Blogs are meant to store longer texts)
<br>
<br>

The work is highly based on YouTube Videos [Node.js Crash Course Tutorial](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU), Public Weather API website [Open-Meteo](https://open-meteo.com/en/docs), and answers from [stack overflow](https://stackoverflow.com/). Please go check out these resources and they are greatly helpful. <br>

<br>
<br>
<img src="./demo-pictures/overall.png" style="width:120%;height:120%;">

<br>

The wallpaper and weather icon images are from public network. <br>

<br>

## Why I wanted to build it
I basically just wanted to create a webpage with all my recordings/screenshots/any other media for my loved novels/games/animes/etc. <br>

Like some people may put posters on wall in their rooms, or set their desktop wallpaper / sidebar menu to be something they like. I did it in the form of website, and I can practice some web development skills in the meantime. <br>

<br>
Below are what it can and cannot do. 

<br>
<br>

## What's on the Home Page?
The Home Page should initially look like:
<br>
<br>
<img src="./demo-pictures/ini-page.png" style="width:120%;height:120%;">


### Images, Blogs, Todos Display

- "Today's Featured Photos" will randomly choose an image collection to display. 
- You can change the set of images by clicking the other tags (generated once you give the name of the set of images)
- Or access and see the media types (diamond icons) on the side
> Notice that it only displays the first five images, so if you want to change the order, you need to change their file names (alphabetical / numerical order depends on what's in your case). 

- "Latest Blogs" will display all the Blog's Titles and Blog's Snippets (you'll see when you create a blog). By clicking the "Latest Blogs" or blogs, you'll head into the all-blogs page.

- "ToDo List" will show all the todos you created and only their titles. Similar to Blogs, you click the "ToDo List" or todos themselves to reach all-todos page.

<br>

### Create One Image-Collection, Blog, or ToDo!

- Click any option on the Navigation bar: it contains all the existing items and allows to create new.

> A Big Thing to Notice... I haven't inplemented a way to update/edit the existing items, so if you want to edit, you will need to delete and create new. That's why I say this is really roughly designed and just applied what I have.
<br>
<br>

**ToDo Create Page**
<img src="./demo-pictures/todo-create-page.png" style="width:120%;height:120%;">
<br>
<br>

**Blog Create Page**
<img src="./demo-pictures/blog-create-page.png" style="width:120%;height:120%;">
<br>
<br>

> Image Collection; all Media-Types will be displayed on the side of image tags at Home Page
<br>
<br>

**Image-Collection Create Page**
<img src="./demo-pictures/imageCollection-create-page.png" style="width:120%;height:120%;">
<br>
<br>

**Image-Collection Media Categorized Page**
<img src="./demo-pictures/imageCollection-specific-media.png" style="width:120%;height:120%;">
<br>
<br>

**Image-Collection Detail Page**
<img src="./demo-pictures/imageCollection-detail.png" style="width:120%;height:120%;">
<br>
<br>
<br>

## Other Limitations

The site is all in `px`, I want it to display on a big screen (on my laptop), so I did not include `em` to adjust tablet, phone or other screen size. <br>

Month and Date Display is not well coded. I basically sliced the four characters "July" and then sliced the two number, if it changes to "August" and single number, it will be problematic. 

<br>
<br>

## How to Use then?

Localhost website can only show on your (or my) own computer, it does not have a public website link. Therefore it can only be downloaded and run the js file. In my case, I will open VS Code and run 'node app' on terminal (with online database connected). if you open the browser and type in 'localhost:3000' (mostly port 3000 is used), you should be able to see it working. <br>

> I have to say sorry because using your own database is almost necessary... I don't always keep the demo database running, and then request has no response. The error would say 'This site can’t be reached'.

<br>

### 1. Make Sure You Have Node.js Installed
Actually, please refer to `package.json` and see all dependencies. When `package.json` is in the folder directory you desire, open terminal and type `npm install` to automatically look up your json file and download everything used.  <br>

> `npm install` works on windows, may check out for Mac and Linux 

<br>

The Dependencies FYI: <br>
- EJS
- Express.js
- MongoDB
- Mongoose

<br>
<br>

### 2. Your Database if You'd prefer

Open `app.js` file and you'll see the line: <br>

```
const dbURL = 'mongodb+srv://DemoSiteUser:DemoSite1234@demositedb.yti8zx9.mongodb.net/DemoData?retryWrites=true&w=majority';

```

It is the link of my mongodb, where I store my data. You may want to [go ahead and create your own](https://account.mongodb.com/account/login) as well! <br>

> Remember to replace the username `DemoSiteUser`, password `DemoSite1234`, and your collection's name `DemoData`. The name of your project `demositedb` would be automatically generated. <br>

<br>
<br>

### 3. Folder and Images
Every text is basically stored in MongoDB, only images are stored in local drive. In my case, please go to `/public/imgs` to create the folder with the same name as your Image-Collection that you newly create on the site. <br>

> For example, one default collection is called "small animals", and one folder inside `/public/imgs` directory has the same name. 

> Everytime you create a new Image-Collection, have to go create a folder with images first, otherwise it raises an error (and it has some point, it is designed to show some pictures, always having pictures is ideal! ). It is inconvenient, just in my case, I won't run it when nothing is stored in my drive!

### 4. Go for a Weather API
In my case, I used a public weather api with my location (Hamilton, ON, Canada) here: [Open-Meteo](https://open-meteo.com/en/docs), and based on its reutrn `weathercode` value, I accordingly adjusted the background-position of weather image in `imgs/other` to display the correct weather icon. You may want to use your own icons (remember to change the file name to `Weather-Icons`) and APIs.

<br>
<br>
<br>

And that's everything, thanks for reading till here.
