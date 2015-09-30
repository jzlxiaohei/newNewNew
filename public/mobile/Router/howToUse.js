/**
 * Created by zilong on 9/24/15.
 */

class WrappedComponent extends React.Component{

    render(){
        return (
            <div></div>
        )
    }

}

class Wrap extends React.Component{

    //injected!
    __navigate(path,params){
        //TODO check whether function exist
        return router(path)(params);
    }

    routes={
        '/':home,
        '/detail':detail
    }

    home(params){

    }

    detail(){

    }

    render(){
        return (
            <div>
                <WrappedComponent {...this.props} __navigate={__navigate}/>
                <Router>
                    {this.props.children}
                </Router>
            </div>
        )
    }
}



