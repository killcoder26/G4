const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        //case 'GET_USER':

        case 'POST_USER':
            const post=action.payload;
            return {...post};

        case 'SET_USER':
            const user = action.payload;
            return {...user };

        default: return state;
    }
}