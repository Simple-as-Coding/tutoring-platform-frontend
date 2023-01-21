import Layout from "../layouts/Layout";

const Login = () => {
    return(
        <Layout>
            <fieldset>
                <legend>Login</legend>
                <label>
                <input type="text" name="login" placeholder="Login" required/>
                </label>
                <br />
                <label>
                    <input type="password" name="password" placeholder="Password" required/>
                </label>
                <br />
                <button type="submit">Login</button>
            </fieldset>
        </Layout>
    )
}

export default Login;