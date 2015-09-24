


function newsList(state=[],action={}){

    switch(action.type){
        case 'add_todo':
            return [
                ...state,
                action.newsObj
            ]
        case 'add_todo_before':
            return[
                action.newsObj,
                ...state
            ]
        default:
            return state;
    }
}

export default newsList;