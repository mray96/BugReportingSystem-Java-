import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BugService from '../services/BugService';
import { Link } from 'react-router-dom';

export default class ListBugComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: []
    };
    this.deleteBug = this.deleteBug.bind(this);
  }

  deleteBug(id) {
    BugService.deleteBug(id).then((res) => {
      this.setState({ bugs: this.state.bugs.filter((bug) => bug.id !== id) });
    });
  }

  componentDidMount() {
    BugService.getBugs().then((res) => {
      this.setState({ bugs: res.data });
    });
  }

  getStatistics() {
    const { bugs } = this.state;
    const numReporters = new Set(bugs.map(bug => bug.bugReporter)).size;
    const numBugs = bugs.length;

    const bugTypeCount = bugs.reduce((acc, bug) => {
      acc[bug.bugType] = (acc[bug.bugType] || 0) + 1;
      return acc;
    }, {});

    const mostCommonBugType = Object.keys(bugTypeCount).reduce((a, b) => bugTypeCount[a] > bugTypeCount[b] ? a : b, '');

    return {
      numReporters,
      numBugs,
      mostCommonBugType
    };
  }

  render() {
    const { numReporters, numBugs, mostCommonBugType } = this.getStatistics();

    return (
     <><div className="pre-header">
     <div>
       <div className="row">
         <div className="col-lg-8 col-sm-8 col-7">
           <ul className="info">
             <li>
               <a href="mailto:BugReporter@company.com">
                 <i className="fa fa-envelope"></i> BugReporter@company.com
               </a>
             </li>
             <li>
               <a href="tel:+923042458206">
                 <i className="fa fa-phone"></i> +92 304 2458206
               </a>
             </li>
           </ul>
         </div>
         <div className="col-lg-4 col-sm-4 col-5">
           <ul className="social-media">
             <li>
               <a href="#">
                 <i className="fa fa-facebook"></i>
               </a>
             </li>
             <li>
               <a href="https://www.linkedin.com/in/ahsan-sajid-1b06a1171">
                 <i className="fa fa-linkedin"></i>
               </a>
             </li>
             <li>
               <a href="#">
                 <i className="fa fa-twitter"></i>
               </a>
             </li>
             <li>
               <a href="#">
                 <i className="fa fa-dribbble"></i>
               </a>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>

   <header
     className="header-area header-sticky wow slideInDown"
     data-wow-duration="0.50s"
     data-wow-delay="0s"
   >
     <div className="container">
       <div className="row">
         <div className="col-12">
           <nav className="main-nav">
             {/* ***** Logo Start ***** */}
             <a href="/" className="logo">
               <img
                 src="../static/assets/images/bugLogo.png"
                 alt="Logo"
                 style={{ width: "250px", height: "auto" }}
               />
             </a>
             {/* ***** Logo End ***** */}
             {/* ***** Menu Start ***** */}
             <ul className="nav">
               <li className="scroll-to-section">
                 <a href="/">Home</a>
               </li>
               <li className="scroll-to-section">
                 <a href="/blog">Blog</a>
               </li>
               <li>
                 <a href="/addBug">Add bug</a>
               </li>
               <li>
                 <a href="/record">Records</a>
               </li>
               <li className="border-first-button">
                 {/* <a href="/email">Report Bug</a> */}
               </li>
             </ul>
             {/* ***** Menu End ***** */}
             <a className="menu-trigger">
               <span>Menu</span>
             </a>
           </nav>
         </div>
       </div>
     </div>
   </header>
     <div style={{ margin: '100px auto', maxWidth: '900px', minHeight: '100vh' }} className="bug-list-container">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }} className="bug-list-heading">Recorded Bugs</h2>

        <div className="statistics-cards" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div className="card" style={{ padding: '20px', backgroundColor: '#5A67D8', color: 'white', borderRadius: '8px', flex: '1', marginRight: '10px', textAlign: 'center' }}>
            <h3>No. of Reporters</h3>
            <p style={{color:'white'}}>{numReporters}</p>
          </div>
          <div className="card" style={{ padding: '20px', backgroundColor: '#68D391', color: 'white', borderRadius: '8px', flex: '1', marginRight: '10px', textAlign: 'center' }}>
            <h3>Bugs Count</h3>
            <p style={{color:'white'}}>{numBugs}</p>
          </div>
          <div className="card" style={{ padding: '20px', backgroundColor: '#63B3ED', color: 'white', borderRadius: '8px', flex: '1', textAlign: 'center' }}>
            <h3>Most Common Bug</h3>
            <p style={{color:'white'}}>{mostCommonBugType}</p>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }} className="add-bug-link">
          <Link to="/addBug" className="btn btn-primary">
            Add Bug
          </Link>
        </div>

        <div style={{ overflowX: 'auto' }} className="bug-table-container">
          <table style={{ width: '100%' }} className="bug-table table table-striped table-bordered">
            <thead>
              <tr>
                <th>Bug Reporter</th>
                <th>Bug Type</th>
                <th>Reason</th>
                <th>Site Name</th>
                <th>Site Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bugs.map((bug) => (
                <tr key={bug.id}>
                  <td>{bug.bugReporter}</td>
                  <td>{bug.bugType}</td>
                  <td>{bug.reason}</td>
                  <td>{bug.siteName}</td>
                  <td>{bug.siteLink}</td>
                  <td style={{ display: 'flex' }}>
                    <Link to={`/updateBug/${bug.id}`} className="btn btn-info" style={{ marginRight: '5px' }}>
                      Update
                    </Link>
                    <button
                      onClick={() => this.deleteBug(bug.id)}
                      className="btn btn-danger"
                      style={{ marginRight: '5px' }}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/viewBug/${bug.id}`}
                      className="btn btn-info"
                      style={{ marginRight: '5px' }}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div></>
    );
  }
}
