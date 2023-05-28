# DevLift Real-time Leaderboard

## Project Summary

- Author : Feeco Li 2023.5.28
- Email: lifeike67@gmail.com
- This is realtime movie rating leaderboard using reactfire/react/material UI.
- [production link](https://main.d3nhqx7mts8be0.amplifyapp.com/)
- [github link](https://github.com/lifeike/frontend)

## For Code Reviewers

- For faster development, I use my own template directly which is already deployed online, so may see some other source code in this repo which is part of template, the only file for this is demo project is

  - <a href="https://github.com/lifeike/frontend/tree/main/src/pages/devlift" target="_blank">/src/pages/devlift</a>
  - <a href="placeholder.com" target="_blank">Opens in new tab</a>

- To use this leaderboard, simply click rate button to add your rating, new movie list will be ranked from highest to lowest

## Other thoughts

- Same user should only be able to add rating for the first time or modify their ratings, however, I did not implmenet this business logic on it, as this is more a demo project
- I could also use state management tools with reactfire. However,
- This is the first time I use firebase and reactfire. however, firebase looks like a integration of Auth0 SSO+web socket+altas, which I have used for years.

## Development

- Ask mobile developers(colleagues) what is firebase 1h
- Read some documentation about reactfire and firebase 1h
- Load some mock data from mongo atlas to firestore 1h
- Writing source code 4h
- Documentation 1h
