import React from 'react';

class Footer extends React.Component {
	render() {
		return(
			<div className="footer">
				<div className="container">
					<footer>
						<div className="row">
							<div className="col-md-6 col-sm-12">
								<div className="copyright">
									<p>&copy; 2014 <span>PAPERS</span>. All Rights Reserved.</p>
								</div>
							</div>
							<div className="col-md-6 col-sm-12">
								<div className="design">
									<p>Design by FarShore.</p>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		);
	}
}

export default Footer;