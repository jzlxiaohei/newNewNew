class AppComponent extends React.Component{

    constructor(props,context){
        super(props,context)
    }


    state={
        postListHide:false,
        postDetailHide:true
    }

    navigator(path){
        path= path || '#/'
        if(path=='#/'){
            this.setState({
                postListHide:false,
                postDetailHide:true
            })
        }else{
            const postId = path.split('/')[2];
            postDetailStore.loadPostDetail({postId:postId})
            this.setState({
                postListHide:true,
                postDetailHide:false
            })
        }
    }

    componentDidMount(){
        postListStore.loadPosts();
        window.addEventListener('hashchange',e=>{this.navigator(location.hash)})
    }

    componentWillMount(){
    }


    render() {
        let postListClassName='post-list-area',
            postDetailClassName='post-detail-area'
        if(this.state.postListHide){postListClassName+=' hide'}
        if(this.state.postDetailHide){postDetailClassName+=' hide'}

        return (
            <div>
                <div className={postListClassName}>
                    <div className='app-header'>
                        <div className='app-title'>华尔街见闻</div>
                    </div>
                    <PostListElement/>
                </div>
                <div className={postDetailClassName}>
                    <PostDetailElement/>
                </div>
            </div>
        )
    }
}