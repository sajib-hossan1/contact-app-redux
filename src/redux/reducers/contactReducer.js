const initialState = [
    { id: 0, name: "Raman Sharma", email: "email@email.com", number : 1234567890 },
    { id: 1, name: "Test Name", email: "test@test.com", number : 4567891230 },
];

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT" : state = [...state, action.payload];
        return state;
        
        default : return state;
    }
};

export default contactReducer;