import React from "react";
// @material-ui/core components
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server, investments, loans, insurance } from "variables/general.js";
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar",
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit",
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
    },
    "& td, & th": {
      display: "table-cell",
    },
  },
  center: {
    textAlign: "center",
  },
};

const useStyles = makeStyles(styles);

export default function Insurance() {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={10}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>
              Insurance
            </h4>
            <p className={classes.cardCategoryWhite}>
              A side-by-side comparison of the kinds of insurance, and recommendations to buy.
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.tableUpgradeWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th />
                    <th className={classes.left}>Free</th>
                    <th className={classes.center}>PRO</th>
                    <th className={classes.right}>Free</th>
                    <th className={classes.right}>PRO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Components</td>
                    <td className={classes.left}>30</td>
                    <td className={classes.center}>200</td>
                    <td className={classes.right}>30</td>
                    <td className={classes.right}>200</td>
                    
                  </tr>
                  <tr>
                    <td>Plugins</td>
                    <td className={classes.left}>2</td>
                    <td className={classes.center}>10</td>
                    <td className={classes.right}>2</td>
                    <td className={classes.center}>10</td>
                  </tr>
                  <tr>
                    <td>Example Pages</td>
                    <td className={classes.left}>7</td>
                    <td className={classes.center}>28</td>
                    <td className={classes.center}>7</td>
                    <td className={classes.center}>28</td>
                  </tr>
                  <tr>
                    <td>Login, Register, Pricing, Lock Pages</td>
                    <td className={classes.left}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ReactTables, ReactVectorMap, ReactSweetAlert, Wizard,
                      Validation, ReactBigCalendar etc...
                    </td>
                    <td className={classes.left}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Mini Sidebar</td>
                    <td className={classes.left}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Premium Support</td>
                    <td className={classes.left}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.left}>Free</td>
                    <td className={classes.center}>Just $59</td>
                    <td className={classes.center}>Free</td>
                    <td className={classes.center}>Just $59</td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>
                      <Button
                        round
                        color="danger"
                        href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mdr-upgrade-live"
                      >
                        I am interested to be recommended!
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
