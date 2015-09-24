export function addNews(newsObj){
    return {
        type:'add_news',
        newsObj
    }
}

export function updateNews(newObj){
    return {
        type:'update_news',
        newsObj
    }
}