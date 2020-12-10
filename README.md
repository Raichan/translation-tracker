# Translation Tracker

A counter tool with multiple, customizable counters, built for tracking translation requests for different languages at Pokémon World Championships and other international Pokémon card game & video game tournaments.

Built with MongoDB, Express.js, React and Node.js.

## Problem

At the yearly Pokémon World Championships, a team of translators works to ensure smooth communications in an international environment. They interpret between players and judges during the matches in case the players don't know English, and occasionally translate deck lists, team lists and other written materials.

To track the workload of translators, the team keeps a pen and paper tally of how many times each language is needed during the tournament. One time a translator is called to a table during a match = one line in the tally. When trying to find out whether there was an app that could do this more efficiently, none were found. So, this one was created.

### Requirements

- Customizable list of counters depending on how many / which languages are present at the event
- Simple UI to count translations for each language
- Possibility to remove the latest translations counted, in case of misclicks
- Easily used by multiple people, as the person with tally duty may change multiple times during the tournament
- Mobile friendly, as the translators don't have their laptops with them

## Status

Functional basic version, fills the requirements but could use plenty of improvements, including but not limited to:

- Fix occasional deletion bug
- Automatic login on page refresh
- More modern way to edit used languages
- Admin panel to manage all events in the database
- Statistics

## Demo

Running at http://translation-tracker.herokuapp.com/.
