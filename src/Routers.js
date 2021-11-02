import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Base from './components/Layout/Base';
import Basepages from './components/Layout/Basepages';
import Alerts from './components/Elements/Alert/Alerts';
import Buttons from './components/Elements/Button/Buttons';
import Colors from './components/Elements/Color/Colors';
import Dropdowns from './components/Elements/Dropdown/Dropdowns';
import Typographys from './components/Elements/Typographys/Typographys';
import Navs from './components/Elements/Navs/Navs';
import Models from './components/Elements/Model/Models';
import Fontawesome from './components/Fontawesome/Fontawesome';
import Switchs from './components/Elements/Switchs/Switchs';
import Lists from './components/Elements/Lists/Lists';
import Ratings from './components/Elements/Ratings/Ratings';
import Nicescroll from './components/Elements/Nicescroll/nicescroll';
import Login from './components/Authentication/Login/Login';
import Tabss from './components/Elements/Tabs/Tabss';
import Progressbar from './components/Elements/Progress/Progressbar';
import PopoverTooltips from './components/Elements/Popover_Tooltips/Popover_Tooltips';
import DatePickers from './components/Elements/Datepicker/Datepickers';
import Mapss from './components/Maps/Maps';
import Accordions from './components/Elements/Accordion/Accordions';
import Chartjs from './components/Chart/Chartjs';
import Datatables from './components/Tables/Datatables/Datatables';
import Tables from './components/Tables/Tables/Tables';
import Forminputs from './components/Forms/Forminput/Forminputs';
import Formvalidations from './components/Forms/Formvalidation/Formvalidations';
import Errors from './components/Custompage/Error/Errors';
import Formgroups from './components/Forms/Inputgroup/Inputgroups';
import Eventcalendar from './components/Calendar/Eventcalendar';
import Todolist from './components/Todolist/Todolist';
import Register from './components/Authentication/Register/Register';
import Blankpage from './components/Custompage/Blankpage/Blankpage';
import Faq from './components/Custompage/Faq/Faq';
import Contacts from './components/Custompage/Contacts/Contacts';
import Invoice from './components/Custompage/Invoice/Invoice';
import Profile from './components/Custompage/Profile/Profile';
import Dashboard1 from './components/Dashboard/Dashboard1/Dashboard1';
import Dashboard2 from './components/Dashboard/Dashboard2/Dashboard2';
import Dashboard3 from './components/Dashboard/Dashboard3/Dashboard3';
import Widgets from './components/Widgets/Widgets';
import Chat from './components/Chat/Chat';
import Mail from './components/MailBox/Mailbox';
import Pricing1 from './components/Pricing/Pricing1/Pricing1';
import Pricing2 from './components/Pricing/Pricing2/Pricing2';
import Pricing3 from './components/Pricing/Pricing3/Pricing3';
import Comingsoon from './components/Custompage/Comingsoon/Comingsoon';
import ForgotPassword from './components/Authentication/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword/ResetPassword';
import LockScreen from './components/Authentication/LockScreen/LockScreen';
import MailConfirmation from './components/Authentication/MailConfirmation/MailConfirmation';
import FileManager from './components/FileManager/FileManager';
import Knowledge from './components/Knowledge/Knowledge';
import Product from './components/Ecommerce/Product/Product';
import ProductDetail from './components/Ecommerce/ProductDetail/ProductDetail';
import NewProduct from './components/Ecommerce/NewProduct/NewProduct';
import Order from './components/Ecommerce/Order/Order';
import OrderDetail from './components/Ecommerce/OrderDetail/OrderDetail';
import Academy from './components/Academy/Courses/Courses';
import AcademyDetails from './components/Academy/Details/Details';
import Introduction from './components/Documentation/Introduction';
import Filestructure from './components/Documentation/Filestructure';
import Installation from './components/Documentation/Installation';
import Global from './components/Documentation/Global';
import Components from './components/Documentation/Components';
import Extra from './components/Documentation/Extra';
import Source from './components/Documentation/Source';
import Note from './components/Note/Note';


