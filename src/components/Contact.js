import React from 'react';

class Contact extends React.Component {
	render() {
		return(
			<div id="contact"  className="contact">
				<div className="container h-100">
					<div className="row h-100 justify-content-center align-items-center">
						<div className="col-md-10 text">
							<h2>Get in touch.</h2>
						</div>
					</div>
					<div className="row h-100 justify-content-center align-items-center">
						<div className="col-md-10 text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa. Nam urna orci, malesuada in erat vel, tempor imperdiet leo. Morbi hendrerit tincidunt feugiat. In at porta leo, eget ultrices massa. Nunc nisi urna, facilisis vel maximus eu, feugiat eget erat. Duis vel scelerisque tellus. Ut quis lacus vitae leo lacinia fermentum.

</p>
						</div>
					</div>
					<div className="row h-100 justify-content-center align-items-center">
						<div className="col-md-10">
							<Form />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Form extends React.Component {
	render() {
		return(
			<div className="contact">
	            <form>
	            	<div className="row">
	            		<div className="col-md-6 col-sm-12">
	            			<label htmlFor="name">Name</label>
							<input type="text" className="field form-control" id="name"/>
	            		</div>
	            		<div className="col-md-6 col-sm-12">
	            			<label htmlFor="email">Email</label>
							<input type="text" className="field form-control" id="email"/>
	            		</div>
	            	</div>
	            	<div className="row">
	            		<div className="col-md-12">
	            			<label htmlFor="message">Message</label>
							<input type="text" className="field form-control" id="message"/>
	            		</div>
	            	</div>
	            	<div className="row">
	            		<div className="col-md-6 col-sm-12">
	            			<div className="icons">
	            				<span><i className="fa fa-twitter"></i></span>
	            				<span><i className="fa fa-facebook"></i></span>
	            				<span><i className="fa fa-dribbble"></i></span>
	            				<span><i className="fa fa-google-plus-square"></i></span>
	            			</div>
	            		</div>
	            		<div className="col-md-6 col-sm-12">
	            			<div className="submit">
            					<span className="submit-wrapper"><i className="fa fa-envelope"></i> Send message</span>
	            			</div>
	            		</div>
	            	</div>
	            </form>
			</div>
		);
	}
}

export default Contact;