# Yargo & Carol
A responsive wedding website template with a minimalists and rustics design including a beautiful parallax and a simple fly-in effect (For Yargo Tolentino and Carol Rios).  

It was made using just HTML, CSS (SASS) and Javascript (jQuery), and you can run it by following the instructions in [Project Setup](#project-setup), and personalize using the [Customization Tips](#customization-tips).  

## Project Setup
- **Requirements:** `Node` and `NPM` installed
- **Install Dependencies:** `npm install`
- **Start Development Server:** `npm start`
- **Compiles For Production:** `npm run build`

## Customization Tips
You can follow this table to make some things easier to customize  
**\*RECOMMENDED**  
**<sup>n</sup>UNRECOMMENDED**

| Description                                 | Archive                                    |                   Line(s) | Action                                                     |
| ------------------------------------------- | ------------------------------------------ | ------------------------: | :--------------------------------------------------------- |
| Sets parallax speed                         | `scripts/main.js`                          |                        21 | CHANGE `parallaxSpeed` VALUE                               |
| Disables parallax effect                    | `scripts/main.js` <br> `styles/main.scss`  |             17-25 <br> 85 | COMMENT BLOCK <br> UNCOMMENT LINE                          |
| Sets fly-ins start position                 | `scripts/main.js`                          |                        28 | CHANGE `flyinTiming` VALUE                                 |
| Sets fly-ins fade-in speed                  | `scripts/main.js`                          |                        35 | CHANGE `flyinSpeed` VALUE (ms)                             |
| Disables fly-in effects (alt.1)             | `scripts/main.js` <br> `styles/main.scss`  |            27-38 <br> 274 | COMMENT BLOCK <br> CHANGE `opacity` VALUE TO `1`           |
| Disables fly-in effects (alt.2)             | `index.html`                               | 45, 65, 79, <br> 100, 183 | REMOVE `flyin` CLASS                                       |
| Sets phone mask*                            | `scripts/main.js`                          |                        44 | CHANGE `masks` ARRAY VALUES                                |
| Disables name and phone mask<sup>1</sup>    | `scripts/main.js`                          |                     42-52 | COMMENT BLOCK                                              |
| Sets form action*<sup>2</sup>               | `index.html`                               |                       190 | REMOVE `data-netlify` PARAMETER <br> CHANGE `action` VALUE |
| Disables form validation<sup>1</sup>        | `scripts/main.js`                          |          56-88 <br> 95-99 | COMMENT BLOCK <br> UNCOMMENT BLOCK                         |
| Enables default HTML Validation<sup>3</sup> | `index.html`                               |                       190 | REMOVE `novalidate` PARAMETER                              |
| Sets scroll speed                           | `scripts/main.js`                          |                           |                                                            |
| Use suave scroll with pure CSS              | `scripts/main.js` <br> `styles/_base.scss` |                           |                                                            |
| Sets default font                           | `styles/_base.scss`                        |                 2 <br> 28 | CHANGE `url` PARAMETER <br> CHANGE `font-family` VALUE     |
| Sets default transitions                    | `styles/_base.scss`                        |                        46 | CHANGE ALL VALUES                                          |
| Disables transitions                        | `styles/_base.scss`                        |                     47-49 | COMMENT BLOCK                                              |
| Sets gifts modal link*                      | `index.html`                               |                       176 | CHANGE `href` VALUE                                        |
| Disables modals gifts<sup>4</sup>           | `index.html`                               |                       162 | CHANGE `href` VALUE <br> REMOVE `data-modal` PARAMETER     |
| Disables modals form                        | `index.html`                               |                       190 | CHANGE `href` VALUE <br> REMOVE `data-modal` PARAMETER     |
| Use modals without jQuery<sup>5</sup>       | `scripts/main.js` <br> `styles/main.scss`  |        91-99 <br> 246-250 | COMMENT BLOCK <br> UNCOMMENT BLOCK                         |
| Sets background images*                     | `images/` <br> `images/bpts/`              |                         - | REPLACE FILES (keep _filename)_                            |
| Sets guests pictures*<sup>6</sup>           | `images/guests/` <br> `index.html`         |            - <br> 103-154 | REPLACE FILES <br> CHANGE `src` VALUES TO _filename_       |
| Sets guests names*                          | `index.html`                               |                   103-154 | CHANGE HEADERS TEXT                                        |
| Chenge all texts*                           | `index.html`                               |                    28-268 | CHANGE ALL TEXT (Obviously)                                |

<sup>1</sup>Caution, remove will potentialize invalid data in submissions, spans and user errors.  

<sup>2</sup>The `data-netlify` is used to integrates with Netlify-forms. If you're using Netlify, don't do this step, but if you're using another host, read the documentation and fit the form.  

<sup>3</sup>The html validation is made field by field, not simultaneously. It won't remove the jQuery validation, but the HTML's validation willl be made before te jQuery's validation (the invalid fields will be showeds one by one).  

<sup>4</sup>This modal is recommended only if you don't have a link fot the list yet, doesn't using a third party website, or want to warning something before the user enter in gifts list.  

<sup>5</sup>Caution, Some browsers may not support it. It uses `pointer-events` and `display: fixed` which may not work well in some browsers.  

<sup>6</sup>Recommended to use pictures with 1:1 ratio, 50x50 resolution to avoid distort the images.  

***

> Please, don't forget to give credits ;).
