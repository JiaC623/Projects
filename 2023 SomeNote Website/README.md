# This is A Simple Local Website
First of all, the functionalities are not very complete. <br>
The work is highly based on YouTube Videos [Node.js Crash Course Tutorial](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU), Public Weather API website [Open-Meteo](https://open-meteo.com/en/docs), and answers from [stack overflow](https://stackoverflow.com/). Please go check out these resources and they are greatly helpful. <br>
<br>
<br>
<img src="./demo-pictures/overall.png" style="width:120%;height:120%;">

<br>

The wallpaper and weather icon images are from public network. <br>

<br>

This site I originally wanted to create is to show myself all the novels, comics, animes, video games (either mobile or on laptop), TV series, or any other artwork/stories through all kinds of media that I found really interesting and memorable, once I open this site.  <br>

I used to keep photos on phone album, copy and paste on OneNote, or store in computer hard drive, which might not an eye-catching place for me to see (except for my posters on the wall). Now, I have this site, and everytime I open it, it randomly gives me some impressive and beautiful images I collected, and I can remind myself of every media that I read/watch/play, the moment I see them, I remember the happiness and stories knowing them. <br>

<br>
Below are what it can and cannot do. 

<br>
<br>

## What's on the Home Page?
The Home Page should initially look like:
<br>
<br>
<img src="./demo-pictures/ini-page.png" style="width:40%;height:40%;">


### Images, Blogs, Todos!

- "Today's Featured Photos" will randomly choose an image collection to display. 
> Notice that it only displays the first five images, so if you want to change the order, you need to change their file names (alphabetical order if that's also your case). 

- "Latest Blogs" will display all the Blog's Titles and Blog's Snippets (you'll see when you create a blog). By clicking the "Latest Blogs" or blogs, you'll head into the all-blogs page.

- "ToDo List" will show all the todos you created and only their titles. Similar to Blogs, you click the "ToDo List" or todos themselves to reach all-todos page.

<br>

### Create One Image-Collection, Blog, or ToDo!

- Click the tags on the Navigation bar: they contain all the existing items and allow people to create new.

> A Big Thing to Notice... I haven't inplemented a way to update/edit the existing items, so if you want to edit, you will need to delete and create new. That's why I say this is really a simple local site.
<br>
<br>
<img src="./demo-pictures/todo-create-page.png" style="width:40%;height:40%;">
<br>
<br>
<img src="./demo-pictures/blog-create-page.png" style="width:40%;height:40%;">
<br>
<br>

> Image Collection; if its Media-Type is a new one, the new Media-Type will also be displayed on the side. 
<br>
<br>
<img src="./demo-pictures/imageCollection-create-page.png" style="width:40%;height:40%;">

<br>
<br>
<br>

## Other Limitations

The site is all in `px`, I want it to display on a big screen (that's my laptop), so I did not include `em` to adjust tablet, phone or other screen size. 

<br>
<br>
<br>

## How to Use then?

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

> Everytime you create a new Image-Collection, have to go create a folder with images first, otherwise it raises an error (and it has some point, it is designed to show some pictures, always having pictures is ideal! ). It is inconvenient, just in my case, I originally stored my favourite images in my drive, and reasonably it is a faster way for me to check out my images instead of opening File Explorer. 

### 4. Go for a Weather API
In my case, I used a public weather api here: [Open-Meteo](https://open-meteo.com/en/docs), and based on its reutrn `weathercode` value, I accordingly adjusted the icon image in `imgs/other` to display the weather. You may want to use your own icons (remember to change the file name to `Weather-Icons`) and APIs.

<br>
<br>
<br>

And that's everything, thanks for reading till here.
