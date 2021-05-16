# NASASearchEngine
 This is a simple-designed search engine using NASA's imaging api. 
 The logic/behavior of this application is straightforward: user enters a term that the api recognizes, and it would 
 output a gallery or feed of images.
 The available features for this is the modes that enable the user to turn on or off the descriptions of each images, where the purpose 
 of this is to allow users to understand the context of the images, or enlargement of the images. 
 A lot of the behind the scenes involves using states with props passing, and major usage of CSS. 

 Primary components: 
 search.js-> search.js deals with the user search and handles APi fetching. It passes the resulting data to other components to render certain items. For the 
 most part, this just deals with searching/retrieving data.

 imageFeed.js->this handles the output of the search the user will sees. Uses the the links.href/data.descriptions/data.date_created aspects of the retrieved json. 
 Incorporates a lot of css to generate the outputs you see.

 invalid.js ->renders an error message for invalid search.


 youtube video: https://youtu.be/IuALrUrFUds
 live website: https://newnasa.herokuapp.com/
