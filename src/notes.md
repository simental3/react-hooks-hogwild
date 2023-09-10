## Stories
A user can:
1. [X] See all hog cards w/ name and image on page load
  - "ui grid container" on parent of all hogs
  - "ui eight wide column" on children
2. [X] Click a hog to see more details
  - HogDetail will be conditionally rendered as Child of HogTile
3. [] Click a checkbox and see ONLY greased pigs
4. [] Use a dropdown to sort by name or weight

_Note:_ User can both filter and sort the filtered results.

BONUS: [] Hide hogs (no persistence AND don't have to bring back!)
  - implement `semantic-ui` styling on card layout
  - Add new hogs using a form

## Structure
- App (state: hogList, filter and sort options)
  - NavBar (more of a Header than it is a NavBar)
  - Filter (events: update filter and sort options)
  - HogList (props: filtered and/or sorted list of hogs)
    - HogTile* (state: toggleDetail)
      - HogDetail*

**Reasoning:**
The app doesn't actually have anything that resembles true navigation. Could rename NavBar to Header