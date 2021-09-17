const initialState = 0;

const IncTheNumber = (state = initialState,action) => {
switch(action.type){
    case "Increament": return state + action.payload;
    case "Decreament": return state - 1;
    default: return state;
}
}

export default IncTheNumber;