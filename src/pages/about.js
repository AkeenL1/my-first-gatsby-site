import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = () => {
    return (
        <Layout pageTitle={"About Me"}>
            <p>Akeen Lewis</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage