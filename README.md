# PORTFOLIO PAGE

**This is portfolio page, short one age project that summarise favourite projects I worked on so far, few lines about me and contact information.**

## Which technologies I used and why?

* I used React as a main library. Except I somehow like it, don't know why, maybe because that is my second "language" after JS that I learned and has some power in itself, idk...just blabbing nonsense... 😅
But, second reason is I really want to concentrate on it now and learn it a bit deeper. Plan is to build few projects, explore documentation and news. Have feeling that I explore in general too much over different languages and the best thing to do now is to focus on one, and React is my biggest wish to conquer.
  ![](https://media.giphy.com/media/jQnPoDtuIFWbTV45He/giphy.gif?cid=ecf05e476d1gkncwedf4ee53tg7msg9fpn0mwnqgb44jscrj&rid=giphy.gif&ct=g)
  * For styling part I used SAAS and his SCSS syntax, just wanted to see how would that work. Liked the use of **variables**- for example in this project I used **variable** for **primaryColor** for entire project, which is not much but I've got the sense how that can help a lot when you have bigger
    project on mind. 
    *What I didn't like* is that part when you can nest children styles inside parent- sometimes I got lost in all that open brackets...
    ```
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

# TO BE CONTINUED! #