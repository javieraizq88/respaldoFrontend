import React from 'react'

const ContactCard = props =>{

    return(
        <>
        <li className="list-group-item card">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src="https://via.placeholder.com/150" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className="float-right">
						<button className="btn">
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn">
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<p className="name lead">Name</p>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span>Personal Trainer</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="small">boxing, body building, crossfit</span>
					<br />
                    
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="small text-truncate"> 5 years experience</span>
				</div>
			</div>
		</li>
        </>

    )
}

export default ContactCard;