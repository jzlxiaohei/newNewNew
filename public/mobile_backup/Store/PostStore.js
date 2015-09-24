import immutable from 'immutable'

function isArray(arr){
    return Object.prototype.toString.call(arr) == '[object Array]';
}

export default class PostStore{
    constructor(initState){
        this.state = initState||[];
        this._innerList = new immutable.List();
        this._oldList = undefined;
        this.array = undefined;
        this.subscribeFns = []
    }

    subscribe(fn){
        this.subscribeFns.push(fn)
    }

    push(post){
        if(isArray(post)){
            return this._innerList.withMutations(list=>{
                post.forEach(item=>{
                    list.push(item)
                })
            })
        }
        return this._innerList.push(post);
    }

    unshift(post){
        return this._innerList.unshift(post)
    }

    update(post){
        var index = this._innerList.findIndex(e=>e.id = post.id)
        if(index == -1) {return}
        return this._innerList.set(index,post)
    }

    delete(post){
        var index = this._innerList.findIndex(e=>e.id = post.id)
        if(index == -1) {return}
        return this._innerList.delete(index)
    }

    dispatch(type,post){
        if(typeof this[type]=='function'){
            this._innerList = this[type](post)
        }
        for(var i =0;i<this.subscribeFns.length;i++) {
            this.subscribeFns[i](post)
        }
    }

    //search(predicate){
    //    return this._innerList.filter(predicate)
    //}


    //toArray(){
    //    if(this._oldList==this._innerList){
    //        return this.array;
    //    }
    //    this._oldList = this._innerList;
    //    this.array = this._innerList.toArray()
    //    return this.array
    //}

    getState(){
        if(this._oldList==this._innerList){
            return this.array;
        }
        this._oldList = this._innerList;
        this.array = this._innerList.toArray()
        return this.array
    }

}