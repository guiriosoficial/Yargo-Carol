# Yargo & Carol
A responsive wedding website template with a minimalists and rustics design including a beautiful parallax and a simple fly-in effect (For Yargo Tolentino and Carol Rios).  

It was made using just HTML, CSS (SASS) and Javascript (jQuery), and you can run it by following the instructions in [Project Setup](#project-setup), and personalize using the [Customization Tips](#customization-tips).  

## Project Setup
- **Requirements:**
  - `Node` (>=14.18.2 || <=16.13.1)
  - `NPM` (>=6.14.15 || <=8.1.2")
- **Install Dependencies:** `npm install`
- **Start Development Server:** `npm start` (Runs on [http://localhost:9000](http://localhost:9000))
- **Compiles For Production:** `npm run build` (Will be Build in `/dist`)

## Customization Tips
You can follow this table to make some things easier to customize  
**\*RECOMMENDED**  
**<sup>n</sup>UNRECOMMENDED**

| Description                                 | Archive                                    |                                 Line(s) | Action                                                     |
| ------------------------------------------- | ------------------------------------------ | --------------------------------------: | :--------------------------------------------------------- |
| Sets parallax speed                         | `scripts/main.js`                          |                                      21 | CHANGE `parallaxSpeed` VALUE                               |
| Disables parallax effect                    | `scripts/main.js` <br> `styles/main.scss`  |                   17-25 <br> 84 <br> 85 | COMMENT BLOCK <br> UNCOMMENT LINE <br> COMMENT LINE        |
| Sets fly-ins start position                 | `scripts/main.js`                          |                                      28 | CHANGE `flyinTiming` VALUE                                 |
| Sets fly-ins fade-in speed                  | `scripts/main.js`                          |                                      35 | CHANGE `flyinSpeed` VALUE (ms)                             |
| Disables fly-in effects (alt.1)             | `scripts/main.js` <br> `styles/main.scss`  |                          27-38 <br> 278 | COMMENT BLOCK <br> CHANGE `opacity` VALUE TO `1`           |
| Disables fly-in effects (alt.2)             | `index.html`                               | 45, 63, 75, <br> 95, 159, <br> 197, 230 | REMOVE `flyin` CLASS                                       |
| Disables name mask<sup>1</sup>              | `scripts/main.js`                          |                                      42 | COMMENT BLOCK                                              |
| Disables phone mask<sup>1</sup>             | `scripts/main.js`                          |                                   44-53 | COMMENT BLOCK                                              |
| Sets phone mask*                            | `scripts/main.js`                          |                                      44 | CHANGE `masks` ARRAY VALUES                                |
| Sets form action*<sup>2</sup>               | `index.html`                               |                                     235 | REMOVE `data-netlify` PARAMETER <br> CHANGE `action` VALUE |
| Enables default HTML Validation<sup>3</sup> | `index.html`                               |                                     235 | REMOVE `novalidate` PARAMETER                              |
| Disables form validation<sup>1</sup>        | `scripts/main.js`                          |                        56-88 <br> 95-99 | COMMENT BLOCK <br> UNCOMMENT BLOCK                         |
| Sets scroll speed                           | `scripts/main.js`                          |                                     109 | CHANGE `scrollSpeed` VALUE                                 |
| Use suave scroll with pure CSS<sup>4</sup>  | `scripts/main.js` <br> `styles/_base.scss` |                         108-112 <br> 30 | COMMENT BLOCK <br> UNCOMMENT BLOCK                         |
| Sets default font                           | `styles/_base.scss`                        |                               2 <br> 29 | CHANGE `url` PARAMETER <br> CHANGE `font-family` VALUE     |
| Sets default transitions                    | `styles/_base.scss`                        |                                      56 | CHANGE ALL VALUES                                          |
| Disables transitions                        | `styles/_base.scss`                        |                                   57-59 | COMMENT BLOCK                                              |
| Sets gifts modal link*                      | `index.html`                               |                                     191 | CHANGE `href` VALUE                                        |
| Disables modal gifts<sup>5</sup>            | `scripts/main.js` <br> `index.html`        |                          91-94 <br> 175 | COMMENT BLOCK <br> CHANGE `href` VALUE                     |
| Disables modal form                         | `scripts/main.js`                          |                           74 <br> 95-99 | COMMENT LINE <br> COMMENT BLOCK                            |
| Desables modals close<sup>6</sup>           | `scripts/main.js`                          |                                 100-105 | COMMENT BLOCK                                              |
| Use modals without jQuery<sup>4</sup>       | `scripts/main.js` <br> `styles/main.scss`  |                    901-105 <br> 250-254 | COMMENT BLOCK <br> UNCOMMENT BLOCK                         |
| Sets background images*                     | `images/*`                                 |                                       - | REPLACE FILES (keep _filename_)                            |
| Sets guests pictures*<sup>7</sup>           | `images/guests/*` <br> `index.html`        |                           - <br> 98-149 | REPLACE FILES <br> CHANGE `src` VALUES TO _filename_       |
| Sets guests names*                          | `index.html`                               |                                  98-149 | CHANGE HEADERS TEXT                                        |
| Chenge all texts*                           | `index.html`                               |                                  28-328 | CHANGE ALL TEXT (Obviously)                                |

<sup>1</sup>Caution, remove will potentialize invalid data in submissions, spans and user errors.  

<sup>2</sup>The `data-netlify` is used to integrates with Netlify-forms. If you're using Netlify, don't do this step, but if you're using another host, read the documentation and fit the form.  

<sup>3</sup>The html validation is made field by field, not simultaneously. It won't remove the jQuery validation, but the HTML's validation willl be made before te jQuery's validation (the invalid fields will be showeds one by one).  

<sup>4</sup>(OBSOLETE) Caution, Some browsers may not support it. It uses `pointer-events` and `scroll-behavior` which may not work well in some browsers.  

<sup>5</sup>This modal is recommended only if you don't have a link fot the list yet, doesn't using a third party website, or want to warning something before the user enter in gifts list.  

<sup>6</sup>Recommended only if all modals are disabled.

<sup>7</sup>Recommended to use pictures with 1:1 ratio, 50x50 resolution to avoid distort the images.  

***

> Please, don't forget to give credits ;).
