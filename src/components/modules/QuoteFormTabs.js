import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardTravel from "@material-ui/icons/CardTravel";
import Home from "@material-ui/icons/Home";
import HotelForm from "./../forms/HotelForm";
import HolidayForm from "./../forms/HolidayForm";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: "12px 24px 24px" }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  tabContainer: {
    flexGrow: 1,
    maxWidth: 300,
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up(380)]: {
      maxWidth: 360
    },
    [theme.breakpoints.up(550)]: {
      marginLeft: 80
    }
  },
  tabItems: {
    minWidth: 100,
    [theme.breakpoints.up(380)]: {
      minWidth: 120
    }
  }
});

class QuoteFormTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Paper className={classes.tabContainer}>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab
            className={classes.tabItems}
            icon={<CardTravel />}
            label="Holidays"
          />
          <Tab className={classes.tabItems} icon={<Home />} label="Hotels" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <HolidayForm />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <HotelForm />
          </TabContainer>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(QuoteFormTabs);
