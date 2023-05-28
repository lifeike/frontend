# DevLift Real-time Leaderboard

## Project Summary

- Author : Feeco Li 2023.5.28
- Email: lifeike67@gmail.com
- This is realtime movie rating leaderboard using reactfire/react/material UI.
- [Production link](https://main.d3nhqx7mts8be0.amplifyapp.com/)
- [Github link](https://github.com/lifeike/frontend)

## For Code Reviewers

- For faster development, I use my own template directly which is already deployed online, so you may see some other source code in this repo which is part of template, the only file for this is demo project is [/src/pages/devlift](https://github.com/lifeike/frontend/tree/main/src/pages/devlift) , you can open this path in new tab to review which could save the efforts to download and run this locally.
- To use this leaderboard, simply click rate button to add your rating, new movie list will be sorted by its rating from highest to lowest

## Other Thoughts

- Same user should only be able to add rating for the first time or modify their ratings, however, I did not implmenet this business logic on it, as this is more a demo project
- I could also use state management tools with reactfire. However, for this small demo without complex data structure, I chose to keep this simple and clear. No matter redux/redux-saga/mobx/zustand, I can use them all, also I can implement redux manually which means I know how state management tools work internally.
- This is the first time I use firebase and reactfire. however, firebase looks like an integration of Auth0 SSO+web socket+ Mongo altas, which I have used for years.
- The reason why I chose using leaderboard as a demo, simply because I only have some movie mock data on my hand.And I personally believe this should be good enough to demonstrate reactfire real-time features, when you open multiple instances of this app from different browsers, ratings would be changed in real time.

## Development

- Ask mobile developers(colleagues) what is firebase 1h
- Read some documentation about reactfire and firebase 1h
- Load some mock data from mongo atlas to firestore 1h
- Writing source code 4h
- Documentation 1h
