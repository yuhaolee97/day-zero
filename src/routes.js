/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import Questions from "views/Questions/Questions.js";
import Loans from "views/Loans/Loans";
import Insurance from "views/Insurance/Insurance";
import Investments from "views/Investments/Investments";
import Referral from "views/Referral/Referral"
import Trophy from "views/Trophy/Trophy"
import Regular from "pages/Regular";
import RegularForm from "mycomponents/RegularForm";
import News from "views/News/News";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "???????? ??????????????",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/creditscore",
    name: "Loans",
    rtlName: "???????? ??????????????",
    icon: QuestionAnswerIcon,
    component: Loans,
    layout: "/admin",
  },
  {
    path: "/investments",
    name: "Investments",
    rtlName: "???????? ??????????????",
    icon: Language,
    component: Investments,
    layout: "/admin",
  },
  {
    path: "/insurance",
    name: "Insurance",
    rtlName: "???????? ??????????????",
    icon: LibraryBooks,
    component: Insurance,
    layout: "/admin",
  },
  {
    path: "/referral",
    name: "Referral",
    rtlName: "??????????",
    icon: LocationOn,
    component: Referral,
    layout: "/admin",
  },
  {
    path: "/trophy",
    name: "Achievements",
    rtlName: "??????????",
    icon: Language,
    component: Trophy,
    layout: "/admin",
  },
  // {
  //   path: "/questions",
  //   name: "Questions",
  //   rtlName: "???????? ??????????????",
  //   icon: QuestionAnswerIcon,
  //   component: Questions,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   rtlName: "?????? ???????????? ????????????????",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "?????????? ????????????",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "??????????",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "????????????",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "??????????",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "??????????????",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "???????????????? ???? ???????? ???? ????",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    path: "/regular",
    name: "Make a lifetime update",
    rtlName: "???????????? ????????????????????",
    icon: Unarchive,
    component: RegularForm,
    layout: "/admin",
  },

  {
    path: "/news",
    name: "News",
    rtlName: "???????????? ????????????????????",
    icon: Notifications,
    component: News,
    layout: "/admin",
  },
  

];

export default dashboardRoutes;
