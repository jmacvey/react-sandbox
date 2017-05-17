import React from 'react';
import {Bio as BioLayout, Tab as TabLayout} from './components';
import {Route} from 'react-router-dom';

export const Bio = () => <Route path="/heroes/:id" component={BioLayout}/>;

export const Tab = () => <Route path="/heroes" component={TabLayout}/>