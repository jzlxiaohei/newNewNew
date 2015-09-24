import {Component} from 'react'
import urllite from 'urllite'

import detect from './detect.js'

function addEventListener(node, type, listener) {
    if (node.addEventListener) {
        node.addEventListener(type, listener, false)
    } else {
        node.attachEvent('on' + type, listener)
    }
}

function removeEventListener(node, type, listener) {
    if (node.removeEventListener) {
        node.removeEventListener(type, listener, false)
    } else {
        node.detachEvent('on' + type, listener)
    }
}

var PropValidation = {
    path: React.PropTypes.string,
    root: React.PropTypes.string,
    useHistory: React.PropTypes.bool
};

export default (WrappedComponent)=>{

    return class extends Component{
        static propTypes=PropValidation
        static contextTypes= PropValidation
        static childContextTypes=PropValidation

        static defaultProps={
            routes:{}
        }

        state={
            path: getInitialPath(this),
            root: this.props.root || this.context.path || '',
            useHistory: (this.props.history || this.context.useHistory) && detect.hasPushState
        }

        componentWillMount() {
            this.setState({ _routes: processRoutes(this.state.root, this.routes, this) });
        }

        componentDidMount() {
            if (this.state.useHistory) {
                addEventListener(window, 'popstate', this.onPopState);
            } else {
                if (window.location.hash.indexOf('#!') === -1) {
                    window.location.hash = '#!/';
                }
                addEventListener(window, 'hashchange', this.onPopState);
            }
        }

        componentWillUnmount() {
            removeEventListener(window,'popstate',this.onPopState)
            removeEventListener(window,'hashchange',this.onPopState)
        }

        onPopState() {
            var url = urllite(window.location.href),
                hash = url.hash || '',
                path = this.state.useHistory ? url.pathname : hash.slice(2);

            if (path.length === 0) path = '/';

            this.setState({ path: path + url.search });
        }

        matchRoute(path) {
            if (!path) {
                return false;
            }

            var matchedRoute = {};

            this.state._routes.some(function(route) {
                var matches = route.pattern.exec(path);

                if (matches) {
                    matchedRoute.handler = route.handler;
                    matchedRoute.params = matches.slice(1, route.params.length + 1);

                    return true;
                }

                return false;
            });

            return matchedRoute.handler ? matchedRoute : false;
        }

        renderCurrentRoute() {
            var path = this.state.path,
                url = urllite(path),
                queryParams = parseSearch(url.search);

            var parsedPath = url.pathname;

            if (!parsedPath || parsedPath.length === 0) parsedPath = '/';

            var matchedRoute = this.matchRoute(parsedPath);

            if (matchedRoute) {
                return matchedRoute.handler.apply(this, matchedRoute.params.concat(queryParams));
            } else if (this.notFound) {
                return this.notFound(parsedPath, queryParams);
            } else {
                throw new Error('No route matched path: ' + parsedPath);
            }
        }

        render(){

            <WrappedComponent {...this.props}/>
        }
    }

}

function getInitialPath(component) {
    var path = component.props.path || component.context.path,
        hash,
        url;

    if (!path && detect.canUseDOM) {
        url = urllite(window.location.href);

        if (component.props.history) {
            path = url.pathname + url.search;
        } else if (url.hash) {
            hash = urllite(url.hash.slice(2));
            path = hash.pathname + hash.search;
        }
    }

    return path || '/';
}