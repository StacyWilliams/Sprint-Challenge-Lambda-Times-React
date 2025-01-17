import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  console.log("props in Tab", props)
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
     let tab = "";
     if(props.tab === props.selectedTab) {
       tab = "tab active-tab"
     } else {
       tab ='tab'
     }
   
  const tabMatch = props.tab === props.selectedTab;

  return (
    <div
      className={`tab ${tabMatch ? "active-tab" : null}`}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
       
         props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab : PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
