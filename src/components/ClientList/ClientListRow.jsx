import React from 'react';
import { Link } from 'react-router';


const ClientListRow = ({
  client
}) => {

  let warningIcon = (<th />);
  if (client.warnings) {
    warningIcon = (<th display="none"><i className="fa fa-info-circle" aria-hidden="true" /></th>);
  }

  // const products = {};
  const products = client.products.reduce((previous, product) => {
    return previous[p.name] = product.id
  }, {})
  // client.products.forEach((p) => {
  //   products[p.name] = p.id;
  // });
  console.dir(products);

  return (
    <tr>
      <th>{client.name}</th>
      <th><i className={products['File Text'] ? 'fa fa-file-text' : ''} aria-hidden="true" /></th>
      <th><i className={products.Bullseye ? 'fa fa-bullseye' : ''} aria-hidden="true" /></th>
      <th><i className={products.Desktop ? 'fa fa-desktop' : ''} aria-hidden="true" /></th>
      <th><i className={products.Users ? 'fa fa-users' : ''} aria-hidden="true" /></th>
      <th><i className={products.Envelope ? 'fa fa-envelope' : ''} aria-hidden="true" /></th>
      <th><i className={products['Bar Chart'] ? 'fa fa-bar-chart' : ''} aria-hidden="true" /></th>
      <th><i className={products['Envelope O'] ? 'fa fa-envelope-o' : ''} aria-hidden="true" /></th>
      <th><i className={products.Tags ? 'fa fa-tags' : ''} aria-hidden="true" /></th>
      <th><i className={products['Video Camera'] ? 'fa fa-video-camerat' : ''} aria-hidden="true" /></th>
      <th><p>{client.schedule}</p></th>
      <th><i className="fa fa-signal" aria-hidden="true" /></th>
      {warningIcon}
    </tr>
  );
};


export default ClientListRow;
