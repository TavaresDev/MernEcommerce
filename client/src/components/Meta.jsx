import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title> {title}</title>
			<meta name='description' content={description}></meta>
			<meta name='keyword' content={keywords}></meta>
		</Helmet>
	)
}

export default Meta

Meta.defaultProps = {
    title: 'welcome to Shop',
    description: 'We seel best',
    keywords: 'stuff , we sell'

}