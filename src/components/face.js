import React from 'react'
import FaceForm from './selectFace'

class Face extends React.Component {
	render() {
		return (
			<div>
				<FaceForm { ...this.props } />
			</div>
		)
	}
}

export default Face;