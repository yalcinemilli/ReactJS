const initState = {
   /* id: "",
    kursname: "",
    sitzungen: "",
    image: "",
    text: "",
    wirkungsweise: [],
    extra: [],
    audiotitle: [],
    preis: "",
    inappID: "",*/
    kurse: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "READ_KURSE":
        return {
            kurse: [...action.item]
        }
        case "DELETE_KURS":
        return  {
            kurse: [...state.kurse.filter(ele => ele.id !== action.index)]
        }
        case "ADD_KURSE":
            return {
                kurse: [...state.kurse, action.item]
            }
        case "EDIT_KURS":
            return {
                kurse: [...action.item]
            }
        
        default:
            break;

    }
    return state
}

export default rootReducer