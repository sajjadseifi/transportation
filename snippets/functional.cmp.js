//default
import React from "react";
const FunctionalConponent = (props) => {

    reutnr(
        <div>

        </div>
    )
};

export default FunctionalConponent;


//classes
import classes from "./${FunctionalConponent}.module.css";


//with dispatch
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

const FunctionalConponent = (props) => {

    const dispatch = useDispatch();

    const state = useSelector(state => state);

    useEffect(() => {

    }, [dispatch]);


    reutnr(
        <div>
            FunctionalConponent
        </div>
    )
};

export default FunctionalConponent;


//fc with react router dom
import React from "react";
import { Switch, Route } from "react-router-dom";
const FunctionalConponent = (props) => {

    reutnr(
        <Switch>
            <Route path="/" component={null} />
        </Switch>
    )
};

export default {FunctionalConponent};

