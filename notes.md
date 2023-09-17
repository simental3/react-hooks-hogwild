## Deliverables
## (Stories) A user can:
1. [X] See all hog cards w/ name and image on page load
  - `ui grid container` on parent of all hogs
  - `ui eight wide column` on children
2. [X] Click a hog to see more details (specialty, weight, greased, and highest medal achieved)
  - HogDetail will be conditionally rendered as a Child of HogCard
3. [X] Click checkbox to see ONLY greased pigs
4. [X] Use a dropdown menu to sort by name or weight

_Note:_ User can both filter and sort the filtered results

## BONUS:
  - [X] Hide hogs (no persistance AND don't have to bring back!)
  - [X] implement `semantic ui` styling on card layout
  - [X] Add new hogs using a form

## Structure
  - App (state: hogList, filter and sort options)
    - Nav (more of a Header)
    - NewHogCardForm
    - Filter (events: update filter and sort options)
    - HogList (props: filtered and/or sorted list of hogs)
      - HogCard (state: toggleDetail)
        -HogDetail