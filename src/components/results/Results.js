import React from 'react';
import ReactJson from 'react-json-view';
import './Results.scss';

function Results({ props }) {
  return (
    <section className="resultSec">
      <ReactJson
        src={props.headers}
        name="Headers"
        iconStyle={'triangle'}
        collapsed={false}
        enableClipboard={false}
        displayDataTypes={false}
      />
      <ReactJson
        src={props.response}
        name="Response"
        iconStyle={'triangle'}
        collapsed={false}
        enableClipboard={false}
        displayDataTypes={false}
      />
    </section>
  );
}

export default Results;