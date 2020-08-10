
import React, { Component, Fragment } from 'react'
import NavBar from '../navigation_bar';
class Premium extends Component {
    render(){
        return(
             <Fragment>     
                <NavBar/> 
                <div id="wrapper">
                    <div className="container">

                        <div className="comparisoncol">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <div className="item registered_plan">
                                        <div className="title">الاعضاء</div>
                                        <ul>
                                            <li>1000 Mb</li>
                                            <li>10 GB</li>
                                            <li>Unlimited</li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li>200 days after last download</li>
                                        </ul>
                                    </div>
                                </div>    
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <div className="item premium_plan">
                                        <div className="title">العضوية الذهبية</div>
                                        <ul>
                                            <li>Unlimited</li>
                                            <li>Unlimited</li>
                                            <li>Unlimited</li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li>Never</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <div className="item free_plan">
                                        <div className="title">الزوار</div>
                                        <ul>
                                            <li>200 Mb</li>
                                            <li> - </li>
                                            <li>Unlimited</li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-check"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li><i className="fa fa-close"></i></li>
                                            <li>60 days after last download</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <div className="item features">
                                        <div className="title">المميزات</div>
                                        <ul>
                                            <li>	أقصى حجم للملف</li>
                                            <li>مساحة التخزين</li>
                                            <li>حجم التحميل</li>
                                            <li>رفع من رابط</li>
                                            <li>رفع من رابط</li>
                                            <li>رفع عن طريق FTP</li>
                                            <li>معلومات/إدارة الملفات</li>
                                            <li>دعم برامج التحميل</li>
                                            <li>استئنافالتحميل</li>
                                            <li>عدم تاخير التحميل</li>
                                            <li>لا رموز تحقق</li>
                                            <li>عدم عرض الاعلانات</li>
                                            <li>مشاهدة الفيديو اونلاين</li>
                                            <li>متى يتم خذف ملفاتك ؟</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>    

                        <div className="paymenytsplans">
                            <div className="row">

                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                                                {/* اشترك الان بأحد أنظمة العضوية المتميزة */}
                                    <div className="title">Subscribe now to one of the systems</div>
                                </div>
                                
                                <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
                                    <div className="rgt tab_menu">
                                                                                            {/* خطط ممتازة */}
                                        <a href="###" className="Active" name="buy-premium-days">Excellent plans</a>
                                                                                {/* خطط  الترافيك الممتازة */}
                                        <a href="###" name="buy-premium-traffic">Excellent traffic plans</a>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                        

                                <div className="payment_table" id="Prem_days">

                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div className="boxsmall">
                                            <div className="days">إشترك لمدة 7 يوم</div>
                                            <div className="price">$<p>3.00</p></div>
                                            
                                            <div className="payicons">
                                                <ul>
                                                    <li><a href="###"><img src="./images/buy_paypal.gif" alt="PayPal"/></a></li>    
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div className="boxsmall">
                                            <div className="days">إشترك لمدة 30 يوم</div>
                                            <div className="price">$<p>10.00</p></div>
                                            <div className="payicons">
                                                <ul>   
                                                    <li><a href="###"><img src="./images/buy_paypal.gif" alt="PayPal"/></a></li>    
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div className="boxsmall">
                                            <div className="days">إشترك لمدة 120 يوم</div>
                                            <div className="price">$<p>40.00</p></div>
                                            <div className="payicons">
                                                <ul>
                                                    
                                                    <li><a href="###"><img src="/images/buy_paypal.gif" alt="PayPal"/></a></li>
                                                        
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div className="boxsmall">
                                            <div className="days">إشترك لمدة 365 يوم</div>
                                            <div className="price">$<p>90</p></div>
                                            <div className="payicons">
                                                <ul>
                                                    
                                                    <li><a href="###"><img src="./images/buy_paypal.gif" alt="PayPal"/></a></li>
                                                        
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>

                                <div className="payment_table" id="Prem_traffic">
                                    
                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div className="boxsmall">
                                            <div className="days">1.74 GB</div>
                                            <div className="price">$<p>1.75</p></div>
                                            <div className="payicons">
                                                <ul>
                                                    
                                                    <li><a href=""><img src="./images/buy_paypal.gif" alt="PayPal"/></a></li>
                                                        
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div className="boxsmall">
                                            <div className="days">2.07 GB</div>
                                            <div className="price">$<p>2.15</p></div>
                                            <div className="payicons">
                                                <ul>
                                                    
                                                    <li><a href=""><img src="/images/buy_paypal.gif" alt="PayPal"/></a></li>
                                                        
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                        <div className="boxsmall">
                                            <div className="days">3.49 GB</div>
                                            <div className="price">$<p>3.37</p></div>
                                            <div className="payicons">
                                                <ul>
                                                    
                                                    <li><a href=""><img src="/images/buy_paypal.gif" alt="PayPal"/></a></li>
                                                        
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                           
                            </div>
                        </div>
                   
                    </div>
                </div>
            </Fragment>

        )
    }
}export default Premium;