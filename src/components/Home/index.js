
import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Fragment>		
				<div id="sidebarphone">
					    <button className="closemenu" type="button"><i className="fa fa-times" aria-hidden="true"></i></button>
						<ul className="nav navbar-nav">
							<li><NavLink  exact to="/">Home</NavLink></li>			
							<li><NavLink to="/login">Login</NavLink></li>
							<li><NavLink to="/signUp">Sign Up</NavLink></li>	
							<li><NavLink to="/premium">Premium</NavLink></li>	
							<li><NavLink to="/contact">Contact Us</NavLink></li>
						</ul>
				</div>	
				<div id="intro">
					<div className="inside">
						<div className="container">
							<div id="headerone">
								<div className="socialmedia wow fadeInUp">
									<a href="#" title="facebook"><i className="fa fa-facebook"></i></a>
									<a href="#" title="twitter"><i className="fa fa-twitter"></i></a>
									<a href="#" title="youtube"><i className="fa fa-youtube"></i></a>
									<a href="#" title="google"><i className="fa fa-google-plus"></i></a>
									<a href="#" title="instagram"><i className="fa fa-instagram"></i></a>
								</div>
								<div className="clearfix"></div>
								<div className="headerbottom">

									<div className="logo wow fadeInUp">
										<img src="vendor/images/water.png" alt="Safebox page to upload photos and files"/>
									</div>
									{/*العلامة اللى بتظهر زى البوكس لما الشاشة بتصغر  */}
              					    <button className="buttonmenu hidden-md hidden-lg wow fadeInUp" type="button"><i className="fa fa-bars"></i></button>
                                    
									{/* user */}
									<div className="langarea hidden-xs hidden-sm wow fadeInUp">
										<div className="dropdown">
											<button className="dropbtn">Ahmed Abdellah XD</button>
											<div className="dropdown-content">
												<NavLink to="/uploadFile">upload file</NavLink>
												<NavLink to="/myFile">My file</NavLink>
												<a href="#">log out</a>
											</div>
										</div>								
									</div>

									<ul className="hidden-xs hidden-sm wow fadeInUp">
										<div>
										<li><NavLink  exact to="/">Home</NavLink></li>			
										<li><NavLink to="/login">Login</NavLink></li>
										<li><NavLink to="/signUp">Sign Up</NavLink></li>	
										<li><NavLink to="/premium">Premium</NavLink></li>	
										<li><NavLink to="/contact">Contact Us</NavLink></li>
										</div>
									</ul>
									<div className="clearfix"></div>
								</div>
							</div>
							<a className="uploadarae wow fadeInUp" href="#">
								<div className="uploadicons"><img src="vendor/images/upload_img1.png"  alt="Safebox page to upload photos and files"/><div className="arrowup"></div></div>
								<span>Share and upload</span>
								<p>Free</p>
							</a>
						</div>
					</div>
				</div>

	            <div id="ouradvantages">
					<div className="container">
						<div className="title wow fadeInUp">Why us?!</div>
						<div className="desc wow fadeInUp">Safebox provides services such:</div>
						<ul>
							<li className="wow fadeInUp">
								<span>Link files anywhere</span>
								<div className="icon"><img src="vendor/images/icon4.png"  alt="Safebox page to upload photos and files"/></div>
								{/* <p>يمكنكم أيضاً سحب الملفات من روابط لمواقع أخرى، وتخزينها فى حسابكم على الموقع مجاناً وبكل سهولة.</p> */}
								<p>You can copy your files link and paste it anywhere and anyone will be able to access it.</p>		
							</li>
							
							<li className="wow fadeInUp">
								<span>Secure upload</span>
								<div className="icon"><img src="vendor/images/icon3.png" alt="Safebox page to upload photos and files"/></div>
								{/* <p>يوفر الموقع أيضاً إمكانية نسخ الملفات بكل أنواعها وإضافتها إلى حسابكم بشكل آلى، مع إمكانية مشاركتها مع الأصدقاء.</p> */}
								<p>Upload your files for anyone to benefit from them without being afraid of them stealing your hard work from you.</p>			
							</li>

							<li className="wow fadeInUp">
								<span>Torrent files</span>
								<div className="icon"><img src="vendor/images/icon2.png"  alt="Safebox page to upload photos and files"/></div>
							{/* <p>يوفر الموقع إمكانية رفع ملفات التورنت، وهى أحد طرق تنزيل الملفات، وفيها يتم التحميل من أجهزة عادية أخرى تشارك الملف معك.</p> */}
								<p>You can upload torrent files, which is a way of downloading a single file from another end PCs like yours.</p>
							</li>

							<li className="wow fadeInUp">
								<span>Files upload</span>
								<div className="icon"><img src="vendor/images/icon1.png" alt="Safebox page to upload photos and files"/></div>
								{/* <p> يتبح لكم إمكانية رفع الملفات بشتى أنواعها (مستندات - برامج - فيديو - ألعاب - كتب)، كما يدعم الموقع أنواع أخرى من الملفات.</p> */}
								<p>Upload files whether they are documents, books, images, videos or voices, and even more.</p>
							</li>

						</ul>
	                </div>
                </div>

				<div id="filesafe">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
								<div className="txt wow fadeInUp">
									<span>Your files are safe</span>
									{/* <p>UP00 يهتم دائمن في ادق التفاصيل وذالك لرغبته في توفير افضل خدمه ممكنه , يحتوي الموقع على العديد من الخدمات والمميزات ولاكن مهما تعددة الخدمات والمميزات تبقى غير كافيه وتصبح بدون معنى اذا لم يتوفر الموقع على اهم عنصرين وهما الامان والسرعه  حيث انه لكل منهم جانب مهم ولذالك قمنا بتوفير افضل سبل الحمايه الممكنه والعاليه الفعاليه وتوفير افضل التطويرات الاكترونيه عبر الشبكه العالميه لضمان افضل سرعه ممكنه كل ذالك لتنال عزيزي العضو ( الزائر ) على افضل تجربه رفع ومشاركه ونسخ ملفاتك عبر شبكة النت بكول سهوله ويسر . </p> */}
									<p>Always interested in the smallest details, and that is for his desire to provide the best possible service, the site contains many services and features,
										 but no matter how many services and features remain inadequate and become meaningless if the site is not available on the two most important elements as well as safety
										  and speed as each of them has an important aspect and therefore it can better Highest possible and effective protection methods. The best electronic developments across
										   the World Wide Web, the best possible speed. All of that, to get the dear member (visitor) the best experience of
										    uploading, sharing and copying your files over the internet with ease and ease.	</p>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
								<div className="img wow fadeInUp"><img src="vendor/images/img1.png" alt="Safebox page to upload photos and files"/></div>
							</div>
							
						</div>
					</div>
				</div>
			</Fragment>
        )
    }
} export default Home;
