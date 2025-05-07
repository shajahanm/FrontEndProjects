const withAuth = (Component) => {
    return function (props) {
        const isAuthenticated = true;
        if(isAuthenticated){
            return <Component {...props} />
        }else{
            return <p>Please login in</p>
        }
    }
}
export default withAuth