1. What problem does the context API help solve?
It helps with prop drilling. The Context API let us pass data directly to the child omponent that needs it, instead of prop drilling through it.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
action: actions are activities that happen in throughout the app. they change the state of the app.
reducers: reducers update state based on the actions.
store: the store holds are the state in our app. its the single source of truth because its where all data comes from (when you see a UI).
1. What is the difference between Application state and Component state? When would be a good time to use one over the other? 
Application state is the overall (global) state of the app. Component state lets you specify the state (data needed) for individual components.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It let Redux run asynchronously . It let us nest them together
1. What is your favorite state management system you've learned and this sprint? Please explain why!
I prefer the Context API. Makes state management easier and it's easier to work with than Redux. 