const listofPages = [
    '#/login',
    '#/register',
	 '#/comingsoon',
	 '#/forgot-password',
	 '#/reset-password',
	 '#/lockscreen',
	 '#/mail-confirmation',
];

const Routers = () => {

    if(listofPages.indexOf(location.hash) > -1)
    {
        return(
            <Basepages>

                    <Route  path="/login" component={Login} />
                    <Route path="/register" component={Register}/>
					<Route path="/comingsoon" component={Comingsoon} />
					<Route path="/forgot-password" component={ForgotPassword} />
					<Route path="/reset-password" component={ResetPassword} />
					<Route path="/lockscreen" component={LockScreen} />
					<Route path="/mail-confirmation" component={MailConfirmation} />

            </Basepages>
        )
    }
    else
    {
		return(
				<Base>
					<Switch>

						<Route exact path="/" component={Dashboard1}/>
						<Route path="/accordion" component={Accordions}/>
						<Route path="/alerts" component={Alerts} />
						<Route path="/buttons" component={Buttons} />
						<Route path="/colors" component={Colors} />
						<Route path="/dropdown" component={Dropdowns} />
						<Route path="/typographys" component={Typographys} />
						<Route path="/navs" component={Navs} />
						<Route path="/model" component={Models} />
						<Route path="/fontawesome" component={Fontawesome} />
						<Route path="/switchs" component={Switchs} />
						<Route path="/lists" component={Lists} />
						<Route path="/ratings" component={Ratings} />
						<Route path="/nicescroll" component={Nicescroll} />
						<Route path="/chartjs" component={Chartjs} />
						<Route path="/tabs" component={Tabss} />
						<Route path="/progess" component={Progressbar} />
						<Route path="/popover_tooltips" component={PopoverTooltips} />
						<Route path="/datepicker" component={DatePickers} />
						<Route path="/maps" component={Mapss} />
						<Route path="/datatable" component={Datatables} />
						<Route path="/tables" component={Tables} />
						<Route path="/forminput" component={Forminputs} />
						<Route path="/formvalidation" component={Formvalidations} />
						<Route path="/inputgroup" component={Formgroups} />
						<Route path="/error" component={Errors} />
						<Route path="/eventcalendar" component={Eventcalendar} />
            			<Route path="/Todolist" component={Todolist} />
						<Route path="/blankpage" component={Blankpage}/>
						<Route path="/faq" component={Faq}/>
						<Route path="/contacts" component={Contacts}/>
						<Route path="/invoice" component={Invoice}/>
						<Route path="/Profile" component={Profile}/>
						<Route path="/widget" component={Widgets} />
						<Route path="/chat" component={Chat} />
						<Route path="/mailbox" component={Mail} />
						<Route path="/pricing1" component={Pricing1} />
						<Route path="/pricing2" component={Pricing2} />
						<Route path="/pricing3" component={Pricing3} />
						<Route path="/filemanager" component={FileManager} />
						<Route path="/Knowledge" component={Knowledge} />
						<Route path="/product" component={Product} />
						<Route path="/product-detail" component={ProductDetail} />
						<Route path="/new-product" component={NewProduct} />
						<Route path="/order" component={Order} />
						<Route path="/order-detail" component={OrderDetail} />
						<Route path="/academy" component={Academy} />
						<Route path="/academy-details" component={AcademyDetails} />
						<Route path="/dashboard2" component={Dashboard2} />
						<Route path="/dashboard3" component={Dashboard3} />
						<Route path="/note" component={Note} />
						<Route path="/document-Introduction" component={Introduction} />
						<Route path="/document-Filestructure" component={Filestructure} />
						<Route path="/document-installation" component={Installation} />
						<Route path="/document-global" component={Global} />
						<Route path="/document-components" component={Components} />
						<Route path="/document-extra" component={Extra} />
						<Route path="/document-source&credits" component={Source} />

					</Switch>
				</Base>
		);
    }
}
export default Routers;
