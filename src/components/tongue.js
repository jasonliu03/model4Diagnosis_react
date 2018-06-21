import React from 'react'
import TongueForm from './selectTongue'

class Face extends React.Component {
	render() {
		return (
			<div>
				<TongueForm { ...this.props } />
			</div>
		)
	}
}

export default Face;