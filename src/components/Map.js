import React from 'react';

class MapComponent extends React.Component {
	render() {
		return(
			<div className="map">
	            <div className="container-fluid">
	            	<div className="row">
	            		<iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.897162082718!2d-6.262337684136886!3d53.309287979971295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670bfe274a9b21%3A0xf3ace18db64a0534!2sWeb+Summit+HQ!5e0!3m2!1sen!2sie!4v1532798224077" ></iframe>
	            	</div>
	            </div>
			</div>
		);
	}
}

export default MapComponent;