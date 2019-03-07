# Eat-Da-Burger

This is a restaurant app that lets users input the names of burgers they’d like to eat. Whenever a user submits a burger’s name, your app will display the burger on the left side of the page — waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. Your app will store every burger in a database, whether devoured or not.

## Getting Started

Download the repository using your preferred method:

```
Option #1 (SSH): git@github.com:paichunwang/Eat-Da-Burger.git
Option #2 (HTTPS): https://github.com/paichunwang/Eat-Da-Burger.git
Option #3 (ZIP): https://github.com/paichunwang/Eat-Da-Burger/archive/master.zip

## Prerequisites

```
Requirement #1: A heroku account that can host the files
Requirement #2: ClearDB Heroku extension added on the heroku account to serve as database
Requirement #3: Edits made to the dotenv.example.txt to establish connections to Heroku's ClearDB

```


### Installing

Once cloned or downloaded using your preferred method in 'Getting Started', open the eat-da-burger file with the terminal of your choice. While in the root folder, run the command "npm install", this will install all package dependency required to run this application. Then *rename* dotenv.example.txt to ".env" furthermore, if deployment to a web-service, please follow the deployment method below, otherwise include the database credential inside the .env file to establish connection to the localhost database.

## Testing Phase

To test this functionality,
1. open the eat-da-burger app either locally with "npm start" or on a web-service.
2. Enter the the burger name on the left column to be devoured.
3. Once render for the burger appears on the right, click Devour it! to remove it from the page.

## Deployment

1. download the whole repository.
2. create and enter all the required key in the .env file. *Refer to the "INSTALLING" for .env setup and structure.

## Built With

* [HTML](https://www.w3.org/standards/webdesign/htmlcss) - the language for describing the structure of Web page.
* [Bootstrap MAXCDN 3.3.7](http://blog.getbootstrap.com/2016/07/25/bootstrap-3-3-7-released/) - version of bootstrap used to dynamically format HTML webpages.
* [VSCode](https://code.visualstudio.com/) - free code editor that is used to redefine and optimize for the building and debugging modern web and cloud applications.
* [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Heroku](https://www.heroku.com/) - Cloud platform as a service supporting several programming languages.

## Contributing

This webpage with build under the aid and instruction of affiliated instructors at the [UTAUS201805FSF4-Class Coding BootCamp](https://techbootcamps.utexas.edu/coding/).

## Authors

* **Patrick Wang** - [Firebase-Train-RPS](https://github.com/paichunwang/Firebase-Train-RPS)

## License

This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) website for details

## Acknowledgments

[Antonio Gage](https://github.com/antoniojgage) - help with initial development and structure/refinement of github pages and files.
