const initalState = {
    items: []
}

export default function reducer(state = initalState, action = {}) {
    switch(action.type) {
        case "NEW_TODO":
            // destruct "items" from state (equivlent to const items = this.state.items;)
            const { items } = state; 
            
            // put the new item in an array of one value
            const arrayOfNewItem = [{completed: false, text: action.text}]; 

            // create a new array, by concactenating the two arrays
            const newArrayWithAllItems = items.concat(arrayOfNewItem); 

            return { items: newArrayWithAllItems };
        case "TOGGLE_TODO":
            const {index, newValue: completed } = action;
            // create a copy of the array
            const copiedArray = state.items.slice();
            
            // get the text value of the current item
            const {text} = copiedArray[index];

            // create a new object with the updated status and existing text value
            // and place it over the old item's position in the array
            copiedArray[index] = { completed, text };

            // this will print the old item and the new item
            // notice, that the current state has the old value
            console.log(state.items[index], copiedArray[index]);

            // set the new state to the new array
            return { items: copiedArray };
        default:
            return state;
    }
}