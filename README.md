## PORTFOLIO PAGE 👩📣

**This is portfolio page, project that summarise favourite projects I worked on so far, few lines about me and contact information.**
[Valentina Corak](https://valentinacorak.netlify.app/)

## Which technologies I used and why?

* I used React as a main library. Except I somehow like it, don't know why, maybe because that is my second "language" after JS that I learned and has some power in itself, idk...just blabbing nonsense... 😅
But, second reason is I really want to concentrate on it now and learn it a bit deeper. Plan is to build few projects, explore documentation and news. Have feeling that I explore in general too much over different languages and the best thing to do now is to focus on one, and React is my biggest wish to conquer.
  ![](https://media.giphy.com/media/jQnPoDtuIFWbTV45He/giphy.gif?cid=ecf05e476d1gkncwedf4ee53tg7msg9fpn0mwnqgb44jscrj&rid=giphy.gif&ct=g)
  * For styling part I used SAAS and his SCSS syntax, just wanted to see how would that work. Liked the use of **variables**- for example in this project I used **variable** for **primaryColor** for entire project, which is not much but I've got the sense how that can help a lot when you have bigger
    project on mind. 
    *What I didn't like* is that part when you can nest children styles inside parent- sometimes I got lost in all that open brackets...
    ```scss
    * {
    .main {
    .project-section {
    color: #ffff;
    font-size: 20px;
    
    &:hover {
            color: #57DFC3;

            @include mobile {
              color: transparent;
            }
          }
        }
      }
    }
    ```
    Something like that, a lot o brackets, so I can't imagine the usage of this in some bigger project. But maybe I used it on wrong way for this first trial.
    
* For the intro part and that sliding text I used one interesting npm script called @types/react (https://www.npmjs.com/package/@types/react). Was going with that "why recreate a wheel..."

### Thoughts and flow in this projects

* This was a project that took a bit more time than I expected. I was like always indecisive about styling, 
colors, design... so SCSS part to longer. Also took time for responsiveness because I did not use Bootstrap
or anything similar and made my life harder of course. 
* Noticed that my understanding of hooks is much better with every project, here I used *useState*, *useEffect* and *useRef*
and made comments in the code to remember for what purpose they are. But still want to do few simpler projects with hooks to be more confident
with them, as in theory as well in practice. Like this blog explanation for useEffect hook https://dmitripavlutin.com/react-useeffect-explanation/.
* Material-UI Icons with React and React icons (https://www.npmjs.com/package/react-icons) are icons library that I used for this project. Used that second one because
when I needed to use GitHub, LinkedIn and other icons got some weird error in node modules @emotion so couldn't load the project and had to find something else. Did not want to delete anything from node modules...not that brave...😵
* Also wanted to mention this awesome portfolio that I found watching YouTube videos for inspiration on design part, I used her color scheme, loved them ❤ https://brittanychiang.com/ 

### Hope you will find this portfolio worth the visit and of course appreciating all comments, issues and internship offers! 😉😁
P.S. This is my [old portfolio](https://distracted-easley-70a5a9.netlify.app/) so I can humbly say I did improve a bit, from just html and css to React, nice step forward. Cheers!

<img src="https://media.giphy.com/media/A5OPIlNp8fHQbATsvC/giphy.gif?cid=ecf05e47rxi1wxu7x9v09dhbhwt9yfuhckk808gkhodpaxw5&rid=giphy.gif&ct=g" width="200" height="200">