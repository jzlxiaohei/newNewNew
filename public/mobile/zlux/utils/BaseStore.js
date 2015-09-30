/**
 * store.use((type,payLaod,next)=>{
 *
 *  if(xxx){
 *      return 'error'
 *  }else{
 *      next(type,payLaod)
 *  }
 *
 * })
 */




export default class BaseStore{

    constructor(){
        this.wrappedDispatch = this.__dispatch
    }

    __className = 'BaseStore'

    listeners=[]

    middlewareFns=[]

    use(...fns){
        this.middlewareFns = fns;
        var _this =this;
        this.wrappedDispatch= this.middlewareFns.reduceRight((a,b)=>{
            return ()=>{
                b(a,_this.__curAction,_this)
            }
        },this.__dispatch)
    }

    //install(){
    //    //this.__curType = type
    //    //this.__payLoad = payLaod
    //    var _this =this;
    //    this.wrappedDispatch= this.middlewareFns.reduceRight((a,b)=>{
    //        return ()=>{
    //            b(a,_this.__curAction)
    //        }
    //    },this.__dispatch)
    //}

    __dispatch =()=>{
        const action = this.__curAction;
        if(typeof action !='object' || !action.type){
            throw new Error('dispatch function  need a action object with "type" property')
        }
        this.state = this.reducer(action);
        this.listeners.forEach(listen=>{
            listen(action,this.getState())
        })
    }

    dispatch(action){
        this.__curAction = action
        this.wrappedDispatch();
    }


    subscribe(listener){
        var index = this.listeners.length
        this.listeners.push(listener);

        return (index)=>{
            return ()=>{
                this.listeners.splice(index);
            }
        }(index)
    }


    reducer(action){
        throw new Error('subClass fo BaseStore should implement reducer function')
    }

    getState(){
        return this.state;
    }


}