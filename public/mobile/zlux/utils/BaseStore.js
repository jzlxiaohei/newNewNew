/**
 * Created by zilong on 9/19/15.
 */

export default class BaseStore{

    __className = 'BaseStore'

    listeners=[]

    //state=undefined;

    subscribe(listener){
        var index = this.listeners.length
        this.listeners.push(listener);

        return (index)=>{
            return ()=>{
                this.listeners.splice(index);
            }
        }(index)
    }

    dispatch(type,data){
        this.state = this.reducer(type,data);
        this.listeners.forEach(listen=>{
            listen(data,this.getState())
        })
    }

    reducer(type,data){
        throw new Error('subClass fo BaseStore should implement reducer function')
    }

    getState(){
        return this.state;
    }


}