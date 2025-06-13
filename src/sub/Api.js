import React from 'react';

function Api(props) {
  return (
    <section className='sub'>
      <div>
        <h2>API Documentation</h2>
        <p>This is a lightweight web service, (REST interface), which provides an easy way to access the YTS website.
          An API (Application programming interface) is a protocol intended to be used as an interface by software components to communicate with each other.
          Our API supports many methods, so there should not be a problem coding some nice applications.</p>

        <p>If you find any bug, or have any questions, or any suggestions please get in touch with us</p>
        <hr />
        <br />
        <h3>API Endpoints</h3>

        <ul>
          <li>- List Movies</li>
          <li>- Movie Details</li>
          <li>- Movie Suggestions</li>
          <li>- Movie Parental Guides</li>
        </ul>

        <p>All the API endpoints return the same data structure as below</p>

        <h3>List Movies</h3>
        <p>HTTP GET</p>
        <table>
          <caption></caption>
          <thead>
            <th>Endpoint</th>
            <th>Description</th>
          </thead>
          <tbody> 
            <tr>
              <td>
                <ul>
                  <li>https://yts.mx/api/v2/list_movies.json</li>
                  <li>https://yts.mx/api/v2/list_movies.jsonp</li>
                  <li>https://yts.mx/api/v2/list_movies.xml</li>
                </ul>
              </td>
              <td>Used to list and search through out all the available movies. Can sort, filter, search and order the results</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Api;